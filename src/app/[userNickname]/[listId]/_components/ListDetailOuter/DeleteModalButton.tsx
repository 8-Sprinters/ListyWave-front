import { ReactNode } from 'react';
import * as styles from './DeleteModalButton.css';
import Modal from '@/components/Modal/Modal';
import useBooleanOutput from '@/hooks/useBooleanOutput';
import DeleteButton from '/public/icons/trash_can.svg';

interface DeleteModalProps {
  children?: ReactNode; //옵셔널하게?
}

export default function DeleteModal({ children }: DeleteModalProps) {
  const { isOn, handleSetOff, handleSetOn } = useBooleanOutput(); //모달 열림,닫힘 상태 관리
  const handleConfirmButtonClick = () => {
    //확인버튼 클릭시 실행될 로직()
    handleSetOff(); //닫기
  };

  return (
    <>
      {/*👆 누르면 모달이 열리는 트리거 버튼*/}
      <button onClick={handleSetOn} className={styles.resetButtonStyle}>
        <DeleteButton alt="삭제 버튼" />
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
