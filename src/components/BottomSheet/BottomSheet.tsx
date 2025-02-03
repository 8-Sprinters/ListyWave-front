'use client';

import * as styles from './BottomSheet.css';
import { MouseEventHandler, ReactNode } from 'react';
import CheckIcon from '/public/icons/check_red.svg';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { assignInlineVars } from '@vanilla-extract/dynamic'; //바깥 영역 클릭시 바텀시트 닫히는 함수

interface BottomSheetOptionsProps {
  key: string;
  title: string;
  onClick: () => void;
  disabled?: boolean;
  titleColor?: string;
}

interface BottomSheetProps {
  onClose: MouseEventHandler<HTMLDivElement>;
  isActive?: boolean; //Boolean -> boolean 수정 , 옵셔널 하게 수정
  optionList: BottomSheetOptionsProps[];
  children?: ReactNode;
}

function BottomSheet({ onClose, isActive, optionList, children }: BottomSheetProps) {
  const { ref } = useOnClickOutside(() => {
    onClose;
  });

  return (
    <div className={styles.backGround} onClick={onClose} ref={ref}>
      <div className={`${styles.wrapper} ${isActive ? `${styles.sheetActive}` : ''}`}>
        {optionList.map((option) => (
          <button
            key={option.key}
            className={`${styles.sheetItemWrapper} ${option.disabled ? styles.disabledSheetItemWrapper : ''}`}
            disabled={option.disabled}
          >
            <div
              key={option.key}
              className={`${styles.sheetItem} ${option.disabled ? styles.disabledSheetItem : ''} `}
              onClick={option.onClick}
              style={
                option.titleColor
                  ? assignInlineVars({
                      [styles.titleColor]: option.titleColor,
                    })
                  : {}
              }
            >
              {option.title}
            </div>
            <CheckIcon className={`${styles.checkIcon} ${option.disabled ? styles.disabledCheckIcon : ''}`} />
          </button>
        ))}
        {children}
      </div>
    </div>
  );
}

export default BottomSheet;
