import axiosInstance from '@/lib/axios/axiosInstance';
import { UserType } from '@/lib/types/userProfileType';

const getUserOne = async (userId: number) => {
  const response = await axiosInstance.get<UserType>(`/users/${userId}`);

  return response.data;
};

export default getUserOne;
