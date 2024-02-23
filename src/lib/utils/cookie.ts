import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name: string, value: string, type: 'AT' | 'RT') => {
  return cookies.set(name, value, {
    path: '/',
    secure: true,
    maxAge: type === 'AT' ? 60 * 30 : 60 * 60 * 24, // 현재 refreshToken 쿠키로 전달 도입 전까지, AT는 만료 시간 30분, RT는 24시간으로 설정
  });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const removeCookie = (name: string) => {
  return cookies.remove(name, { path: '/' });
};

// server 컴포넌트에서 쿠키읽기 - 참고용으로 작성 후 주석처리 해둠

// 'use server'

// import { cookies } from 'next/headers';

// export const setCookie = (accessToken: string) => {
//   cookies().set({
//     name: 'accessToken',
//     value: accessToken,
//     secure: true,
//     path: '/',
//     maxAge: 60 * 2,
//   });
// };
