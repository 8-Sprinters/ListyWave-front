import * as styles from './ListDetail.css';
import Comments from '@/app/user/[userId]/list/[listId]/_components/ListDetailOuter/Comments';
import Header from '@/app/user/[userId]/list/[listId]/_components/ListDetailOuter/Header';
import ListInformation from '@/app/user/[userId]/list/[listId]/_components/ListDetailOuter/ListInformation';

export default function ListDetailPage() {
  return (
    <section className={styles.wrapper}>
      <Header />
      <ListInformation />
      <Comments />
    </section>
  );
}
