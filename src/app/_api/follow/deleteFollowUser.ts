import axiosInstance from '@/lib/axios/axiosInstance';

const deleteFollowUser = async (userId: number) => {
  return await axiosInstance.delete(`/follow/${userId}`);
};

export default deleteFollowUser;
