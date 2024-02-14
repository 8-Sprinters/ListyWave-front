import axiosInstance from '@/lib/axios/axiosInstance';

interface DeleteReplyType {
  listId: number | undefined;
  commentId: number | undefined | null;
  replyId: number | undefined | null;
}

//답글 삭제 api
async function deleteReply({ listId, commentId, replyId }: DeleteReplyType) {
  const response = await axiosInstance.delete(`/lists/${listId}/comments/${commentId}/replies/${replyId}`);
  return response.data;
}

export default deleteReply;
