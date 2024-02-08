import axiosInstance from '@/lib/axios/axiosInstance';

//답글 삭제 api
export async function deleteComment(
  listId: string | undefined,
  commentId: number | undefined,
  replyId: number | undefined
) {
  const response = await axiosInstance.delete(`/lists/${listId}/comments/${commentId}/replies/${replyId}`);
  return response.data;
}
