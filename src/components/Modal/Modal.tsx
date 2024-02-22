import { ReactNode } from 'react';
import ModalPortal from '@/components/modal-portal';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import ModalTitle from './ModalTitle';
import ModalButton from './ModalButton';
import ModalSingleButton from './ModalSingleButton';
import * as styles from './Modal.css';

interface ModalMainProps {
  size?: 'basic' | 'large';
  children?: ReactNode;
  handleModalClose: () => void;
}

function ModalMain({ size = 'basic', children, handleModalClose }: ModalMainProps) {
  const { ref } = useOnClickOutside(() => {
    handleModalClose();
  });

  return (
    <ModalPortal>
      <div className={styles.background}>
        <div ref={ref} className={styles.sizeVariants[size]}>
          {children}
        </div>
      </div>
    </ModalPortal>
  );
}

const Modal = Object.assign(ModalMain, {
  Title: ModalTitle,
  Button: ModalButton,
  SingleButton: ModalSingleButton,
});

export default Modal;
