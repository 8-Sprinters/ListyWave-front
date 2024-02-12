import axiosInstance from '@/lib/axios/axiosInstance';

const createFollowUser = async (userId: number) => {
  return await axiosInstance.post(`/follow/${userId}`);
};

export default createFollowUser;
