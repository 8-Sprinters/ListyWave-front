import axiosInstance from '@/lib/axios/axiosInstance';
import { AllListType } from '@/lib/types/listType';

const accessToken = '';

export async function getAllList(userId = 4) {
  const response = await axiosInstance.get<AllListType>(`/users/${userId}/lists?type=my&category=entire&size=5`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
}
