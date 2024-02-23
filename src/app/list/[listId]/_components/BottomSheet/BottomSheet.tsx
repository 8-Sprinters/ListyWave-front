'use client';

import * as styles from './BottomSheet.css';
import { MouseEventHandler } from 'react';
import CheckIcon from '/public/icons/check_red.svg';
import useOnClickOutside from '@/hooks/useOnClickOutside'; //바깥 영역 클릭시 바텀시트 닫히는 함수

interface BottomSheetOptionsProps {
  key: string;
  title: string;
  onClick: () => void;
  disabled?: boolean;
}

interface BottomSheetProps {
  onClose: MouseEventHandler<HTMLDivElement>;
  isActive?: boolean; //Boolean -> boolean 수정 , 옵셔널 하게 수정
  optionList: BottomSheetOptionsProps[];
}

function BottomSheet({ onClose, isActive, optionList }: BottomSheetProps) {
  const { ref } = useOnClickOutside(() => {
    onClose;
  });

  return (
    <div className={styles.backGround} onClick={onClose}>
      <div ref={ref} className={`${styles.wrapper} ${isActive ? `${styles.sheetActive}` : ''}`}>
        {optionList.map((option) => (
          <button
            key={option.key}
            className={`${styles.sheetItemWrapper} ${option.disabled ? styles.disabledSheetItemWrapper : ''}`}
            disabled={option.disabled}
          >
            <div
              key={option.key}
              className={`${styles.sheetItem} ${option.disabled ? styles.disabledSheetItem : ''}`}
              onClick={option.onClick}
            >
              {option.title}
            </div>
            <CheckIcon className={`${styles.checkIcon} ${option.disabled ? styles.disabledCheckIcon : ''}`} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default BottomSheet;
