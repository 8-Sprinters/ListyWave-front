import axiosInstance from '@/lib/axios/axiosInstance';
import { UserProfilesType } from '@/lib/types/userProfileType';

export const getUsers = async () => {
  const response = await axiosInstance.get<UserProfilesType>('/users');

  return response.data;
};
