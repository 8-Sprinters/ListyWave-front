// http://localhost:3000/auth/redirect/kakao

'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

// import authKakao from '@/app/_api/auth';
import axios from 'axios';
import authKakao from '@/app/_api/auth';

export default function KakaoRedirectPage() {
  const router = useRouter();

  const loginKakao = async (code: string) => {
    // code로 서버에 api를 호출한다.
    try {
      // const res = await axios.get(`https://dev.api.listywave.com/auth/redirect/kakao?code=${code}`);
      // alert(`로그인 성공 ${res}`);
      // console.log(res.data);
      // 아이디, 닉네임 zustand에 저장.
      // localStorage.setItem('id', res.id);
      console.log('여기');

      // api 통신이 성공하면 사용자를 홈페이지로 이동시킨다.
      router.push('/');
    } catch (error) {
      console.log(error);
      router.push('/login');
    }
  };

  // // 쿼리파라미터로 보내주는 카카오 auth code를 추출한다.
  // const searchParams = useSearchParams();
  // const code = searchParams.get('code');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');

    console.log(code);
    /** chatGPT 왜 여기가 2번 출력되나요? */

    if (code) {
      loginKakao(code);
    }
  }, []);

  return <div>로그인 중입니다.</div>;
}
