import BackIcon from '/public/icons/back.svg';
import * as styles from './Header.css';

interface HeaderProps {
  onBackClick: () => void;
  isSubmitActive: boolean;
  onSubmitClick: () => void;
}

function Header({ onBackClick, isSubmitActive, onSubmitClick }: HeaderProps) {
  return (
    <div className={styles.header}>
      <button onClick={onBackClick}>
        <BackIcon alt="뒤로가기 버튼" />
      </button>
      <h1 className={styles.headerTitle}>리스트 생성</h1>
      <button
        className={isSubmitActive ? styles.headerNextButton.active : styles.headerNextButton.inactive}
        disabled={!isSubmitActive}
        onClick={onSubmitClick}
      >
        완료
      </button>
    </div>
  );
}
export default Header;
