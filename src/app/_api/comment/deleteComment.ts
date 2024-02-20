import axiosInstance from '@/lib/axios/axiosInstance';

interface DeleteCommentType {
  listId: number | undefined;
  commentId: number | undefined;
}

//댓글 삭제 api
const deleteComment = async ({ listId, commentId }: DeleteCommentType) => {
  await axiosInstance.delete(`/lists/${listId}/comments/${commentId}`);
};

export default deleteComment;
