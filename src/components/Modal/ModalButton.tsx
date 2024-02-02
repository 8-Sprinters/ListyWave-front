import { MouseEventHandler, ReactNode } from 'react';
import * as styles from './ModalButton.css';

interface ModalButtonProps {
  children: ReactNode;
  onCancel: MouseEventHandler<HTMLButtonElement>;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
}

export default function ModalButton({ children, onCancel, onClick, isDisabled = false }: ModalButtonProps) {
  return (
    <div className={styles.buttonContainer}>
      <button type="button" className={styles.secondaryButton} onClick={onCancel}>
        취소
      </button>
      <button type="button" className={isDisabled ? styles.disabledButton : styles.primaryButton} onClick={onClick} disabled={isDisabled}>
        {children}
      </button>
    </div>
  );
}
