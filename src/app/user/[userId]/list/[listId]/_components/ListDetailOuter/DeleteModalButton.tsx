import { ReactNode } from 'react';
import Modal from '@/components/Modal/Modal';
import useBooleanOutput from '@/hooks/useBooleanOutput';
import * as styles from './ModalButtonStyle.css';
import DeleteButton from '/public/icons/trash_can.svg';

interface DeleteModalProps {
  children?: ReactNode;
  onDelete: () => void;
}

export default function DeleteModal({ children, onDelete }: DeleteModalProps) {
  const { isOn, handleSetOff, handleSetOn } = useBooleanOutput(); //모달 열림,닫힘 상태 관리
  const handleConfirmButtonClick = () => {
    onDelete();
    handleSetOff(); //닫기
  };

  return (
    <>
      {/*👆 누르면 모달이 열리는 트리거 버튼*/}
      <button onClick={handleSetOn} className={styles.resetButtonStyle}>
        <DeleteButton alt="삭제 버튼" fill="#AFB1B6" />
      </button>

      {/*✨ 조합한 모달 */}
      {isOn && (
        <Modal handleModalClose={handleSetOff}>
          <Modal.Title>정말로 삭제하시겠습니까?</Modal.Title>
          {children}
          <Modal.Button onCancel={handleSetOff} onClick={handleConfirmButtonClick}>
            확인
          </Modal.Button>
        </Modal>
      )}
    </>
  );
}
