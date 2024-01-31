'use client';

import { useState, useRef, useEffect } from 'react';
import { MOCKDATA_COMMENTS } from '../mockdata';
import * as styles from './Comments.css';
import Comment from './Comment';
import ClearButton from '/public/icons/clear_icon.svg';

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
      <div className={styles.formWrapper}>
        <img className={styles.profileImage} />
        <form className={styles.form}>
          {activeNickname && (
            <div className={styles.formNicknameWrapper} onClick={handleActiveNicknameDelete}>
              <span className={styles.formNickname}>{`@${activeNickname}`}</span>
              <ClearButton className={styles.clearButton} />
            </div>
          )}
          <input className={styles.formInput}></input>
          <button className={styles.formButton}>게시</button>
        </form>
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
