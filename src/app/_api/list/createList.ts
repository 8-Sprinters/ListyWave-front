import axiosInstance from '@/lib/axios/axiosInstance';
import { ListCreateType, ListIdType } from '@/lib/types/listType';

const accessToken = '';

export const createList = async (data: ListCreateType) => {
  const response = await axiosInstance.post<ListIdType>('/lists', data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
};
