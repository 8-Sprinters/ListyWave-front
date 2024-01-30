'use client';

import * as styles from './ListDetail.css';
import Comments from '@/components/ListDetailOuter/Comments/Comments';
import Header from '@/components/ListDetailOuter/Header/Header';
import ListInformation from '@/components/ListDetailOuter/ListInformation/ListInformation';

export default function ListDetail() {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <ListInformation />
        <Comments />
      </div>
    </>
  );
}
