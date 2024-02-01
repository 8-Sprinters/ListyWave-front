import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dev.api.listywave.com',
});

export default axiosInstance;
