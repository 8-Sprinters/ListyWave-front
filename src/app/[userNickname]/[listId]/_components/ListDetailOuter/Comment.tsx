'use client';
import { useState } from 'react';
import Image from 'next/image';

import Replies from '@/app/[userNickname]/[listId]/_components/ListDetailOuter/Replies';
import PopOverMenu from '@/app/[userNickname]/[listId]/_components/ListDetailOuter/PopOverMenu';
import timeDiff from '@/lib/utils/timeDiff';
import * as styles from './Comment.css';
import { CommentType } from '../../mockData/mockdataType';
import DefaultProfile from '/public/icons/default_profile_temporary.svg';
import DeleteModal from './DeleteModal';

interface CommentProps {
  comment: CommentType | undefined;
  onUpdate: (userName: string | null) => void;
  activeNickname?: string | null;
}

function Comment({ comment, onUpdate }: CommentProps) {
  const [activeMenuId, setActiveMenuId] = useState<number | null>(null);

  const handleActiveNicknameUpdate = () => {
    const currentUserName = comment?.userName;
    if (currentUserName) {
      onUpdate(currentUserName);
    }
  };

  return (
    <>
      <div className={styles.commentOuterWrapper}>
        <div className={styles.commentWrapper}>
          {comment && comment.userProfileImageUrl ? (
            <Image
              alt="프로필 이미지"
              width={30}
              height={30}
              src={comment.userProfileImageUrl}
              className={styles.profileImage}
            ></Image>
          ) : (
            <DefaultProfile />
          )}
          <div className={styles.commentContainer}>
            <div className={styles.commentInformationWrapper}>
              <span className={styles.commentWriter}>{comment?.userName}</span>
              <span className={styles.commentCreatedTime}>{comment && timeDiff(comment?.createdDate)}</span>
            </div>
            <div className={styles.commentContent}>{comment?.content}</div>
          </div>
        </div>
        <DeleteModal />
        {comment && activeMenuId === comment.id && <PopOverMenu />}
      </div>
      <button className={styles.createReplyButton} onClick={handleActiveNicknameUpdate}>
        <span>답글 달기</span>
      </button>
      <Replies replies={comment?.replies} />
    </>
  );
}

export default Comment;
