/**
 TODO
 - [ ] 로그인 만료 확인, refreshToken(추후)
 - [ ] 로그인 페이지 UI
 */

import Link from 'next/link';

const oauthType = {
  kakao: 'kakao',
  naver: 'naver',
  google: 'google',
};

export default function LoginPage() {
  return (
    <div>
      로그인페이지
      <div>
        <Link href={`https://dev.api.listywave.com/auth/${oauthType.kakao}`}>카카오 로그인</Link>
      </div>
    </div>
  );
}
