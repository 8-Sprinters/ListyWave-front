import axiosInstance from '@/lib/axios/axiosInstance';
import { DefaultImagesType } from '@/lib/types/userProfileType';

const getDefaultProfileImages = async () => {
  const response = await axiosInstance.get<DefaultImagesType>(`/users/default-profile-images`);
  return response.data;
};

export default getDefaultProfileImages;
