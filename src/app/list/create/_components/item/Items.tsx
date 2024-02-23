import { ChangeEvent, useState } from 'react';
import { UseFormRegisterReturn, useFieldArray, useFormContext, useWatch } from 'react-hook-form';
import { DragDropContext, Draggable, DropResult } from 'react-beautiful-dnd';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { ItemCreateType, ListDetailType } from '@/lib/types/listType';
import { itemPlaceholder } from '@/lib/constants/placeholder';
import toasting from '@/lib/utils/toasting';
import toastMessage from '@/lib/constants/toastMessage';
import { itemTitleRules, itemCommentRules, itemLinkRules } from '@/lib/constants/formInputValidationRules';
import { StrictModeDroppable } from '@/components/StrictModeDroppable';
import { FormErrors } from '@/app/list/create/page';
import { getListDetail } from '@/app/_api/list/getLists';

import ItemLayout from './ItemLayout';
import LinkModal from './LinkModal';
import LinkPreview from './LinkPreview';
import ImagePreview from './ImagePreview';
import AddItemButton from './AddItemButton';
import * as styles from './Items.css';

// http:// 없을경우 추가
const ensureHttp = (link: string) => {
  if (!link.startsWith('http://' || 'https://')) {
    return 'http://' + link;
  }
  return link;
};

interface ItemsProps {
  type: 'create' | 'edit';
  setItemChanged?: () => void;
}

export default function Items({ type, setItemChanged }: ItemsProps) {
  const [currentLink, setCurrentLink] = useState<string>('');
  const {
    register,
    control,
    getValues,
    setValue,
    setError,
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
    }
  };

  //--- 드래그 되었을 때 실행되는 이벤트
  const handleOnDragEnd = ({ source, destination }: DropResult) => {
    if (destination && source.index !== destination.index) {
      const currentArray = [...getValues().items];
      const sourceItem = currentArray[source.index];
      currentArray.splice(source.index, 1);
      currentArray.splice(destination.index, 0, sourceItem);
      setValue('items', currentArray);
    }
  };

  //-- 이미지 미리보기
  const MAX_IMAGE_INPUT_SIZE_MB = 50 * 1024 * 1024; //50MB

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>, register: UseFormRegisterReturn) => {
    if (e.target.files) {
      const targetFile = e.target.files[0];
      if (targetFile?.size > MAX_IMAGE_INPUT_SIZE_MB) {
        toasting({ type: 'error', txt: toastMessage.ko.imageSizeError });
      } else {
        register.onChange(e);
      }
    }
  };

  const handleDeleteItem = (itemId: number) => {
    remove(itemId);
  };

  const param = useParams<{ listId: string }>();
  const listId = param?.listId;

  const { data: listDetailData } = useQuery<ListDetailType>({
    queryKey: [QUERY_KEYS.getListDetail, listId],
    queryFn: () => getListDetail(listId),
    enabled: type === 'edit',
  });

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <StrictModeDroppable droppableId="items">
        {(provided) => (
          <div className={styles.itemsContainer} ref={provided.innerRef} {...provided.droppableProps}>
            {items.map((item, index) => {
              const error = (field: 'title' | 'comment' | 'link' | 'imageUrl') =>
                (errors as FormErrors)?.items?.[index]?.[field];

              const titleError = error('title');
              const commentError = error('comment');
              const linkError = error('link');

              const imageRegister = register(`items.${index}.imageUrl`);
              return (
                <div>
                  {titleError?.type !== 'required' && <p className={styles.error}>{titleError?.message}</p>}
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
                          handleDeleteItem={() => {
                            handleDeleteItem(index);
                          }}
                          itemLength={watchItems.length}
                          titleInput={
                            <input
                              className={titleError ? styles.errorTitle : styles.title}
                              placeholder={itemPlaceholder.title}
                              autoComplete="off"
                              maxLength={101}
                              {...register(`items.${index}.title`, itemTitleRules)}
                              readOnly={
                                type === 'edit' &&
                                listDetailData?.items.some((item) => item.id === getValues(`items.${index}.id`))
                              }
                            />
                          }
                          commentTextArea={
                            <textarea
                              className={styles.comment}
                              placeholder={itemPlaceholder.comment}
                              rows={3}
                              maxLength={101}
                              {...register(`items.${index}.comment`, itemCommentRules)}
                            />
                          }
                          commentLength={
                            <p className={commentError ? styles.errorCountLength : styles.countLength}>
                              {watchItems[index]?.comment?.length ?? 0}/100
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
                                  type="url"
                                  placeholder={itemPlaceholder.link}
                                  autoComplete="off"
                                  {...register(`items.${index}.link`, itemLinkRules)}
                                />
                                {watchItems[index]?.link?.length !== 0 && linkError && (
                                  <p className={styles.error}>{linkError.message}</p>
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
                              {...imageRegister}
                              onChange={(e) => {
                                handleImageChange(e, imageRegister);
                              }}
                            />
                          }
                          linkPreview={
                            watchItems[index]?.link && (
                              <LinkPreview
                                url={watchItems[index].link}
                                handleClearButtonClick={() => {
                                  setValue(`items.${index}.link`, '');
                                }}
                              />
                            )
                          }
                          imagePreview={
                            watchItems[index]?.imageUrl !== '' && (
                              <ImagePreview
                                image={watchItems[index]?.imageUrl}
                                handleClearButtonClick={() => {
                                  setValue(`items.${index}.imageUrl`, '');
                                }}
                              />
                            )
                          }
                          handleImageAdd={setItemChanged}
                        />
                      </div>
                    )}
                  </Draggable>
                </div>
              );
            })}
            {provided.placeholder}
            {watchItems.length < 10 && (
              <AddItemButton
                handleAddButtonClick={() =>
                  append({
                    id: 0,
                    rank: 0,
                    title: '',
                    comment: '',
                    link: '',
                    imageUrl: '',
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
