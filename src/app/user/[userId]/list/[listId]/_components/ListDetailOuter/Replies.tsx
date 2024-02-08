'use client';
import { useState } from 'react';
import Image from 'next/image';
import timeDiff from '@/lib/utils/time-diff';
import DeleteModalButton from '@/app/user/[userId]/list/[listId]/_components/ListDetailOuter/DeleteModalButton';
import * as styles from './Replies.css';
import Line from '/public/icons/horizontal_line.svg';
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
          {replies?.map((item: ReplyType) => {
            return (
              <li key={item.id} className={styles.repliesOuterWrapper}>
                <div className={styles.replyWrapper}>
                  <Image
                    src={item.userProfileImageUrl}
                    className={styles.profileImage}
                    width={20}
                    height={20}
                    alt="사용자 프로필 이미지"
                  />
                  <div className={styles.replyContainer}>
                    <div className={styles.replyInformationWrapper}>
                      <span className={styles.replyWriter}>{item.userNickName}</span>
                      <span className={styles.replyCreatedTime}>{timeDiff(item.createdDate)}</span>
                    </div>
                    <p className={styles.replyContent}>{item.content}</p>
                  </div>
                </div>
                <DeleteModalButton />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Replies;
