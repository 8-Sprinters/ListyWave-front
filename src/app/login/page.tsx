'use client';

/**
 TODO
 - [ ] 로그인 만료 확인, refreshToken(추후)
 - [ ] 로그인 페이지 UI
 */

import Link from 'next/link';
import Image from 'next/image';

import NaverLoginIcon from '/public/icons/naver_login.svg';
import GoogleLoginIcon from '/public/icons/google_login.svg';
import KakaoLoginIcon from '/public/icons/kakao_login.svg';

const oauthType = {
  naver: 'naver',
  google: 'google',
  kakao: 'kakao',
};

const baseUrl = 'https://dev.api.listywave.com'; // TODO 이 부분은 나중에 .env.local로 수정

export default function LoginPage() {
  return (
    <section>
      <div>
        <Image src={`/icons/large_logo.svg`} width={207} height={35} alt="리스티웨이브 로고" priority />
        <div>
          <h1>시작하기</h1>
          <p>
            나만의 <span>리스트</span>를 만들어보세요!
          </p>
        </div>
      </div>
      <div>
        <Link href={`${baseUrl}/auth/${oauthType.naver}`}>
          <NaverLoginIcon />
        </Link>
        <Link href={`${baseUrl}/auth/${oauthType.google}`}>
          <GoogleLoginIcon />
        </Link>
        <Link href={`${baseUrl}/auth/${oauthType.kakao}`}>
          <KakaoLoginIcon />
        </Link>
      </div>
    </section>
  );
}
