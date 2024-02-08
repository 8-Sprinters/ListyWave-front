import axiosInstance from '@/lib/axios/axiosInstance';

//댓글 삭제 api
export async function deleteComment(listId: string | undefined, commentId: number | undefined) {
  const response = await axiosInstance.delete(`/lists/${listId}/comments/${commentId}`);
  return response.data;
}
