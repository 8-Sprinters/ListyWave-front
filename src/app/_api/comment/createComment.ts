import axiosInstance from '@/lib/axios/axiosInstance';
import { ListCreateType, ListIdType } from '@/lib/types/listType';

export const createList = async (listId: string, data: string) => {
  const response = await axiosInstance.post<ListIdType>(`/lists/${listId}/comment`, data);

  return response.data;
};
