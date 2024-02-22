import axiosInstance from '@/lib/axios/axiosInstance';
import { HistoryType } from '@/lib/types/historyType';

const getHistories = async (listId: string | undefined) => {
  const response = await axiosInstance.get<HistoryType[]>(`/lists/${listId}/histories`);
  return response.data;
};

export default getHistories;
