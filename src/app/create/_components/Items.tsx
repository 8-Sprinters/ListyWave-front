import { ChangeEvent, useState } from 'react';
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form';
import { DragDropContext, Draggable, DropResult } from 'react-beautiful-dnd';

import { itemPlaceholder } from '@/lib/constants/placeholder';
import { itemTitleRules, itemCommentRules, itemLinkRules } from '@/lib/constants/formInputValidationRules';
import { StrictModeDroppable } from '@/components/StrictModeDroppable';
import { FormErrors } from '../page';
import ItemLayout from './ItemLayout';
import LinkModal from './LinkModal';
import Preview from './Preview';
import * as styles from './Items.css';
import AddItemButton from './AddItemButton';

// http:// 없을경우 추가
const ensureHttp = (link: string) => {
  if (!link.startsWith('http://' || 'https://')) {
    return 'http://' + link;
  }
  return link;
};

// 링크 도메인만 추출 (e.g. naver.com)
const urlToDomain = (link: string) => {
  const domain = new URL(link).hostname.replace('www.', '');
  return domain;
};

export default function Items() {
  const {
    register,
    control,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext();

  const {
    fields: items,
    append,
    remove,
  } = useFieldArray({
    name: 'items',
    control,
    rules: { minLength: 3, maxLength: 10 },
  });

  const [currentLink, setCurrentLink] = useState<string>('');
  const [domain, setDomain] = useState<string>(''); //링크 미리보기

  const watchItems = useWatch({ control, name: 'items' });

  //--- LinkModal 핸들러
  const handleLinkModalOpen = (index: number) => {
    setCurrentLink(getValues().items[index]?.link);
  };

  const handleLinkModalCancel = (index: number) => {
    setValue(`items.${index}.link`, currentLink);
  };

  const handleLinkModalConfirm = (index: number) => {
    if (watchItems[index]?.link) {
      setValue(`items.${index}.link`, ensureHttp(watchItems[index]?.link));
      setDomain(urlToDomain(getValues().items?.[index].link));
    }
  };

  //--- 드래그 되었을 때 실행되는 이벤트
  const onDragEnd = ({ source, destination }: DropResult) => {
    if (destination && source.index !== destination.index) {
      const currentArray = [...getValues().items];
      const sourceItem = currentArray[source.index];
      currentArray.splice(source.index, 1);
      currentArray.splice(destination.index, 0, sourceItem);
      setValue('items', currentArray);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StrictModeDroppable droppableId="items">
        {(provided) => (
          <div className={styles.itemsContainer} ref={provided.innerRef} {...provided.droppableProps}>
            {items.map((item, index) => {
              const errorMessage = (field: 'title' | 'comment' | 'link' | 'image') =>
                (errors as FormErrors)?.items?.[index]?.[field]?.message;
              const titleError = errorMessage('title');
              const commentError = errorMessage('comment');
              const linkError = errorMessage('link');
              const imageError = errorMessage('image');

              return (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      className={snapshot.isDragging ? styles.draggingItem : styles.item}
                      key={item.id}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ItemLayout
                        index={index}
                        handleDeleteItem={() => remove(index)}
                        itemLength={watchItems.length}
                        titleInput={
                          <input
                            className={titleError ? styles.errorTitle : styles.title}
                            placeholder={itemPlaceholder.title}
                            autoComplete="off"
                            maxLength={100}
                            {...register(`items.${index}.title`, itemTitleRules)}
                          />
                        }
                        commentTextArea={
                          <textarea
                            className={styles.comment}
                            placeholder={itemPlaceholder.comment}
                            maxLength={100}
                            {...register(`items.${index}.comment`, itemCommentRules)}
                          />
                        }
                        commentLength={
                          <p className={commentError ? styles.error : styles.countLength}>
                            ({watchItems[index]?.comment?.length ?? 0}/100)
                          </p>
                        }
                        linkModal={
                          <LinkModal
                            onCancelButtonClick={() => {
                              handleLinkModalCancel(index);
                            }}
                            onTriggerButtonClick={() => {
                              handleLinkModalOpen(index);
                            }}
                            onConfirmButtonClick={() => {
                              handleLinkModalConfirm(index);
                            }}
                            isLinkValid={!linkError && watchItems[index]?.link?.length !== 0}
                          >
                            <div className={styles.linkModalChildren}>
                              <input
                                className={styles.linkInput}
                                placeholder={itemPlaceholder.link}
                                autoComplete="off"
                                {...register(`items.${index}.link`, itemLinkRules)}
                              />
                              {watchItems[index]?.link?.length !== 0 && linkError && (
                                <p className={styles.error}>{linkError}</p>
                              )}
                            </div>
                          </LinkModal>
                        }
                        imageInput={
                          <input
                            className={styles.imageInput}
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            id={`${index}-image`}
                            {...register(`items.${index}.image`)}
                          />
                        }
                        linkPreview={
                          watchItems[index]?.link && (
                            <Preview
                              type="link"
                              url={watchItems[index].link}
                              domain={domain ?? urlToDomain(watchItems[index].link)}
                              handleClearButtonClick={() => {
                                setValue(`items.${index}.link`, '');
                              }}
                            />
                          )
                        }
                        imagePreview={
                          watchItems[index]?.image && (
                            <Preview
                              type="image"
                              imageFile={watchItems[index]?.image?.[0]}
                              handleClearButtonClick={() => {
                                setValue(`items.${index}.image`, '');
                              }}
                            />
                          )
                        }
                      />
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
            {watchItems.length < 10 && (
              <AddItemButton
                handleAddButtonClick={() =>
                  append({
                    rank: 0,
                    title: '',
                    comment: '',
                    link: '',
                    image: null,
                  })
                }
              />
            )}
          </div>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  );
}
