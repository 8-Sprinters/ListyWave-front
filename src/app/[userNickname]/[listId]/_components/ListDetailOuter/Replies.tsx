'use client';
import { useState } from 'react';
import timeDiff from '@/lib/utils/timeDiff';
import * as styles from './Comments.css';
import Line from '/public/icons/horizontal_line.svg';
import DeleteButton from '/public/icons/trash_can.svg';

interface Reply {
  userNickName: string;
  userProfileImageUrl: string;
  createdDate: string;
  content: string;
}

interface RepliesProps {
  replies: Reply[] | null | undefined;
}

function Replies({ replies }: RepliesProps) {
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
        <ul className={styles.repliesWrapper}>
          {replies?.map((reply: Reply, idx: number) => {
            return (
              <li key={idx.toString()} className={styles.repliesOuterWrapper}>
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
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Replies;
