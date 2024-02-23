import axiosInstance from '@/lib/axios/axiosInstance';

const editComment = async (listId?: number, commentId?: number, comment?: string) => {
  await axiosInstance.patch(`/lists/${listId}/comments/${commentId}`, {
    content: comment,
  });
};

export default editComment;
