import { MouseEventHandler, ReactNode } from 'react';
import * as styles from './ModalButton.css';

interface ModalButtonProps {
  children: ReactNode;
  isDisabled?: boolean;
  onCancel: MouseEventHandler<HTMLButtonElement>;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function ModalButton({ children, isDisabled = false, onCancel, onClick }: ModalButtonProps) {
  return (
    <div className={styles.buttonContainer}>
      <button type="button" className={styles.button.secondary} onClick={onCancel}>
        취소
      </button>
      <button
        type="button"
        disabled={isDisabled}
        className={isDisabled ? styles.button.disabled : styles.button.primary}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
