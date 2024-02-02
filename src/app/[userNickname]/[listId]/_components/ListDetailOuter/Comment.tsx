'use client';
import { useState, useRef, useEffect } from 'react';

import ModalPortal from '@/components/ModalPortal';
import Replies from '@/app/[userNickname]/[listId]/_components/ListDetailOuter/Replies';
import PopOverMenu from '@/app/[userNickname]/[listId]/_components/ListDetailOuter/PopOverMenu';
import timeDiff from '@/lib/utils/timeDiff';
import * as styles from './Comment.css';
import { CommentType } from '../../mockData/mockdataType';
import DefaultProfile from '/public/icons/default_profile_temporary.svg';
import DeleteButton from '/public/icons/trash_can.svg';
import DeleteModal from './DeleteModal';

interface CommentProps {
  comment: CommentType | undefined;
  onUpdate: (userName: string | null) => void;
  activeNickname?: string | null;
}

function Comment({ comment, onUpdate }: CommentProps) {
  const [activeMenuId, setActiveMenuId] = useState<number | null>(null);
  const [isModalShown, setModalShown] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleActiveNicknameUpdate = () => {
    const currentUserName = comment?.userName;
    if (currentUserName) {
      onUpdate(currentUserName);
    }
  };

  const handleOutsideClick = (e: any) => {
    if (e.target !== buttonRef.current) {
      setActiveMenuId(null);
    }
  };

  const handleDeleteModalShow = () => {
    setModalShown(true);
  };

  const handleCancelButtonClick = () => {
    setModalShown(false);
  };

  const handleConfirmButtonClick = () => {
    //
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <>
      {isModalShown && (
        <ModalPortal>
          <DeleteModal onCancel={handleCancelButtonClick} onClick={handleConfirmButtonClick}></DeleteModal>
        </ModalPortal>
      )}
      <div className={styles.commentOuterWrapper}>
        <div className={styles.commentWrapper}>
          {comment && comment.userProfileImageUrl ? (
            <img alt="프로필 이미지" src={comment.userProfileImageUrl} className={styles.profileImage}></img>
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
        {/* 추후 신고하기 버튼 들어오면 사용 예정 */}
        {/* <button ref={buttonRef} onClick={(e) => handleKebabButtonClick(e, comment.id)}>
          |
        </button> */}
        <DeleteButton className={styles.deleteButton} onClick={handleDeleteModalShow} />
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

//신고하기 버튼 생성 시 사용될 함수
// const handleKebabButtonClick = (e: MouseEvent<HTMLButtonElement>, id: number) => {
//   e.stopPropagation();
//   if (isMenuShown) {
//     if (activeMenuId === id) {
//       setActiveMenuId(null);
//     } else {
//       setActiveMenuId(id);
//     }
//   } else {
//     setMenuShown(true);
//     setActiveMenuId(id);
//   }
// };
