import axiosInstance from '@/lib/axios/axiosInstance';

export const createComment = async (listId: string | undefined, data: string) => {
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
};
