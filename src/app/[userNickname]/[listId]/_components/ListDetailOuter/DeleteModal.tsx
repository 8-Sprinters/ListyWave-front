import { ReactNode } from 'react';

import Modal from '@/components/Modal/Modal';

interface DeleteModalProps {
  children?: ReactNode; //옵셔널하게?
  onCancel: () => void;
  onClick: () => void;
}

export default function DeleteModal({ children, onCancel, onClick }: DeleteModalProps) {
  return (
    <Modal>
      <Modal.Title>{'정말로 삭제하시겠습니까?'}</Modal.Title>
      {children}
      <Modal.Button onCancel={onCancel} onClick={onClick}>
        확인
      </Modal.Button>
    </Modal>
  );
}
