import axiosInstance from '@/lib/axios/axiosInstance';

const collectList = async (listId: string) => {
  return await axiosInstance.post(`/lists/${listId}/collect`);
};

export default collectList;
