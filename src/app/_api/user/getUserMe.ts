import axiosInstance from '@/lib/axios/axiosInstance';
import { UserType } from '@/lib/types/userProfileType';

export const getUserMe = async (userId: number) => {
  const response = await axiosInstance.get<UserType>(`/users/${userId}`);

  return response.data;
};
