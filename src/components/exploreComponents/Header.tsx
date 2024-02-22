'use client';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';

import { useUser } from '@/store/useUser';
import useMoveToPage from '@/hooks/useMoveToPage';
import getUserOne from '@/app/_api/user/getUserOne';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { UserType } from '@/lib/types/userProfileType';

import * as styles from './Header.css';
import Logo from '/public/icons/logo.svg';
import BellIcon from '/public/icons/bell.svg';
import NoneProfileImage from '/public/icons/avatar.svg';

function Header() {
  const { onClickMoveToPage } = useMoveToPage();

  //zustand로 관리하는 user정보 불러오기
  const { user } = useUser();
  const userId = user.id;

  const { data: userMe } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne, userId],
    queryFn: () => getUserOne(userId as number),
    enabled: !!userId,
  });

  return (
    <nav className={styles.wrapper}>
      <button className={styles.logoWrapper} onClick={onClickMoveToPage('/intro')}>
        <Logo alt="로고 이미지" />
      </button>
      <div className={styles.userInfoOuterWrapper}>
        <div
          className={styles.userInfoWrapper}
          onClick={userId ? onClickMoveToPage('/account') : onClickMoveToPage('/login')}
        >
          {userMe?.profileImageUrl ? (
            <Image
              src={userMe.profileImageUrl}
              alt="사용자 프로필 이미지"
              width={32}
              height={32}
              className={styles.userProfile}
            />
          ) : (
            <NoneProfileImage width={32} height={32} alt="존재하지 않는 사용자 프로필 이미지" />
          )}
          {userId !== null ? (
            <h5 className={styles.userName}>{userMe?.nickname}</h5>
          ) : (
            <h5 className={styles.loginButton}>로그인/회원가입</h5>
          )}
        </div>
        <button onClick={onClickMoveToPage('/notification')}>
          {userId !== null && <BellIcon alt="알림 페이지 이동 버튼" />}
        </button>
      </div>
    </nav>
  );
}

export default Header;
