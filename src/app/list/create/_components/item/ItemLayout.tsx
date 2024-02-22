import { ReactNode } from 'react';

import DndIcon from '/public/icons/dnd.svg';
import ClearGrayIcon from '/public/icons/clear_x_gray.svg';
import Label from '@/components/Label/Label';
import ImageUploader from './ImageUploader';
import * as styles from './ItemLayout.css';

const MIN_ITEM_COUNT = 3;

interface ItemLayoutProps {
  index: number;
  handleDeleteItem: () => void;
  itemLength: number;
  titleInput: ReactNode;
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
  commentTextArea,
  commentLength,
  linkModal,
  linkPreview,
  imageInput,
  imagePreview,
  handleImageAdd,
}: ItemLayoutProps) {
  return (
    <>
      <div className={styles.itemHeader}>
        <DndIcon width="18" height="18" alt="드래그앤드롭" className={styles.headerIcon} />
        <div className={styles.rankAndTitle}>
          <Label colorType={index === 0 ? 'blue' : 'skyblue'}>{`${index + 1}위`}</Label>
          {titleInput}
        </div>
        {itemLength > MIN_ITEM_COUNT && (
          <button onClick={handleDeleteItem}>
            <ClearGrayIcon alt="아이템 삭제" className={styles.headerIcon} />
          </button>
        )}
      </div>

      <hr className={styles.line} role="separator" />

      <div className={styles.moreInfo}>
        {commentTextArea}
        <div className={styles.toolbar}>
          <div className={styles.fileButtons}>
            {linkModal}
            <ImageUploader index={index} handleImageAdd={handleImageAdd}>
              {imageInput}
            </ImageUploader>
          </div>
          {commentLength}
        </div>

        <div className={styles.previewContainer}>
          {linkPreview}
          {imagePreview}
        </div>
      </div>
    </>
  );
}
