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
    <div className={styles.navDiv}>
      <div className={styles.buttonDiv} onClick={onClickMoveToPage('/')}>
        <ExploreIcon fill={selectedItem === 'explore' ? vars.color.blue : vars.color.gray7} />
      </div>
      <div className={styles.buttonDiv} onClick={onClickMoveToPage(`/user/${userId}/mylist`)}>
        <MyFeedIcon fill={selectedItem === 'my-feed' ? vars.color.blue : vars.color.gray7} />
      </div>
      <div className={styles.buttonDiv} onClick={onClickMoveToPage('/collection')}>
        <CollectionIcon fill={selectedItem === 'collection' ? vars.color.blue : vars.color.gray7} />
      </div>
    </div>
  );
}
