import axios from 'axios';
import { getCookie, removeCookie, setCookie } from '../utils/cookie';

const axiosInstanceForAdmin = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_DOMAIN,
});

axiosInstanceForAdmin.interceptors.request.use(
  (config) => {
    const accessToken = getCookie('admin-accessToken');

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

let isRefreshing = false;

axiosInstanceForAdmin.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = getCookie('admin-refreshToken');

    if (error.response?.status === 401 && error.response?.data.error === 'UNAUTHORIZED') {
      if (!isRefreshing && refreshToken === undefined) {
        // accessToken 만료되었는데, refreshToken 없는 경우, storage 비우기
        removeCookie('admin-accessToken');
        removeCookie('admin-refreshToken');

        isRefreshing = true;

        alert('다시 로그인해주세요.');
        location.href = '/admin';
      }

      if (!isRefreshing) {
        isRefreshing = true;

        try {
          // instance 대신 axios 요청
          // refreshToken으로 accessToken 재발급 요청
          const { data } = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/auth/token`, {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          });

          const newAccessToken = data.accessToken;
          setCookie('admin-accessToken', newAccessToken, 'AT');

          originalRequest.headers.authorization = `Bearer ${newAccessToken}`;
          return axiosInstanceForAdmin(originalRequest);
        } catch (error) {
          // refreshToken 생성 실패 시,
          removeCookie('admin-accessToken');
          removeCookie('admin-refreshToken');

          alert('다시 로그인해주세요.');
          location.href = '/admin';
        } finally {
          isRefreshing = false;
        }
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstanceForAdmin;
