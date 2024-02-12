'use client';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import { useMutation, useQuery, useQueryClient, useInfiniteQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Comment from './Comment';
import { createComment } from '@/app/_api/comment/createComment';
import { createReply } from '@/app/_api/comment/createReply';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import * as styles from './Comments.css';
import { getComments } from '@/app/_api/comment/getComments';
import CancelButton from '/public/icons/cancel_button.svg';
import { CommentType } from '@/lib/types/commentType';

function Comments() {
  const [activeNickname, setActiveNickname] = useState<string | null | undefined>(null);
  const [commentId, setCommentId] = useState<null | number | undefined>(null);
  const [comment, setComment] = useState<string>('');
  const params = useParams<{ listId: string }>();
  const queryClient = useQueryClient();

  const {
    data: commentsData,
    hasNextPage,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.getComments],
    queryFn: ({ pageParam: cursorId }) => {
      return getComments(params?.listId, cursorId);
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.cursorId : null),
  });

  const comments = useMemo(() => {
    const totalCount = commentsData ? commentsData.pages[commentsData.pages.length - 1].totalCount : 0;
    const commentsList = commentsData ? commentsData.pages.flatMap(({ comments }) => comments) : [];
    return { commentsList, totalCount };
  }, [commentsData]);

  const ref = useIntersectionObserver(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  });
  console.log(commentsData);

  const handleActiveNicknameDelete = () => {
    if (activeNickname) {
      setActiveNickname(null);
      setCommentId(null);
    }
  };

  //답글 생성중인 댓글에 대한 id를 받아오는 함수
  const handleSetCommentId = (id: number | undefined) => {
    setCommentId(id);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const createCommentMutation = useMutation({
    mutationFn: () => createComment(params?.listId, comment),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getComments] });
      console.log('댓글을 성공적으로 업로드했습니다.');
    },
    onSettled: () => {
      setComment('');
      setCommentId(null);
      setActiveNickname(null);
    },
  });

  const createReplyMutation = useMutation({
    mutationFn: () => createReply({ listId: params?.listId, commentId: commentId, data: comment }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getComments] });
      console.log('답글을 성공적으로 업로드했습니다.');
    },
    onSettled: () => {
      setComment('');
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (commentId && activeNickname) {
      createReplyMutation.mutate();
      return;
    }
    createCommentMutation.mutate();
  };

  useEffect(() => {
    return () => {
      queryClient.removeQueries({
        queryKey: [QUERY_KEYS.getComments],
        exact: true,
      });
    };
  }, []);

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
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <input className={styles.formInput} value={comment} onChange={handleInputChange} />
            {comment && (
              <button type="submit" className={styles.formButton}>
                게시
              </button>
            )}
          </form>
        </div>
      </div>
      <div className={styles.totalCount}>{`${comments?.totalCount}개의 댓글`}</div>
      {comments?.commentsList?.map((item: CommentType) => {
        return (
          <div key={item.id} className={styles.commentWrapper}>
            <Comment
              comment={item}
              onUpdate={setActiveNickname}
              activeNickname={activeNickname}
              handleSetCommentId={handleSetCommentId}
              listId={params?.listId}
              commentId={commentId}
            />
          </div>
        );
      })}
      {isFetching && <div>로딩중</div>}
      <div ref={ref}></div>
    </div>
  );
}

export default Comments;
