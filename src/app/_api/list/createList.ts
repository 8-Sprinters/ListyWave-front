import axiosInstance from '@/lib/axios/axiosInstance';
import { ListCreateType } from '@/lib/types/listType';

export const createList = async (data: ListCreateType) => {
  const response = await axiosInstance.post<ListCreateType>('/lists', data);

  return response.data;
};
