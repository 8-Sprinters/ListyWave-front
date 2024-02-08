// 리스트 삭제 api
import axiosInstance from '@/lib/axios/axiosInstance';

//댓글 삭제 api
export async function deleteList(listId: string | undefined) {
  const response = await axiosInstance.delete(`/lists/${listId}`);
  return response.data;
}
