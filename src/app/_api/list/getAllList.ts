import axiosInstance from '@/lib/axios/axiosInstance';
import { AllListType } from '@/lib/types/listType';

const getAllList = async (userId: number, type: string, category: string, cursorUpdatedDate?: string) => {
  const params = new URLSearchParams({
    type,
    category,
    size: '10',
  });

  if (cursorUpdatedDate) {
    params.append('cursorUpdatedDate', cursorUpdatedDate.toString());
  }

  const response = await axiosInstance.get<AllListType>(`/users/${userId}/lists?${params.toString()}`);
  return response.data;
};

export default getAllList;
