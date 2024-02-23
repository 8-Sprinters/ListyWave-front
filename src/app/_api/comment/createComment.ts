import axiosInstance from '@/lib/axios/axiosInstance';
import { CreateCommentType } from '@/lib/types/commentType';
import { ListIdType } from '@/lib/types/listType';

const createComment = async ({ listId, comment }: CreateCommentType) => {
  const response = await axiosInstance.post<ListIdType>(`/lists/${listId}/comments`, {
    content: comment,
  });
  return response.data;
};

export default createComment;
