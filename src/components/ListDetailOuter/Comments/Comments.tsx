'use client';
import { useState } from 'react';

import { MOCKDATA_COMMENTS } from '../mockdata';
import * as S from './Comments.css';
import timeDiff from '@/lib/utils/timeDiff';
import Replies from '../Replies/Replies';

const COMMENTS = MOCKDATA_COMMENTS[0];
function Comments() {
  const [showReplies, setShowReplies] = useState(false);

  const handleShowReplies = () => {
    setShowReplies((prev) => !prev);
  };

  return (
    <div className={S.Wrapper}>
      <div className={S.TotalCount}>{`${COMMENTS.totalCount}개의 댓글`}</div>
      {COMMENTS.comments.map((item, idx) => {
        return (
          <>
            <div className={S.CommentOuterWrapper}>
              <div className={S.CommentWrapper}>
                <div className={S.ProfileImage}></div>
                <div className={S.CommentContainer}>
                  <div className={S.CommentInformationWrapper}>
                    <span className={S.CommentWriter}>{item.userName}</span>
                    <span className={S.CommentCreatedTime}>{timeDiff(item.createdDate)}</span>
                  </div>
                  <div className={S.CommentContent}>{item.content}</div>
                </div>
              </div>
              <button>|</button>
            </div>
            <Replies replies={item.replies} />
            {/* {item.replies?.length && !showReplies && (
              <div className={S.ShowMoreReplies} onClick={handleShowReplies}>
                {`- 답글 ${item?.replies?.length}개 더 보기`}{' '}
              </div>
            )}
            {showReplies && (
              <div>
                {item.replies?.map((reply, idx) => {
                  return (
                    <div className={S.ReplyWrapper} key={idx.toString()}>
                      <div className={S.ProfileImage}></div>
                      <div className={S.CommentContainer}>
                        <div className={S.CommentInformationWrapper}>
                          <span className={S.CommentWriter}>{reply.userNickName}</span>
                          <span className={S.CommentCreatedTime}>{timeDiff(reply.createdDate)}</span>
                        </div>
                        <div className={S.CommentContent}>{reply.content}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )} */}
          </>
        );
      })}
    </div>
  );
}

export default Comments;
