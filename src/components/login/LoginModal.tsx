'use client';

import Link from 'next/link';
import Image from 'next/image';

import * as styles from './LoginModal.css';

import KakaoLoginIcon from '/public/icons/kakao_login_narrow.svg';

// 다른 소셜 로그인 도입을 위해 주석처리 해둠
// import NaverLoginIcon from '/public/icons/naver_login.svg';
// import GoogleLoginIcon from '/public/icons/google_login.svg';
// import KakaoLoginIcon from '/public/icons/kakao_login.svg';

const oauthType = {
  naver: 'naver',
  google: 'google',
  kakao: 'kakao',
};

const baseUrl = 'https://dev.api.listywave.com'; // TODO 이 부분은 나중에 .env.local로 수정

export default function LoginModal() {
  return (
    <section className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src={`/icons/large_logo.svg`} width={207} height={35} alt="리스티웨이브 로고" priority />
        <div className={styles.textContainer}>
          <p className={styles.text}>
            나만의 <span className={styles.variantText}>리스트</span>를 만들어보세요!
          </p>
          <h1 className={styles.title}>시작하기</h1>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        {/* <Link href={`${baseUrl}/auth/${oauthType.naver}`}>
          <NaverLoginIcon />
        </Link>
        <Link href={`${baseUrl}/auth/${oauthType.google}`}>
          <GoogleLoginIcon />
        </Link> */}
        <Link href={`${baseUrl}/auth/${oauthType.kakao}`}>
          <KakaoLoginIcon />
        </Link>
      </div>
    </section>
  );
}
