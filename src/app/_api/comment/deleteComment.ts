import axiosInstance from '@/lib/axios/axiosInstance';

interface DeleteCommentType {
  listId: number | undefined;
  commentId: number | undefined;
}

//댓글 삭제 api
async function deleteComment({ listId, commentId }: DeleteCommentType) {
  const response = await axiosInstance.delete(`/lists/${listId}/comments/${commentId}`);
  return response.data;
}

export default deleteComment;
