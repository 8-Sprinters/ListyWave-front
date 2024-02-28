'use client';

import NotFoundImage from '/public/images/not-found.svg';

import * as styles from './not-found.css';
import { useRouter } from 'next/navigation';
import { commonLocale } from '@/app/locale';
import { useLanguage } from '@/store/useLanguage';

function NotFoundPage() {
  const { language } = useLanguage();
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <NotFoundImage className={styles.image} width={195} height={161} alt="Not Found" />
      <h1 className={styles.text}>{commonLocale[language].notFound}</h1>
      <button
        className={styles.button}
        onClick={() => {
          router.back();
        }}
      >
        {commonLocale[language].goBack}
      </button>
    </div>
  );
}

export default NotFoundPage;
