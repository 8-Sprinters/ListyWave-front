import axiosInstance from '@/lib/axios/axiosInstance';

export default async function createFollowUser(userId: number) {
  return await axiosInstance.post(`/follow/${userId}`);
}
