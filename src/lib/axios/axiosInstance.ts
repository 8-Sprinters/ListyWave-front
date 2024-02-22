import axios from 'axios';
import { getCookie, setCookie } from '../utils/cookie';

const axiosInstance = axios.create({
  baseURL: 'https://dev.api.listywave.com',
  // withCredentials: true, // refreshToken을 고려해서 true로 설정
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

// (참고) refresh도 만료되어, 쿠키에 없다면 로그인으로 리다이렉트

// interceptors header로 보내기 버전 - 방법 2
axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    console.log(error);

    const originalRequest = error.config;
    const refreshToken = getCookie('refreshToken');
    // console.log(refreshToken);
    // console.log(!originalRequest._retry);

    if (
      error.response?.status === 401 &&
      error.response?.data.code === 'INVALID_ACCESS_TOKEN' &&
      !originalRequest._retry
    ) {
      const { data } = await axios.get('https://dev.api.listywave.com/auth/token', {
        _retry: true, // TODO 무한루프 방지 다른 방법 고안
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      });
      console.log(data);

      originalRequest._retry = true;
      const newAccessToken = data.accessToken;
      setCookie('accessToken', newAccessToken, 'AT');

      originalRequest.headers.authorization = `Bearer ${newAccessToken}`;
      return axiosInstance(originalRequest);
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
