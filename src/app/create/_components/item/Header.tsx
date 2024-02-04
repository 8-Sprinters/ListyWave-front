import BackIcon from '/public/icons/back.svg';
import * as styles from './Header.css';

interface HeaderProps {
  isNextActive: boolean;
  onClickNext: () => void;
}

function Header({ isNextActive, onClickNext }: HeaderProps) {
  return (
    <div className={styles.header}>
      <BackIcon alt="뒤로가기 버튼" />
      <h1 className={styles.headerTitle}>리스트 생성</h1>
      <button
        className={isNextActive ? styles.headerNextButtonActive : styles.headerNextButton}
        disabled={!isNextActive}
        onClick={onClickNext}
      >
        완료
      </button>
    </div>
  );
}
export default Header;
