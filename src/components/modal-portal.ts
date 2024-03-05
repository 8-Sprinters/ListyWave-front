import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode;
}

const ModalPortal = ({ children }: Props) => {
  if (typeof window === 'undefined') {
    return null;
  }

  const el = document.getElementById('modal-root') as HTMLElement;

  return createPortal(children, el);
};

export default ModalPortal;
