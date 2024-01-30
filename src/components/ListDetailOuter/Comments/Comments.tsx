'use client';

import { MOCKDATA_COMMENTS } from '../mockdata';
import * as styles from './Comments.css';
import timeDiff from '@/lib/utils/timeDiff';
import Replies from '../Replies/Replies';

const COMMENTS = MOCKDATA_COMMENTS[0];
function Comments() {
  return (
    <div className={styles.Wrapper}>
      <form>
        <div>
          <input></input>
          <button>등록</button>
        </div>
      </form>
      <div className={styles.TotalCount}>{`${COMMENTS.totalCount}개의 댓글`}</div>
      {COMMENTS.comments.map((item, idx) => {
        return (
          <>
            <div className={styles.CommentOuterWrapper}>
              <div className={styles.CommentWrapper}>
                <div className={styles.ProfileImage}></div>
                <div className={styles.CommentContainer}>
                  <div className={styles.CommentInformationWrapper}>
                    <span className={styles.CommentWriter}>{item.userName}</span>
                    <span className={styles.CommentCreatedTime}>{timeDiff(item.createdDate)}</span>
                  </div>
                  <div className={styles.CommentContent}>{item.content}</div>
                </div>
              </div>
              <button>|</button>
            </div>
            <Replies replies={item?.replies} />
          </>
        );
      })}
    </div>
  );
}

export default Comments;
