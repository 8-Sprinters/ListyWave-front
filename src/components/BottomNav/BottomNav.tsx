'use client';

import { usePathname, useRouter } from 'next/navigation';

import ExploreIcon from '/public/icons/explore.svg';
import MyFeedIcon from '/public/icons/my_feed.svg';

import useMoveToPage from '@/hooks/useMoveToPage';
import useBooleanOutput from '@/hooks/useBooleanOutput';

import { useUser } from '@/store/useUser';

import { vars } from '@/styles/__theme.css';
import * as styles from './BottomNav.css';

import Modal from '@/components/Modal/Modal';
import LoginModal from '@/components/login/LoginModal';

export default function BottomNav() {
  const { user } = useUser();
  const router = useRouter();
  const pathname = usePathname() as string;
  const { onClickMoveToPage } = useMoveToPage();
  const { isOn, handleSetOff, handleSetOn } = useBooleanOutput();

  const userId = user.id;

  const visiblePaths = ['/', '/mylist', 'collection'];
  const isVisible = visiblePaths.some((path) => pathname.endsWith(path));

  if (!isVisible) {
    return <></>;
  }

  // 네브바 탭 현재위치를 표시하기 위한 분기처리
  const selectedItem = (() => {
    switch (pathname) {
      case '/':
        return 'home';
      case `/user/${userId}/mylist`:
        return 'my-feed';
      default:
        return null;
    }
  })();

  // 로그인한 사용자 검증 후, 마이피드로 이동
  const handleMoveToPageOnLogin = () => {
    if (!userId) {
      handleSetOn();
      return;
    }
    router.push(`/user/${userId}/mylist`);
  };

  return (
    <>
      <nav>
        <ul className={styles.navDiv}>
          {/* TODO Link 태그로 대체하기 */}
          <li className={styles.buttonDiv} onClick={onClickMoveToPage('/')}>
            <ExploreIcon fill={selectedItem === 'home' ? vars.color.blue : vars.color.gray7} />
          </li>
          <li className={styles.buttonDiv} onClick={handleMoveToPageOnLogin}>
            <MyFeedIcon fill={selectedItem === 'my-feed' ? vars.color.blue : vars.color.gray7} />
          </li>
        </ul>
      </nav>
      {isOn && (
        <Modal handleModalClose={handleSetOff} size="large">
          <LoginModal id="bottomNavLoginBtn" />
        </Modal>
      )}
    </>
  );
}
