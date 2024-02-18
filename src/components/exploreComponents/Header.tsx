'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { useUser } from '@/store/useUser';
import useMoveToPage from '@/hooks/useMoveToPage';
import getUserOne from '@/app/_api/user/getUserOne';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

import * as styles from './Header.css';
import Logo from '/public/icons/logo.svg';
import BellIcon from '/public/icons/bell.svg';
import NoneProfileImage from '/public/icons/avatar.svg';
import { UserType } from '@/lib/types/userProfileType';
import Link from 'next/link';

function Header() {
  const router = useRouter();
  const [imageSrc, setImageSrc] = useState(false);
  const { onClickMoveToPage } = useMoveToPage();

  //zustand로 관리하는 user정보 불러오기
  const { user } = useUser();
  const userId = user.id ? user.id : 0;

  const { data: userMe } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne, userId],
    queryFn: () => getUserOne(userId),
    enabled: !!userId,
  });

  const handleImageError = () => {
    setImageSrc(false);
  };

  return (
    <nav className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <Logo alt="로고 이미지" />
      </div>
      {userId ? (
        <div className={styles.userInfoOuterWrapper}>
          <Link href={'/account'}>
            <div className={styles.userInfoWrapper} onClick={() => onClickMoveToPage('/account')}>
              <Image
                src={userMe?.profileImageUrl}
                alt="사용자 프로필 이미지"
                width={32}
                height={32}
                className={styles.userProfile}
                // onError={handleImageError}
              />
              <h5 className={styles.userName}>{userMe?.nickname}</h5>
            </div>
          </Link>
          <button onClick={() => onClickMoveToPage('/notification')}>
            <BellIcon alt="알림 페이지 이동 버튼" />
          </button>
        </div>
      ) : (
        <div className={styles.userInfoWrapper}>
          <NoneProfileImage width={32} height={32} />
          <h5 className={styles.loginButton} onClick={() => onClickMoveToPage('/login')}>
            로그인/회원가입
          </h5>
        </div>
      )}
    </nav>
  );
}

export default Header;
