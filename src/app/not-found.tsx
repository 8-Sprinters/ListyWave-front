import NoDataComponent from '@/components/NoData/NoDataComponent';
import NotFoundImage from '/public/images/not-found.svg';

import * as styles from './not-found.css';

function NotFoundPage() {
  return (
    <div className={styles.wrapper}>
      <NotFoundImage className={styles.image} width={195} height={161} alt="Not Found" />
      <h1>존재하지 않는 페이지에요.</h1>
    </div>
  );
}

export default NotFoundPage;
