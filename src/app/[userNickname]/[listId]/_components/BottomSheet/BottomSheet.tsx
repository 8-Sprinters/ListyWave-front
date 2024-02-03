'use client';

import * as styles from './BottomSheet.css';
import { MouseEventHandler } from 'react';
import CheckIcon from '/public/icons/check_red.svg';
import useOnClickOutside from '@/hooks/useOnClickOutside'; //바깥 영역 클릭시 바텀시트 닫히는 함수

interface BottomSheetOptionsProps {
  key: string;
  title: string;
  onClick: () => void;
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
          <div key={option.key} className={styles.sheetItemWrapper}>
            <div key={option.key} className={styles.sheetItem} onClick={option.onClick}>
              {option.title}
            </div>
            <CheckIcon className={styles.checkIcon} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BottomSheet;
