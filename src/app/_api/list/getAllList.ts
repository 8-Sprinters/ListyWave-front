import axiosInstance from '@/lib/axios/axiosInstance';
import { AllListType } from '@/lib/types/listType';

export async function getAllList(userId: number, type: string, category?: string) {
  const query = `${category ? `${category}` : 'entire'}`;

  const response = await axiosInstance.get<AllListType>(
    `/users/${userId}/lists?type=${type}&category=${query}&size=10`
  );

  return response.data;
}
