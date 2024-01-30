import { MOCKDATA_COMMENTS } from '../mockdata';
import * as styles from './Comments.css';
import Comment from './Comment';

const COMMENTS = MOCKDATA_COMMENTS[1];

function Comments() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <img className={styles.profileImage} />
        <form className={styles.form}>
          <input className={styles.formInput}></input>
          <button className={styles.formButton}>게시</button>
        </form>
      </div>
      <div className={styles.totalCount}>{`${COMMENTS.totalCount}개의 댓글`}</div>
      {COMMENTS.comments.map((item, idx) => {
        return (
          <div key={idx.toString()}>
            <Comment comment={item} />
          </div>
        );
      })}
    </div>
  );
}

export default Comments;
