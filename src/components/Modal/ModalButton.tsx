import { ReactNode } from 'react';
import * as styles from './ModalButton.css';

interface ModalButtonProps {
  children: ReactNode;
  onCancel: () => void;
  onClick: () => void;
}

export default function ModalButton({ children, onCancel, onClick }: ModalButtonProps) {
  return (
    <div className={styles.buttonContainer}>
      <button type="button" className={styles.secondaryButton} onClick={onCancel}>
        취소
      </button>
      <button type="button" className={styles.primaryButton} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
