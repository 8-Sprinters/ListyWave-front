import { ReactNode } from 'react';
import LinkIcon from '/public/icons/link.svg';
import Modal from '@/components/Modal/Modal';
import useBooleanOutput from '@/hooks/useBooleanOutput';
import { vars } from '@/styles/theme.css';
import * as styles from './LinkModal.css';
import { useLanguage } from '@/store/useLanguage';
import { itemLocale } from '@/app/list/create/locale';

interface LinkModalProps {
  children: ReactNode;
  isLinkValid: boolean;
  onTriggerButtonClick: () => void;
  onCancelButtonClick: () => void;
  onConfirmButtonClick: () => void;
}

export default function LinkModal({
  children,
  isLinkValid,
  onTriggerButtonClick,
  onCancelButtonClick,
  onConfirmButtonClick,
}: LinkModalProps) {
  const { language } = useLanguage();
  const { isOn, handleSetOff, handleSetOn } = useBooleanOutput();

  const handleOpenClick = () => {
    onTriggerButtonClick();
    handleSetOn();
  };

  const handleCancelButtonClick = () => {
    onCancelButtonClick();
    handleSetOff();
  };

  const handleConfirmButtonClick = () => {
    onConfirmButtonClick();
    handleSetOff();
  };

  return (
    <>
      <button className={styles.button} onClick={handleOpenClick}>
        <LinkIcon fill={vars.color.gray9} />
      </button>
      {isOn && (
        <Modal size="basic" handleModalClose={handleCancelButtonClick}>
          <Modal.Title>{itemLocale[language].addLink}</Modal.Title>
          {children}
          <Modal.Button isDisabled={!isLinkValid} onCancel={handleCancelButtonClick} onClick={handleConfirmButtonClick}>
            {itemLocale[language].confirm}
          </Modal.Button>
        </Modal>
      )}
    </>
  );
}
