'use client';
import { MouseEvent, useState } from 'react';

import * as styles from './Comments.css';
import timeDiff from '@/lib/utils/timeDiff';
import Replies from '../Replies/Replies';
import PopOverMenu from '../PopOverMenu/PopOverMenu';
import PopOverWrapper from '../PopOverMenu/PopOverWrapper';

interface Replies {
  id: number;
  userId: number;
  userNickName: string;
  userProfileImageUrl: string;
  createdDate: string;
  content: string;
}

interface Comment {
  id: number;
  userId: number;
  userName: string;
  userProfileImageUrl: string;
  createdDate: string;
  content: string;
  replies: Replies[] | null;
}

interface CommentProps {
  comment: Comment;
}

function Comment({ comment }: CommentProps) {
  const [isMenuShown, setMenuShown] = useState<boolean>(false);
  const [activeMenuId, setActiveMenuId] = useState<number | null>(null);

  const handleKebabButtonClick = (e: MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation();
    if (isMenuShown) {
      if (activeMenuId === id) {
        setActiveMenuId(null);
      } else {
        setActiveMenuId(id);
      }
    } else {
      setMenuShown(true);
      setActiveMenuId(id);
    }
  };

  const handlePopOverMenuClose = () => {
    setActiveMenuId(null);
  };

  console.log(activeMenuId);

  return (
    <>
      <div className={styles.commentOuterWrapper}>
        <div className={styles.commentWrapper}>
          <img src={comment.userProfileImageUrl} className={styles.profileImage}></img>
          <div className={styles.commentContainer}>
            <div className={styles.commentInformationWrapper}>
              <span className={styles.commentWriter}>{comment?.userName}</span>
              <span className={styles.commentCreatedTime}>{timeDiff(comment?.createdDate)}</span>
            </div>
            <div className={styles.commentContent}>{comment?.content}</div>
          </div>
        </div>

        <button onClick={(e) => handleKebabButtonClick(e, comment.id)}>|</button>
        {isMenuShown && activeMenuId === comment.id && (
          <PopOverWrapper onClose={handlePopOverMenuClose}>
            <PopOverMenu />
          </PopOverWrapper>
        )}
      </div>
      <button className={styles.createReplyButton}>
        <span>답글 달기</span>
      </button>
      <Replies replies={comment?.replies} />
    </>
  );
}

export default Comment;
