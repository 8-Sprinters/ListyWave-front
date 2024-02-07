import axiosInstance from '@/lib/axios/axiosInstance';

export const createList = async (listId: string, data: string) => {
  const response = await axiosInstance.post(`/lists/${listId}/comment`, data);

  return response.data;
};
