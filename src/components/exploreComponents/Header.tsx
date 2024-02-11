'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import * as styles from './Header.css';
import Logo from '/public/icons/logo.svg';
import BellIcon from '/public/icons/bell.svg';

function Header() {
  const router = useRouter();

  const handleBellIconClick = () => {
    router.push('/notification');
  };

  return (
    <nav className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <Logo alt="로고 이미지" />
      </div>
      <div className={styles.userInfoOuterWrapper}>
        <div className={styles.userInfoWrapper}>
          <Image
            src="https://p.turbosquid.com/ts-thumb/dF/nW94b5/5gsXLi9h/17/jpg/1542722468/600x600/fit_q87/b36d8ed4b788d00f54eeb1be4094ddab0deb0474/17.jpg"
            alt="사용자 프로필 이미지"
            width={32}
            height={32}
            className={styles.userProfile}
          />
          <h5 className={styles.userName}>{`진저브레드`}</h5>
        </div>
        <button onClick={handleBellIconClick}>
          <BellIcon alt="알림 페이지 이동 버튼" />
        </button>
      </div>
    </nav>
  );
}

export default Header;
