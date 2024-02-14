import axiosInstance from '@/lib/axios/axiosInstance';
import { UserProfilesType } from '@/lib/types/userProfileType';

const getUsers = async () => {
  const response = await axiosInstance.get<UserProfilesType>('/users');

  return response.data;
};

export default getUsers;
