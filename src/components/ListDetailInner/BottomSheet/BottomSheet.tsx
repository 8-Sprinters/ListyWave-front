'use client';

import * as styles from './BottomSheet.css';
import { MouseEventHandler } from 'react';

interface BottomSheetOptionsProps {
  key: string;
  title: string;
  onClick: () => void;
}

interface BottomSheetProps {
  onClose: MouseEventHandler<HTMLDivElement>;
  isActive: Boolean;
  optionList: BottomSheetOptionsProps[];
}

function BottomSheet({ onClose, isActive, optionList }: BottomSheetProps) {
  return (
    <div className={styles.backGround} onClick={onClose}>
      <div className={`${styles.Wrapper} ${isActive ? `${styles.sheetActive}` : ''}`}>
        {optionList.map((option) => (
          <div key={option.key} className={styles.sheetItem} onClick={option.onClick}>
            {option.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BottomSheet;
