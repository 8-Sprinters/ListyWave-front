'use client';
import { useState } from 'react';
import Image from 'next/image';
import Comment from '@/app/[userNickname]/[listId]/_components/ListDetailOuter/Comment';
import * as styles from './Comments.css';
import { MOCKDATA_COMMENTS } from '../../mockData/mockdata';
import CancelButton from '/public/icons/cancel_button.svg';
const COMMENTS = MOCKDATA_COMMENTS[1];

function Comments() {
  const [activeNickname, setActiveNickname] = useState<string | null | undefined>(null);

  const handleActiveNicknameDelete = () => {
    if (activeNickname) {
      setActiveNickname(null);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapperOuter}>
        <Image src="" alt="프로필 이미지" width={36} height={36} className={styles.profileImage} />
        <div className={`${styles.formWrapperInner} ${!!activeNickname ? styles.activeFormWrapper : ''}`}>
          {activeNickname && (
            <div className={styles.activeReplyWrapper}>
              <span className={styles.replyNickname}>{`@${activeNickname}님에게 남긴 답글`}</span>
              <CancelButton className={styles.clearButton} alt="지우기 버튼" onClick={handleActiveNicknameDelete} />
            </div>
          )}
          <form className={styles.formContainer}>
            <input className={styles.formInput}></input>
            <button className={styles.formButton}>게시</button>
          </form>
        </div>
      </div>
      <div className={styles.totalCount}>{`${COMMENTS.totalCount}개의 댓글`}</div>
      {COMMENTS.comments.map((item, idx) => {
        return (
          <div key={idx.toString()}>
            <Comment comment={item} onUpdate={setActiveNickname} activeNickname={activeNickname} />
          </div>
        );
      })}
    </div>
  );
}

export default Comments;
