import { ReactNode } from 'react';
import LinkIcon from '/public/icons/link.svg';
import Modal from '@/components/Modal/Modal';
import useBooleanOutput from '@/hooks/useBooleanOutput';

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
      <button onClick={handleOpenClick}>
        <LinkIcon fill="#61646B" />
      </button>
      {isOn && (
        <Modal handleModalClose={handleCancelButtonClick}>
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
