'use client';
import { useState } from 'react';
import * as S from '../Comments/Comments.css';
import timeDiff from '@/lib/utils/timeDiff';

interface Reply {
  userNickName: string;
  createdDate: string;
  content: string;
}

interface RepliesProps {
  replies: Reply[] | null;
}

function Replies({ replies }: RepliesProps) {
  console.log(replies);
  const [showReplies, setShowReplies] = useState(false);

  const handleShowReplies = () => {
    setShowReplies((prev) => !prev);
  };

  return (
    <>
      {replies && !showReplies && (
        <div className={S.ShowMoreReplies} onClick={handleShowReplies}>
          {`- 답글 ${replies?.length}개 더 보기`}{' '}
        </div>
      )}
      {showReplies && (
        <div>
          {replies?.map((reply: any, idx: any) => {
            return (
              <div className={S.ReplyWrapper} key={idx.toString()}>
                <div className={S.ProfileImage}></div>
                <div className={S.CommentContainer}>
                  <div className={S.CommentInformationWrapper}>
                    <span className={S.CommentWriter}>{reply.userNickName}</span>
                    <span className={S.CommentCreatedTime}>{timeDiff(reply.createdDate)}</span>
                  </div>
                  <div className={S.CommentContent}>{reply.content}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Replies;
