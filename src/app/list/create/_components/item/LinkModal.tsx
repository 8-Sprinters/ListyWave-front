import { ReactNode } from 'react';
import LinkIcon from '/public/icons/link.svg';
import Modal from '@/components/Modal/Modal';
import useBooleanOutput from '@/hooks/useBooleanOutput';
import { vars } from '@/styles/theme.css';
import * as styles from './LinkModal.css';

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
          <Modal.Title>링크 추가</Modal.Title>
          {children}
          <Modal.Button isDisabled={!isLinkValid} onCancel={handleCancelButtonClick} onClick={handleConfirmButtonClick}>
            확인
          </Modal.Button>
        </Modal>
      )}
    </>
  );
}
