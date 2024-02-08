'use client';
import Image from 'next/image';
import Replies from '@/app/user/[userId]/list/[listId]/_components/ListDetailOuter/Replies';
import DeleteModalButton from '@/app/user/[userId]/list/[listId]/_components/ListDetailOuter/DeleteModalButton';
import timeDiff from '@/lib/utils/timeDiff';
import * as styles from './Comment.css';
import DefaultProfile from '/public/icons/default_profile_temporary.svg';
import { CommentType } from '../../mockData/mockdataType';

interface CommentProps {
  comment: CommentType | undefined;
  onUpdate: (userName: string | null) => void;
  activeNickname?: string | null;
}

function Comment({ comment, onUpdate }: CommentProps) {
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
            />
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
        <DeleteModalButton />
      </div>
      <button className={styles.createReplyButton} onClick={handleActiveNicknameUpdate}>
        <span>답글 달기</span>
      </button>
      <Replies replies={comment?.replies} />
    </>
  );
}

export default Comment;
