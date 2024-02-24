// 리스트 삭제 api
import axiosInstance from '@/lib/axios/axiosInstance';

//댓글 삭제 api
const deleteList = async (listId: string | undefined) => {
  const response = await axiosInstance.delete(`/lists/${listId}`);
  return response.data;
};

export default deleteList;
