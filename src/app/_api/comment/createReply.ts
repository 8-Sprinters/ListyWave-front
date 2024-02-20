import axiosInstance from '@/lib/axios/axiosInstance';

interface CreateReplyType {
  listId: number | undefined;
  commentId: number | undefined | null;
  data: string;
}

const createReply = async ({ listId, commentId, data }: CreateReplyType) => {
  if (commentId === null) {
    return;
  }

  const response = await axiosInstance.post(`/lists/${listId}/comments/${commentId}/replies`, {
    content: data,
  });

  return response.data;
};

export default createReply;
