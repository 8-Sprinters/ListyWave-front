import axios, { AxiosRequestConfig } from 'axios';
// import { useUser } from '@/store/useUser';
import { getCookie } from '../utils/cookie';

const axiosInstance = axios.create({
  baseURL: 'https://dev.api.listywave.com',
  withCredentials: true, // refreshToken을 고려해서 true로 설정
});

axiosInstance.interceptors.request.use(
  (config) => {
    // zustande persist에 저장된 토큰 꺼내쓰기 버전 - 방법 1
    // const accessToken = useUser.getState().user.accessToken;

    // cookie에 저장된 토큰 꺼내쓰기 버전 - 방법 2
    const accessToken = getCookie('accessToken');

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
