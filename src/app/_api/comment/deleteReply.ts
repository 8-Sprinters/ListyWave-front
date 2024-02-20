import axiosInstance from '@/lib/axios/axiosInstance';

interface DeleteReplyType {
  listId: number | undefined;
  commentId: number | undefined | null;
  replyId: number | undefined | null;
}

//답글 삭제 api
const deleteReply = async ({ listId, commentId, replyId }: DeleteReplyType) => {
  await axiosInstance.delete(`/lists/${listId}/comments/${commentId}/replies/${replyId}`);
};

export default deleteReply;
