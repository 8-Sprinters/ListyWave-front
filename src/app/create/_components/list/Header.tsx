import CloseButton from '/public/icons/close_button.svg';
import * as styles from './Header.css';

interface HeaderProps {
  isNextActive: boolean;
  onClickNext: () => void;
}

function Header({ isNextActive, onClickNext }: HeaderProps) {
  return (
    <div className={styles.header}>
      <CloseButton width={'24'} height={'24'} />
      <h1 className={styles.headerTitle}>리스트 생성</h1>
      <button className={isNextActive ? styles.headerNextButtonActive : styles.headerNextButton} onClick={onClickNext}>
        다음
      </button>
    </div>
  );
}

export default Header;
