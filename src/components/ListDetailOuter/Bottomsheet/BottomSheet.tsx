'use client';

import { MouseEventHandler } from 'react';
import * as styles from './BottomSheet.css';

interface BottomSheetProps {
  onClose: MouseEventHandler<HTMLDivElement>;
  isActive: boolean;
}

function BottomSheet({ onClose, isActive }: BottomSheetProps) {
  return (
    <div className={styles.backGround} onClick={onClose}>
      <div className={`${styles.Wrapper} ${isActive ? `${styles.sheetActive}` : ''}`}>
        <div className={styles.sheetItem}>리스트 수정하기</div>
        <div className={styles.sheetItem}>리스트 삭제하기</div>
      </div>
    </div>
  );
}

export default BottomSheet;
