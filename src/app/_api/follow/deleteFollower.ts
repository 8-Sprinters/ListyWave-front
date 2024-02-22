import axiosInstance from '@/lib/axios/axiosInstance';

const deleteFollower = async (userId: number) => {
  return await axiosInstance.delete(`/followers/${userId}`);
};

export default deleteFollower;
