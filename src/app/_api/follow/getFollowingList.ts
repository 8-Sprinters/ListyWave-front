import axiosInstance from '@/lib/axios/axiosInstance';
import { FollowingListType } from '@/lib/types/followType';

const getFollowingList = async (userId: number | null) => {
  const response = await axiosInstance.get<FollowingListType>(`users/${userId}/followings`);

  return response.data;
};

export default getFollowingList;
