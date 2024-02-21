'use client';
import { usePathname } from 'next/navigation';

import ExploreIcon from '/public/icons/explore.svg';
import MyFeedIcon from '/public/icons/my_feed.svg';
import CollectionIcon from '/public/icons/collection.svg';

import useMoveToPage from '@/hooks/useMoveToPage';
import { useUser } from '@/store/useUser';
import { vars } from '@/styles/theme.css';
import * as styles from './BottomNav.css';

export default function BottomNav() {
  const { user } = useUser();
  const userId = user.id;
  const pathname = usePathname() as string;
  const { onClickMoveToPage } = useMoveToPage();

  // 숨기고 싶은 경로 패턴 배열
  const hiddenPaths = ['/list', '/intro', '/start-listy', '/account', '/followings', '/followers', '/notification'];
  const isHidden = hiddenPaths.some((path) => pathname.includes(path));

  if (isHidden) return;

  //파란색 선택 표시를 위한 분기처리
  const selectedItem = (() => {
    if (pathname === '/' || pathname.includes('/search')) {
      return 'explore';
    } else if (pathname === `/user/${userId}/mylist` || pathname === `/user/${userId}/collabolist`) {
      return 'my-feed';
    } else if (pathname === '/collection') {
      return 'collection';
    } else {
      return null;
    }
  })();

  return (
    <nav>
      <ul className={styles.navDiv}>
        <li className={styles.buttonDiv} onClick={onClickMoveToPage('/')}>
          <ExploreIcon fill={selectedItem === 'explore' ? vars.color.blue : vars.color.gray7} />
        </li>
        <li className={styles.buttonDiv} onClick={onClickMoveToPage(`/user/${userId}/mylist`)}>
          <MyFeedIcon fill={selectedItem === 'my-feed' ? vars.color.blue : vars.color.gray7} />
        </li>
        <li className={styles.buttonDiv} onClick={onClickMoveToPage('/collection')}>
          <CollectionIcon fill={selectedItem === 'collection' ? vars.color.blue : vars.color.gray7} />
        </li>
      </ul>
    </nav>
  );
}
