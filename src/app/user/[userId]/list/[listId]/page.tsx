import * as styles from './ListDetail.css';
import Comments from '@/app/user/[userId]/list/[listId]/_components/ListDetailOuter/Comments';
import Header from '@/app/user/[userId]/list/[listId]/_components/ListDetailOuter/Header';
import ListInformation from '@/app/user/[userId]/list/[listId]/_components/ListDetailOuter/ListInformation';
import FloatingContainer from '@/components/floatingButton/FloatingContainer';
import ArrowUpFloatingButton from '@/components/floatingButton/ArrowUpFloatingButton';
import PlusOptionFloatingButton from '@/components/floatingButton/PlusOptionFloatingButton';

export default function ListDetail() {
  return (
    <section className={styles.wrapper}>
      <Header />
      <ListInformation />
      <Comments />
      <FloatingContainer>
        <PlusOptionFloatingButton />
        <ArrowUpFloatingButton />
      </FloatingContainer>
    </section>
  );
}
