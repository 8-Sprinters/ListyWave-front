import * as styles from './Header.css';
import { useRouter } from 'next/navigation';

type HeaderpropsType = {
  title: string;
  canGoBack?: boolean;
};

const Header = ({ title, canGoBack = false }: HeaderpropsType) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        {canGoBack && (
          <div className={styles.backButtonWrapper}>
            <div onClick={handleBackClick} className={styles.backButtonText}>
              뒤로가기
            </div>
          </div>
        )}
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  );
};

export default Header;
