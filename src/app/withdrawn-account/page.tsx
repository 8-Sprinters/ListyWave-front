'use client';

import Link from 'next/link';
import * as styles from './page.css';
import { withdrawnAccountLocale } from '@/app/withdrawn-account/locale';
import { useLanguage } from '@/store/useLanguage';

export default function WithdrawnAccountPage() {
  const { language } = useLanguage();
  return (
    <div className={styles.wrapper}>
      <div>{withdrawnAccountLocale[language].message1}</div>
      <div>{withdrawnAccountLocale[language].message2}</div>
      <br />
      <Link className={styles.link} href="/">
        {withdrawnAccountLocale[language].goToHome}
      </Link>
      <Link className={styles.subLink} href="https://open.kakao.com/o/saz6DObg" target="_blank">
        {withdrawnAccountLocale[language].contact}
      </Link>
    </div>
  );
}
