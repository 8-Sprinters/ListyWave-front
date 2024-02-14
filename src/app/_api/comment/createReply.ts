import axiosInstance from '@/lib/axios/axiosInstance';

interface createReplyType {
  listId: string | undefined;
  commentId: number | undefined | null;
  data: string;
}

async function createReply({ listId, commentId, data }: createReplyType) {
  console.log(data);

  if (commentId === null) {
    return;
  }

  const response = await axiosInstance.post(
    `/lists/${listId}/comments/${commentId}/replies`,
    {
      content: data,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data;
}

export default createReply;
