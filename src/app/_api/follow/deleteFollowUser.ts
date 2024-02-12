import axiosInstance from '@/lib/axios/axiosInstance';

export default async function deleteFollowUser(userId: number) {
  return await axiosInstance.delete(`/follow/${userId}`);
}
