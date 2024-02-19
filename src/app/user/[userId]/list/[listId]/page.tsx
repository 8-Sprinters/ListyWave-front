import * as styles from './ListDetail.css';

import ListInformation from '@/app/user/[userId]/list/[listId]/_components/ListDetailOuter/ListInformation';

export default function ListDetailPage() {
  return (
    <section className={styles.wrapper}>
      <ListInformation />
    </section>
  );
}
