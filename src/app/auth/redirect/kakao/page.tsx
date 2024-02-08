'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { AxiosError } from 'axios';

import axiosInstance from '@/lib/axios/axiosInstance';
import { useUser } from '@/store/useUser';

export default function KakaoRedirectPage() {
  const router = useRouter();
  const { user, updateUser } = useUser();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    const controller = new AbortController();

    console.log('마운트');

    if (!code) return;

    const loginKakao = async () => {
      try {
        const res = await axiosInstance.get(`/auth/redirect/kakao?code=${code}`, {
          signal: controller.signal,
        });
        console.log('axios 요청 완료');
        console.log(res.data);

        const { id, nickname } = res.data;
        updateUser({ id, nickname });

        router.push('/');
      } catch (error) {
        if (error instanceof AxiosError) {
          if (!controller.signal.aborted) {
            console.error(error.message);
          } else {
            console.log('Request canceled:', error.message);
          }
        }
      }
    };

    loginKakao();

    return () => {
      console.log('마운트 해제 및 axios 요청 취소');
      controller.abort();
    };
  }, []);

  // userStore에 잘 저장되었는지 확인용 코드
  useEffect(() => {
    console.log(user);
  }, [user]);

  return <div>로그인 중입니다.</div>;
}
