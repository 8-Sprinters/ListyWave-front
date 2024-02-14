import { ReactNode } from 'react';

import * as styles from './BlueButton.css';

interface BlueButtonProps {
  type?: 'submit' | 'button';
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
}

/**
 * 헤더에 사용되는 파란색 버튼입니다.
 * @param {string} type 버튼 타입
 * @param {function} onClick 버튼 클릭 콜백함수
 * @param {boolean} disabled 비활성화 상태
 * @param {ReactNode} children버튼명
 */

const BlueButton = ({ type = 'button', onClick, disabled, children }: BlueButtonProps) => {
  return (
    <button className={styles.button} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default BlueButton;
