import axiosInstance from '@/lib/axios/axiosInstance';
import { AllListType } from '@/lib/types/listType';

export async function getAllList(userId: number, type: string, category: string, cursorId?: number) {
  const params = new URLSearchParams({
    type,
    category,
    size: '5',
  });

  if (cursorId) {
    params.append('cursorId', cursorId.toString());
  }

  const response = await axiosInstance.get<AllListType>(`/users/${userId}/lists?${params.toString()}`);

  return response.data;
}
