import { ReactNode } from 'react';

import DndIcon from '/public/icons/dnd.svg';
import ClearGrayIcon from '/public/icons/clear_x_gray.svg';
import ClearBlackIcon from '/public/icons/clear_x_black.svg';
import ImageIcon from '/public/icons/attach_image.svg';
import Label from '@/components/Label/Label';
import * as styles from './ItemLayout.css';

interface ItemLayoutProps {
  index: number;
  handleDeleteItem: () => void;
  itemLength: number;
  titleInput: ReactNode;
  commentTextArea: ReactNode;
  commentLength: ReactNode;
  linkModal: ReactNode;
  linkPreview: ReactNode;
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
}: ItemLayoutProps) {
  return (
    <>
      <div className={styles.itemHeader}>
        <DndIcon alt="드래그앤드롭" />
        <div className={styles.rankAndTitle}>
          <Label colorType={index === 0 ? 'blue' : 'skyblue'}>{`${index + 1}위`}</Label>
          {titleInput}
        </div>
        {itemLength > 3 && (
          <button onClick={handleDeleteItem}>
            <ClearGrayIcon alt="아이템 삭제" />
          </button>
        )}
      </div>

      <hr className={styles.line} role="separator" />

      <div className={styles.moreInfo}>
        {commentTextArea}
        <div className={styles.toolbar}>
          <div className={styles.fileButtons}>
            {linkModal}
            <button type="button">
              <ImageIcon alt="사진 첨부 버튼" />
            </button>
          </div>
          {commentLength}
        </div>

        <div className={styles.previewContainer}>
          {linkPreview}
          <div className={styles.previewBox} role="img">
            사진칸
            <button
              className={styles.clearButton}
              onClick={() => {
                console.log('사진없애기');
              }}
            >
              <ClearBlackIcon alt="사진 삭제 버튼" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
