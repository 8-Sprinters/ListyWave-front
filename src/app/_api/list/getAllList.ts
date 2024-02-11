import axiosInstance from '@/lib/axios/axiosInstance';
import { AllListType } from '@/lib/types/listType';

export async function getAllList(userId: number, type: string, category?: string, cursorId?: any) {
  const query = `${category ? `${category}` : 'entire'} ${cursorId ? `&cursorId=${cursorId}` : ''}`;

  const response = await axiosInstance.get<AllListType>(`/users/${userId}/lists?type=${type}&category=${query}&size=5`);

  return response.data;
}
