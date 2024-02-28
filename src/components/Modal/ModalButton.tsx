import { MouseEventHandler, ReactNode } from 'react';
import * as styles from './ModalButton.css';
import { commonLocale } from '@/components/locale';
import { useLanguage } from '@/store/useLanguage';

interface ModalButtonProps {
  children: ReactNode;
  isDisabled?: boolean;
  onCancel: MouseEventHandler<HTMLButtonElement>;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function ModalButton({ children, isDisabled = false, onCancel, onClick }: ModalButtonProps) {
  const { language } = useLanguage();
  return (
    <div className={styles.buttonContainer}>
      <button type="button" className={styles.button.secondary} onClick={onCancel}>
        {commonLocale[language].cancel}
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
