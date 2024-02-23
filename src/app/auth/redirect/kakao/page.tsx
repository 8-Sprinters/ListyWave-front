'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { AxiosError } from 'axios';

import axiosInstance from '@/lib/axios/axiosInstance';
import { useUser } from '@/store/useUser';
import { UserOnLoginType } from '@/lib/types/user';

export default function KakaoRedirectPage() {
  const router = useRouter();
  const { updateUser } = useUser();
  const searchParams = useSearchParams();
  const code = searchParams ? searchParams.get('code') : null;

  useEffect(() => {
    const controller = new AbortController();

    if (!code) {
      router.push('/login');
      return;
    }

    // 브라우저 기본 동작으로 리다이렉트 페이지에 접근하지 못하도록 설정
    history.replaceState(null, '', '/');

    const loginKakao = async () => {
      try {
        const res = await axiosInstance.get<UserOnLoginType>(`/auth/redirect/kakao?code=${code}`, {
          signal: controller.signal,
        });

        const { id, accessToken } = res.data;
        updateUser({ id, accessToken });

        if (res.data.isFirst) {
          router.push('/start-listy');
        } else {
          router.push('/');
        }
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
      controller.abort(); // 마운트 해제 및 axios 요청 취소
    };
  }, [code]);

  return <div>로그인 중입니다.</div>;
}
