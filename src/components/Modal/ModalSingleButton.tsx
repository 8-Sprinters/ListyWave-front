import { MouseEventHandler, ReactNode } from 'react';
import * as styles from './ModalButton.css';

interface ModalSingleButtonProps {
  children: ReactNode;
  isDisabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function ModalSingleButton({ children, isDisabled = false, onClick }: ModalSingleButtonProps) {
  return (
    <div className={styles.buttonContainer}>
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
