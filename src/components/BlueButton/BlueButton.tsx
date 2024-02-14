import { ReactNode } from 'react';

import * as styles from './BlueButton.css';

interface BlueButtonProps {
  type?: 'submit' | 'button';
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
}

const BlueButton = ({ type = 'button', onClick, disabled, children }: BlueButtonProps) => {
  return (
    <button className={styles.button} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default BlueButton;
