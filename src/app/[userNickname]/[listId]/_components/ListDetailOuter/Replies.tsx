'use client';
import { useState } from 'react';
import Image from 'next/image';
import timeDiff from '@/lib/utils/timeDiff';
import * as styles from './Replies.css';
import Line from '/public/icons/horizontal_line.svg';
import DeleteButton from '/public/icons/trash_can.svg';
import { ReplyType } from '../../mockData/mockdataType';

interface RepliesProps {
  replies: ReplyType[] | null | undefined;
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
          <Line alt="답글 구분선" />
          <div className={styles.showMoreReplies}>{`답글 ${replies?.length}개 더 보기`} </div>
        </div>
      )}
      {showReplies && (
        <ul className={styles.repliesWrapper}>
          {replies?.map((reply: ReplyType, idx: number) => {
            return (
              <li key={idx.toString()} className={styles.repliesOuterWrapper}>
                <div className={styles.replyWrapper} key={idx.toString()}>
                  <Image
                    src={reply.userProfileImageUrl}
                    className={styles.profileImage}
                    alt="사용자 프로필 이미지"
                  ></Image>
                  <div className={styles.replyContainer}>
                    <div className={styles.replyInformationWrapper}>
                      <span className={styles.replyWriter}>{reply.userNickName}</span>
                      <span className={styles.replyCreatedTime}>{timeDiff(reply.createdDate)}</span>
                    </div>
                    <div className={styles.replyContent}>{reply.content}</div>
                  </div>
                </div>
                <DeleteButton className={styles.deleteButton} alt="삭제 버튼" />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Replies;
