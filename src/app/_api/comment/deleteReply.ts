import axiosInstance from '@/lib/axios/axiosInstance';

//답글 삭제 api
async function deleteReply(
  listId: string | undefined,
  commentId: number | undefined | null,
  replyId: number | undefined | null
) {
  const response = await axiosInstance.delete(`/lists/${listId}/comments/${commentId}/replies/${replyId}`);
  return response.data;
}

export default deleteReply;
