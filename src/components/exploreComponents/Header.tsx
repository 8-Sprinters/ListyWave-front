'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

import { useUser } from '@/store/useUser';
import getUserOne from '@/app/_api/user/getUserOne';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import getNotificationAllChecked from '@/app/_api/explore/getNotificationAllChecked';
import { UserType } from '@/lib/types/userProfileType';

import * as styles from './Header.css';
import Logo from '/public/icons/logo.svg';
import BellIcon from '/public/icons/bell.svg';
import fallbackProfile from '/public/images/fallback_profileImage.webp';
import NotificationOn from '/public/icons/notification_on.svg';
import Modal from '@/components/Modal/Modal';
import LoginModal from '@/components/login/LoginModal';
import useBooleanOutput from '@/hooks/useBooleanOutput';

function Header() {
  //zustand로 관리하는 user정보 불러오기
  const { user } = useUser();
  const userId = user.id;
  const { isOn, handleSetOff, handleSetOn } = useBooleanOutput();

  const { data: userMe } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne, userId],
    queryFn: () => getUserOne(userId as number),
    enabled: user && !!userId,
    retry: 1,
  });

  const { data: result } = useQuery({
    queryKey: [QUERY_KEYS.getNotificationAllChecked],
    queryFn: () => getNotificationAllChecked(),
    enabled: !!userId,
  });

  const isNotificationAllChecked = result?.isAllChecked;

  if (!user) {
    return null;
  }

  return (
    <nav className={styles.wrapper}>
      {isOn && (
        <Modal handleModalClose={handleSetOff} size="large">
          <LoginModal />
        </Modal>
      )}
      <div className={styles.userInfoOuterWrapper}>
        <Link href={'/intro'} className={styles.logoWrapper}>
          <Logo alt="로고 이미지" />
        </Link>
        <div className={styles.userInfoWrapper}>
          {userId ? (
            <>
              <Link href={`/account`}>
                {userMe?.profileImageUrl ? (
                  <Image
                    src={userMe.profileImageUrl}
                    alt="사용자 프로필 이미지"
                    width={26}
                    height={26}
                    className={styles.userProfile}
                  />
                ) : (
                  <Image
                    src={fallbackProfile}
                    alt="사용자 프로필 이미지"
                    width={26}
                    height={26}
                    className={styles.userProfile}
                  />
                )}
              </Link>
              <Link href={'/notification'}>
                {isNotificationAllChecked ? <BellIcon alt="알림 페이지 이동 버튼" /> : <NotificationOn />}
              </Link>
            </>
          ) : (
            <h5 className={styles.loginButton} onClick={handleSetOn}>
              로그인/회원가입
            </h5>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
