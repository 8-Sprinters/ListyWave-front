'use client';
import Image from 'next/image';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import DeleteModalButton from '@/app/user/[userId]/list/[listId]/_components/ListDetailOuter/DeleteModalButton';
import deleteReply from '@/app/_api/comment/deleteReply';
import { useCommentIdStore } from '@/store/useComment';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import timeDiff from '@/lib/utils/time-diff';
import { ReplyType } from '@/lib/types/commentType';
import { UserType } from '@/lib/types/userProfileType';

import * as styles from './Replies.css';
import Line from '/public/icons/horizontal_line.svg';
import EditPen from '/public/icons/edit_pen.svg';

interface RepliesProps {
  replies?: ReplyType[] | null;
  listId?: number;
  commentId?: number;
  currentUserInfo?: UserType;
  handleEdit: (comment: string) => void;
}

function Replies({ replies, listId, currentUserInfo, commentId, handleEdit }: RepliesProps) {
  const { commentIds, addCommentId } = useCommentIdStore();

  const handleShowReplies = (commentId: number) => () => {
    addCommentId(commentId);
  };

  const isOpenedReplies = commentIds.includes(commentId as number);

  return (
    <>
      {replies?.length !== 0 && !isOpenedReplies && (
        <div className={styles.showMoreRepliesWrapper} onClick={handleShowReplies(commentId as number)}>
          <Line alt="답글 구분선" />
          <div className={styles.showMoreReplies}>{`답글 ${replies?.length}개 더 보기`}</div>
        </div>
      )}
      {isOpenedReplies && (
        <ul className={styles.repliesWrapper}>
          {replies?.map((item: ReplyType) => {
            return (
              <li key={item.id} className={styles.repliesOuterWrapper}>
                <Reply reply={item} listId={listId} currentUserInfo={currentUserInfo} handleEdit={handleEdit} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Replies;

interface ReplyProps {
  reply: ReplyType;
  listId?: number;
  currentUserInfo?: UserType;
  handleEdit: (comment: string) => void;
}

function Reply({ reply, listId, currentUserInfo, handleEdit }: ReplyProps) {
  const queryClient = useQueryClient();
  const deleteReplyMutation = useMutation({
    mutationFn: () => deleteReply({ listId: listId, commentId: reply?.commentId, replyId: reply?.id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getComments] });
    },
  });

  const handleDeleteButtonClick = () => {
    deleteReplyMutation.mutate();
  };
  return (
    <>
      <div className={styles.replyWrapper}>
        <Image
          src={reply.userProfileImageUrl}
          className={styles.profileImage}
          width={20}
          height={20}
          alt="사용자 프로필 이미지"
          style={{
            objectFit: 'cover',
          }}
        />
        <div className={styles.replyContainer}>
          <div className={styles.replyInformationWrapper}>
            <span className={styles.replyWriter}>{reply.userNickname}</span>
            <span className={styles.replyCreatedTime}>{timeDiff(reply.createdDate)}</span>
          </div>
          <p className={styles.replyContent}>{reply.content}</p>
        </div>
      </div>
      {currentUserInfo?.id === reply.userId && (
        <div className={styles.actionButtonWrapper}>
          <button className={styles.editButton} onClick={() => handleEdit(reply.content)}>
            <EditPen />
          </button>
          <DeleteModalButton onDelete={handleDeleteButtonClick} />
        </div>
      )}
    </>
  );
}
