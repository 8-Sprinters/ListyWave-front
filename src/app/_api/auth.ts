import axiosInstance from '@/lib/axios/axiosInstance';

export default async function authKakao(code: string) {
  const response = await axiosInstance.get(`/auth/redirect/kakao?code=${code}`);

  return response.data;
}
