'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import authKakao from '@/app/_api/auth';
import axiosInstance from '@/lib/axios/axiosInstance';

export default function KakaoRedirectPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  // const loginKakao = async (code: string) => {
  //   try {
  //     console.log('api요청');
  //     const res = await axiosInstance.get(`/auth/redirect/kakao?code=${code}`, {
  //       signal: controller.signal,
  //     });
  //     console.log(res); // 삭재 얘정
  //     if (res.data) {
  //       console.log('api 요청 완료');
  //       router.push('/');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const controller = new AbortController();

    console.log('마운트');

    if (code) {
      console.log('api 요청');

      axiosInstance
        .get(`/auth/redirect/kakao?code=${code}`, {
          signal: controller.signal,
        })
        .then((res) => {
          console.log('axios 요청 완료');
          console.log(res.data);

          router.push('/');
        })
        .catch((error) => console.error(error.message));
    }

    // if (code) {
    //   console.log(code); // 삭제 예쩡
    //   loginKakao(code);
    // }

    return () => {
      console.log('마운트 해제 및 axios 요청 취소');
      controller.abort();
    };
  }, []);

  return <div>로그인 중입니다.</div>;
}
