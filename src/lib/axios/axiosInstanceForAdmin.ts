import axios from 'axios';
import { getCookie } from '../utils/cookie';

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

export default axiosInstanceForAdmin;
