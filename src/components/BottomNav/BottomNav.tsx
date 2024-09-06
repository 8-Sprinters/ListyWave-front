'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

import HomeIcon from '/public/icons/new/bottom_nav_home.svg';
import AddIcon from '/public/icons/new/bottom_nav_add.svg';
import MyFeedIcon from '/public/icons/new/bottom_nav_feed.svg';

import useBooleanOutput from '@/hooks/useBooleanOutput';
import { useUser } from '@/store/useUser';

import { vars } from '@/styles/__theme.css';
import * as styles from './BottomNav.css';

import Modal from '@/components/Modal/Modal';
import LoginModal from '@/components/login/LoginModal';

type BottomNavTapPathType = 'home' | 'feed' | 'list';

const home = 'home';
const feed = 'my-feed';
const list = 'create-list';

const bottomNavTapPath: Record<BottomNavTapPathType, string> = {
  home,
  feed,
  list,
};

// TODO 하드코딩된 path를 줄이는 방법이 없을까?

export default function BottomNav() {
  const { user } = useUser();
  const router = useRouter();
  const pathname = usePathname();
  const { isOn, handleSetOff, handleSetOn } = useBooleanOutput();

  const userId = user.id;

  const visiblePaths = ['/', '/mylist', 'collection'];
  const isVisible = visiblePaths.some((path) => pathname?.endsWith(path));

  if (!isVisible) {
    return <></>;
  }

  // 네브바 탭 현재위치를 표시하기 위한 분기처리
  const selectedItem = (() => {
    switch (pathname) {
      case '/':
        return bottomNavTapPath.home;
      case `/user/${userId}/mylist`:
        return bottomNavTapPath.feed;
      default:
        return null;
    }
  })();

  // 로그인한 사용자 검증 후, 마이피드로 이동
  const handleMoveToPageOnLogin = (path: string) => () => {
    if (!userId) {
      handleSetOn();
      return;
    }
    path === bottomNavTapPath.feed ? router.push(`/user/${userId}/mylist`) : router.push('/list/create');
  };

  return (
    <>
      <nav>
        <div className={styles.navDiv}>
          <Link href="/" className={styles.buttonDiv}>
            <HomeIcon fill={selectedItem === bottomNavTapPath.home ? vars.color.blue : vars.color.gray7} />
          </Link>
          <button className={styles.buttonDiv} onClick={handleMoveToPageOnLogin(bottomNavTapPath.list)}>
            <AddIcon fill={selectedItem === bottomNavTapPath.list ? vars.color.blue : vars.color.gray7} />
          </button>
          <button className={styles.buttonDiv} onClick={handleMoveToPageOnLogin(bottomNavTapPath.feed)}>
            <MyFeedIcon fill={selectedItem === bottomNavTapPath.feed ? vars.color.blue : vars.color.gray7} />
          </button>
        </div>
      </nav>

      {isOn && (
        <Modal handleModalClose={handleSetOff} size="large">
          <LoginModal id="bottomNavLoginBtn" />
        </Modal>
      )}
    </>
  );
}
