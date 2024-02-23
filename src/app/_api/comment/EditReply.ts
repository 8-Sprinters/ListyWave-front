import axiosInstance from '@/lib/axios/axiosInstance';

const editReply = async (listId?: number, commentId?: number, replyId?: number, reply?: string) => {
  await axiosInstance.patch(`/lists/${listId}/comments/${commentId}/replies/${replyId}`, {
    content: reply,
  });
};

export default editReply;
