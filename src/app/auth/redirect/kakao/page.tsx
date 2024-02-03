'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import authKakao from '@/app/_api/auth';

export default function KakaoRedirectPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  const loginKakao = async (code: string) => {
    try {
      const res = await authKakao(code);
      // const response = await axiosInstance.get('/users/4');
      console.log(res);
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (code) {
      console.log(code);
      loginKakao(code);
    }
  }, []);

  return <div>로그인 중입니다.</div>;
}
