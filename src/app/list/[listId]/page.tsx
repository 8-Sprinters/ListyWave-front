import * as styles from './ListDetail.css';

import ListInformation from '@/app/list/[listId]/_components/ListDetailOuter/ListInformation';

export default function ListDetailPage() {
  return (
    <section className={styles.wrapper}>
      <ListInformation />
    </section>
  );
}
