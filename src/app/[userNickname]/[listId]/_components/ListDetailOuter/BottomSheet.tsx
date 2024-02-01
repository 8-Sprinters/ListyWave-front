'use client';
import { MouseEventHandler } from 'react';

import * as styles from './BottomSheet.css';
import CheckIcon from '/public/icons/check_red.svg';

interface BottomSheetProps {
  onClose: MouseEventHandler<HTMLDivElement>;
  isActive: boolean;
}

function BottomSheet({ onClose, isActive }: BottomSheetProps) {
  return (
    <div className={styles.backGround} onClick={onClose}>
      <div className={`${styles.wrapper} ${isActive ? `${styles.sheetActive}` : ''}`}>
        <div className={`${styles.sheetItemWrapper}`}>
          <div className={styles.sheetItem}>리스트 수정하기</div>
          <CheckIcon className={styles.checkIcon} />
        </div>
        <div className={styles.sheetItemWrapper}>
          <div className={styles.sheetItem}>리스트 삭제하기</div>
          <CheckIcon className={styles.checkIcon} />
        </div>
      </div>
    </div>
  );
}

export default BottomSheet;
