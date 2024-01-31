'use client';
import { useState } from 'react';
import * as styles from '../Comments/Comments.css';
import timeDiff from '@/lib/utils/timeDiff';
import Line from '/public/icons/line_icon.svg';
import DeleteButton from '/public/icons/trash_can_icon.svg';

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
        <div className={styles.showMoreRepliesWrapper} onClick={handleShowReplies}>
          <Line />
          <div className={styles.showMoreReplies}>{`답글 ${replies?.length}개 더 보기`} </div>
        </div>
      )}
      {showReplies && (
        <div className={styles.repliesWrapper}>
          {replies?.map((reply: any, idx: any) => {
            return (
              <div className={styles.repliesOuterWrapper}>
                <div className={styles.replyWrapper} key={idx.toString()}>
                  <img src={reply.userProfileImageUrl} className={styles.profileImage}></img>
                  <div className={styles.commentContainer}>
                    <div className={styles.commentInformationWrapper}>
                      <span className={styles.commentWriter}>{reply.userNickName}</span>
                      <span className={styles.commentCreatedTime}>{timeDiff(reply.createdDate)}</span>
                    </div>
                    <div className={styles.commentContent}>{reply.content}</div>
                  </div>
                </div>
                <DeleteButton className={styles.deleteButton} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Replies;
