import axios from 'axios';

import { getCookie, removeCookie, setCookie } from '../utils/cookie';
import toasting from '../utils/toasting';
import { useUser } from '@/store/useUser';
import toastMessage from '../constants/toastMessage';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_DOMAIN,
  withCredentials: true,
});

/**
 * 로그인 후 Request 보낼 때, 토큰을 Authorization header로 보내는 코드
 * Response body로 받은 토큰을 zustand persist(로컬 스토리지 저장) 또는 리액트 쿠키 라이브러리로 저장(쿠키에 저장)
 * 최종 Set-cookie header로 토큰을 주고 받는 방법을 선택함에 따라 참고 목적으로 주석처리 해둔 코드
 */
// axiosInstance.interceptors.request.use(
//   (config) => {
//     zustande persist에 저장된 토큰 꺼내쓰기 버전 - 방법 1
//     const accessToken = useUser.getState().user.accessToken;

//     cookie에 저장된 토큰 꺼내쓰기 버전 - 방법 2
//     const accessToken = getCookie('accessToken');

//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }

//     return config;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );

let isRefreshing = false;

// interceptors header로 보내기 버전 - 방법 2
axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = getCookie('refreshToken');

    if (error.response?.status === 401 && error.response?.data.error === 'UNAUTHORIZED') {
      if (!isRefreshing && refreshToken === undefined) {
        console.log('로그인이 다시 필요한 회원');

        // accessToken 만료되었는데, refreshToken 없는 경우, storage 비우기
        useUser.getState().logoutUser();
        removeCookie('accessToken');
        removeCookie('refreshToken');
        isRefreshing = true;
      }

      if (!isRefreshing) {
        isRefreshing = true;

        try {
          // instance 대신 axios 요청
          // refreshtToken으로 accessToken 재발급 요청
          const { data } = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/auth/token`, {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          });

          const newAccessToken = data.accessToken;
          setCookie('accessToken', newAccessToken, 'AT');

          originalRequest.headers.authorization = `Bearer ${newAccessToken}`;
          return axiosInstance(originalRequest);
        } catch (error) {
          // refreshToken 생성 실패 시,
          useUser.getState().logoutUser();
          removeCookie('accessToken');
          removeCookie('refreshToken');
          toasting({ type: 'error', txt: toastMessage.ko.userStatusLoggedOut });
        } finally {
          isRefreshing = false;
        }
      }
    }
    return Promise.reject(error);
  }
);

// interceptors 쿠키로 보내기 버전 - 방법 1
// axiosInstance.interceptors.response.use(
//   (res) => res,
//   async (error) => {
//     const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       const response = await axiosInstance.get('/auth/token', {
//         _retry: true,
//         withCredentials: true,
//       });
//       console.log('여기');

//       console.log(response.data);

//       useUser.getState().updateUser({ id: 13, accessToken: response.data.accessToken });

//       originalRequest._retry = true;
//       axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
//       return axiosInstance(originalRequest);
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
