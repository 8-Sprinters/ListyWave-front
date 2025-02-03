'use client';

import * as styles from './confirmBottomSheet.css';
import useOnClickOutside from '@/hooks/useOnClickOutside'; //바깥 영역 클릭시 바텀시트 닫히는 함수

interface ConfirmBottomSheetProps {
  // onClose: MouseEventHandler<HTMLDivElement>;
  onClose: () => void;
  isActive?: boolean; //Boolean -> boolean 수정 , 옵셔널 하게 수정
  message: string;
  handleConfirmClick: () => void;
  confirmTitle: string;
}

function ConfirmBottomSheet({ onClose, isActive, message, handleConfirmClick, confirmTitle }: ConfirmBottomSheetProps) {
  const { ref } = useOnClickOutside(() => {
    onClose();
  });

  return (
    <div className={styles.backGround} onClick={onClose} ref={ref}>
      <div className={`${styles.wrapper} ${isActive ? `${styles.sheetActive}` : ''}`}>
        <p className={styles.message}>
          {message.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <div className={styles.buttonWrapper}>
          <button className={styles.cancelButton} onClick={onClose}>
            취소
          </button>
          <button className={styles.confirmButton} onClick={handleConfirmClick}>
            {confirmTitle}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmBottomSheet;
