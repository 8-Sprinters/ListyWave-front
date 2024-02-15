'use client';
import * as styles from './ListDetail.css';
import Comments from '@/app/[userNickname]/[listId]/_components/ListDetailOuter/Comments';
import Header from '@/app/[userNickname]/[listId]/_components/ListDetailOuter/Header';
import ListInformation from '@/app/[userNickname]/[listId]/_components/ListDetailOuter/ListInformation';

export default function ListDetail() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <ListInformation />
      <Comments />
    </div>
  );
}
