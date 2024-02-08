'use client';
import Image from 'next/image';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Replies from '@/app/user/[userId]/list/[listId]/_components/ListDetailOuter/Replies';
import { deleteComment } from '@/app/_api/comment/deleteComment';
import DeleteModalButton from '@/app/user/[userId]/list/[listId]/_components/ListDetailOuter/DeleteModalButton';
import timeDiff from '@/lib/utils/time-diff';
import { CommentType } from '@/lib/types/commentType';
import * as styles from './Comment.css';
import DefaultProfile from '/public/icons/default_profile_temporary.svg';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

interface CommentProps {
  comment: CommentType | undefined;
  onUpdate: (userName: string | undefined) => void;
  activeNickname?: string | null;
  handleSetCommentId: (id: number | undefined) => void;
  listId?: string | undefined;
  commentId?: null | number | undefined;
}

function Comment({ comment, onUpdate, handleSetCommentId, listId, commentId }: CommentProps) {
  const queryClient = useQueryClient();

  const handleActiveNicknameAndIdUpdate = () => {
    const currentUserName = comment?.userNickname;
    const currentCommentId = comment?.id;
    if (!currentUserName && !currentCommentId) {
      return null;
    }
    onUpdate(currentUserName);
    handleSetCommentId(currentCommentId);
  };

  const deleteCommentMutation = useMutation({
    mutationFn: () => deleteComment(listId, comment?.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getComments] });
    },
    onSettled: () => {
      console.log('댓글이 성공적으로 삭제되었습니다.');
    },
  });

  const handleClickDeleteButton = () => {
    deleteCommentMutation.mutate();
  };

  return (
    <>
      <div className={styles.commentOuterWrapper}>
        <div className={styles.commentWrapper}>
          {comment && !comment.isDeleted && (
            <Image
              alt="프로필 이미지"
              width={30}
              height={30}
              src={comment.userProfileImageUrl}
              className={styles.profileImage}
            />
          )}
          {comment?.isDeleted && <DefaultProfile width={30} height={30} />}
          <div className={styles.commentContainer}>
            <div className={styles.commentInformationWrapper}>
              <span className={styles.commentWriter}>{comment?.isDeleted ? '알 수 없음' : comment?.userNickname}</span>
              <span className={styles.commentCreatedTime}>{comment && timeDiff(comment?.createdDate)}</span>
            </div>
            <div className={styles.commentContent}>
              {comment?.isDeleted ? '사용자의 요청에 의해 삭제된 댓글입니다.' : comment?.content}
            </div>
          </div>
        </div>
        <DeleteModalButton onDelete={handleClickDeleteButton} />
      </div>
      <button className={styles.createReplyButton} onClick={handleActiveNicknameAndIdUpdate}>
        <span>답글 달기</span>
      </button>
      <Replies replies={comment?.replies} listId={listId} commentId={commentId} />
    </>
  );
}

export default Comment;
