import axiosInstance from '@/lib/axios/axiosInstance';

async function createComment(listId: string | undefined, data: string) {
  const response = await axiosInstance.post(
    `/lists/${listId}/comments`,
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

export default createComment;
