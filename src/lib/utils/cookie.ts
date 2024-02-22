import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name: string, value: string) => {
  return cookies.set(name, value, {
    path: '/',
    secure: true,
    maxAge: 60 * 2, // 현재 2분 후 토큰 만료되고, 자동사라짐
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
