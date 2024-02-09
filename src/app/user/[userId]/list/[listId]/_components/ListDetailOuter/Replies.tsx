'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import DeleteModalButton from '@/app/user/[userId]/list/[listId]/_components/ListDetailOuter/DeleteModalButton';
import { deleteReply } from '@/app/_api/comment/deleteReply';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import timeDiff from '@/lib/utils/time-diff';
import { ReplyType } from '@/lib/types/commentType';
import * as styles from './Replies.css';
import Line from '/public/icons/horizontal_line.svg';

interface RepliesProps {
  replies: ReplyType[] | null | undefined;
  listId?: string | undefined;
  commentId?: null | number | undefined;
}

function Replies({ replies, listId }: RepliesProps) {
  const [showReplies, setShowReplies] = useState(false);

  const handleShowReplies = () => {
    setShowReplies((prev) => !prev);
  };

  return (
    <>
      {replies?.length !== 0 && !showReplies && (
        <div className={styles.showMoreRepliesWrapper} onClick={handleShowReplies}>
          <Line alt="답글 구분선" />
          <div className={styles.showMoreReplies}>{`답글 ${replies?.length}개 더 보기`}</div>
        </div>
      )}
      {showReplies && (
        <ul className={styles.repliesWrapper}>
          {replies?.map((item: ReplyType) => {
            return (
              <li key={item.id} className={styles.repliesOuterWrapper}>
                <Reply reply={item} listId={listId} />
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
  listId?: string | undefined;
}

function Reply({ reply, listId }: ReplyProps) {
  const queryClient = useQueryClient();
  const deleteReplyMutation = useMutation({
    mutationFn: () => deleteReply(listId, reply?.commentId, reply?.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getComments] });
      console.log('답글이 성공적으로 삭제되었습니다.');
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
        />
        <div className={styles.replyContainer}>
          <div className={styles.replyInformationWrapper}>
            <span className={styles.replyWriter}>{reply.userNickname}</span>
            <span className={styles.replyCreatedTime}>{timeDiff(reply.createdDate)}</span>
          </div>
          <p className={styles.replyContent}>{reply.content}</p>
        </div>
      </div>
      <DeleteModalButton onDelete={handleDeleteButtonClick} />
    </>
  );
}
