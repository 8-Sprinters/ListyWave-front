import axiosInstance from '@/lib/axios/axiosInstance';

interface DeleteReplyType {
  listId?: number;
  commentId?: number | null;
  replyId?: number | null;
}

//답글 삭제 api
const deleteReply = async ({ listId, commentId, replyId }: DeleteReplyType) => {
  await axiosInstance.delete(`/lists/${listId}/comments/${commentId}/replies/${replyId}`);
};

export default deleteReply;
