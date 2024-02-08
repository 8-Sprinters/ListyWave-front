import axiosInstance from '@/lib/axios/axiosInstance';
import { ListCreateType, ListIdType } from '@/lib/types/listType';

export const createList = async (data: ListCreateType) => {
  const response = await axiosInstance.post<ListIdType>('/lists', data);

  return response.data;
};
