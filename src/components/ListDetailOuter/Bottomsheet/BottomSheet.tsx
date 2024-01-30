'use client';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as styles from './BottomSheet.css';

interface BottomSheetProps {
  onClose: (e: Event) => void;
  isSheetActive: Boolean;
}

function BottomSheet({ onClose, isActive }: BottomSheetProps) {
  const sheetActive = isActive ? 'S.sheetActive' : '';

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
