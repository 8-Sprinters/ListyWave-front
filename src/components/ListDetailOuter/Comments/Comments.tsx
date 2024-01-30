import { MOCKDATA_COMMENTS } from '../mockdata';
import * as styles from './Comments.css';
import Comment from './Comment';

const COMMENTS = MOCKDATA_COMMENTS[1];

function Comments() {
  return (
    <div className={styles.wrapper}>
      <form className={styles.formWrapper}>
        <input className={styles.formInput}></input>
        <button className={styles.formButton}>게시</button>
      </form>
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
