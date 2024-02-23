import axiosInstance from '@/lib/axios/axiosInstance';
import { DefaultImagesType } from '@/lib/types/userProfileType';

const getDefaultBackgroundImages = async () => {
  const response = await axiosInstance.get<DefaultImagesType>(`/users/default-background-images`);
  return response.data;
};

export default getDefaultBackgroundImages;
