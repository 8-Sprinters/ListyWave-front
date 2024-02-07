'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Comment from './Comment';
import * as styles from './Comments.css';
import { getComments } from '@/app/_api/comment/getComments';
import { MOCKDATA_COMMENTS } from '../../mockData/mockdata';
import CancelButton from '/public/icons/cancel_button.svg';

const COMMENTS = MOCKDATA_COMMENTS[1];

function Comments() {
  const [activeNickname, setActiveNickname] = useState<string | null | undefined>(null);
  const params = useParams<{ listId: string }>();
  const { data } = useQuery({ queryKey: ['getComments'], queryFn: () => getComments('1') });
  console.log(data);

  const handleActiveNicknameDelete = () => {
    if (activeNickname) {
      setActiveNickname(null);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapperOuter}>
        {/* {유저 정보 들어오면 이미지 src 추가할 예정} */}
        <Image
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20240118_50%2F1705570554088lxI8k_JPEG%2F106706388918781213_735035316.jpg&type=sc960_832"
          alt="프로필 이미지"
          width={36}
          height={36}
          className={styles.profileImage}
        />
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
      {COMMENTS.comments.map((item) => {
        return (
          <div key={item.id}>
            <Comment comment={item} onUpdate={setActiveNickname} activeNickname={activeNickname} />
          </div>
        );
      })}
    </div>
  );
}

export default Comments;
