import { ReactNode } from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

import DndIcon from '/public/icons/dnd.svg';
import DeleteIcon from '/public/icons/trash_bin.svg';
import Label from '@/components/Label/Label';
import { vars } from '@/styles/theme.css';
import ImageUploader from './ImageUploader';
import * as styles from './ItemLayout.css';

const MIN_ITEM_COUNT = 3;

interface ItemLayoutProps {
  index: number;
  handleDeleteItem: () => void;
  itemLength: number;
  titleInput: ReactNode;
  titleErrorMessage?: string;
  commentTextArea: ReactNode;
  commentLength: ReactNode;
  linkModal: ReactNode;
  linkPreview: ReactNode;
  imageInput: ReactNode;
  imagePreview: ReactNode;
  handleImageAdd?: () => void;
}

export default function ItemLayout({
  index,
  handleDeleteItem,
  itemLength,
  titleInput,
  titleErrorMessage,
  commentTextArea,
  commentLength,
  linkModal,
  linkPreview,
  imageInput,
  imagePreview,
  handleImageAdd,
}: ItemLayoutProps) {
  return (
    <div>
      {titleErrorMessage && <p className={styles.titleError}> {titleErrorMessage}</p>}
      <Accordion>
        <AccordionSummary>
          <div className={styles.itemHeader}>
            <DndIcon width="18" height="18" alt="드래그앤드롭" className={styles.headerIcon} />
            <div className={styles.rankAndTitle}>
              <Label colorType={index === 0 ? 'blue' : 'skyblue'}>{`${index + 1}위`}</Label>
              {titleInput}
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails className={styles.details}>
          <div className={styles.moreInfo}>
            {commentTextArea}
            <div className={styles.countLength}>{commentLength}</div>
            <div className={styles.toolbar}>
              <div className={styles.fileButtons}>
                {linkModal}
                <ImageUploader index={index} handleImageAdd={handleImageAdd}>
                  {imageInput}
                </ImageUploader>
              </div>
              {itemLength > MIN_ITEM_COUNT && (
                <button onClick={handleDeleteItem}>
                  <DeleteIcon fill={vars.color.gray9} alt="아이템 삭제" />
                </button>
              )}
            </div>

            <div className={styles.previewContainer}>
              {linkPreview}
              {imagePreview}
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
