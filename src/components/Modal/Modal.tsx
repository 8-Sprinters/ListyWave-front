import { FormEvent, ReactNode } from 'react';
import ModalPortal from '@/components/ModalPortal';
import * as styles from './Modal.css';
import ModalTitle from './ModalTitle';
import ModalButton from './ModalButton';

interface ModalMainProps {
  children?: ReactNode;
}

function ModalMain({ children }: ModalMainProps) {
  return (
    <ModalPortal>
      <div className={styles.background}>
        <div className={styles.container}>{children}</div>
      </div>
    </ModalPortal>
  );
}

const Modal = Object.assign(ModalMain, {
  Title: ModalTitle,
  Button: ModalButton,
});

export default Modal;
