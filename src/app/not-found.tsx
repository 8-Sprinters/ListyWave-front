'use client';

import NotFoundImage from '/public/images/not-found.svg';

import * as styles from './not-found.css';
import { useRouter } from 'next/navigation';

function NotFoundPage() {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <NotFoundImage className={styles.image} width={195} height={161} alt="Not Found" />
      <h1 className={styles.text}>존재하지 않는 페이지에요.</h1>
      <button
        className={styles.button}
        onClick={() => {
          router.back();
        }}
      >
        돌아가기
      </button>
    </div>
  );
}

export default NotFoundPage;
