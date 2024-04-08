'use client';

import Link from 'next/link';
import Image from 'next/image';

import * as styles from './LoginModal.css';

import KakaoLoginIcon from '/public/icons/kakao_login_narrow.svg';
import { commonLocale } from '@/components/locale';
import { useLanguage } from '@/store/useLanguage';

// 다른 소셜 로그인 도입을 위해 주석처리 해둠
// import NaverLoginIcon from '/public/icons/naver_login.svg';
// import GoogleLoginIcon from '/public/icons/google_login.svg';
// import KakaoLoginIcon from '/public/icons/kakao_login.svg';

const oauthType = {
  naver: 'naver',
  google: 'google',
  kakao: 'kakao',
};

interface LoginModalProps {
  id: string;
}

export default function LoginModal({ id }: LoginModalProps) {
  const { language } = useLanguage();
  return (
    <section className={styles.container}>
      <div className={styles.logoContainer}>
        <Image
          src={`/icons/large_logo.svg`}
          width={207}
          height={35}
          alt={commonLocale[language].listyWaveLogo}
          priority
        />
        <div className={styles.textContainer}>
          <p className={styles.text}>
            {commonLocale[language].own} <span className={styles.variantText}>{commonLocale[language].list}</span>
            {commonLocale[language].make}
          </p>
          <h1 className={styles.title}>{commonLocale[language].start}</h1>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        {/* <Link href={`${baseUrl}/auth/${oauthType.naver}`}>
          <NaverLoginIcon />
        </Link>
        <Link href={`${baseUrl}/auth/${oauthType.google}`}>
          <GoogleLoginIcon />
        </Link> */}
        <Link id={id} href={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/auth/${oauthType.kakao}`}>
          <KakaoLoginIcon />
        </Link>
      </div>
    </section>
  );
}
