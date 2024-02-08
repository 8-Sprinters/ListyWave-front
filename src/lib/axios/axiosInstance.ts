import axios from 'axios';
import { useUser } from '@/store/useUser';

const axiosInstance = axios.create({
  baseURL: 'https://dev.api.listywave.com',
  withCredentials: true, // refreshToken을 고려해서 true로 설정
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = useUser.getState().user.accessToken;

    if (accessToken) {
      config.headers.Authorization = `${accessToken}`; // Bearer option 추가 예정
    }

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
