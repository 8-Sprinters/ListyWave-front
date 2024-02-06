import axiosInstance from '@/lib/axios/axiosInstance';
import { AllListType } from '@/lib/types/listType';

export async function getAllList(userId: number) {
  // const query =
  const response = await axiosInstance.get<AllListType>(`/users/${userId}/list`);

  return response.data;
}
