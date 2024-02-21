'use client';
import { useParams } from 'next/navigation';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useMutation, useQueryClient, useInfiniteQuery, useQuery } from '@tanstack/react-query';

import Comment from './Comment';
import CommentsSkeleton from './CommentsSkeleton';
import createComment from '@/app/_api/comment/createComment';
import createReply from '@/app/_api/comment/createReply';
import getComments from '@/app/_api/comment/getComments';
import getUserOne from '@/app/_api/user/getUserOne';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { CommentType } from '@/lib/types/commentType';
import { UserType } from '@/lib/types/userProfileType';
import { useUser } from '@/store/useUser';
import useCommentIdStore from '@/store/useCommentIdStore';
import Modal from '@/components/Modal/Modal';
import CommentForm from './CommentForm';
import LoginModal from '@/components/login/LoginModal';
import useBooleanOutput from '@/hooks/useBooleanOutput';

import * as styles from './Comments.css';

function Comments() {
  const [activeNickname, setActiveNickname] = useState<string | null | undefined>(null);
  const [commentId, setCommentId] = useState<null | number>(null);
  const [comment, setComment] = useState<string>('');
  const params = useParams<{ listId: string }>();
  const queryClient = useQueryClient();
  const { addCommentId } = useCommentIdStore();
  const { isOn, handleSetOff, handleSetOn } = useBooleanOutput();

  //zustand로 관리하는 user정보 불러오기
  const { user } = useUser();
  const userId = user.id;

  //user정보 불러오는 리액트 쿼리 함수
  const { data: userInformation } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne, userId],
    queryFn: () => getUserOne(userId as number),
    enabled: !!userId,
  });

  //댓글 무한스크롤 리액트 쿼리 함수
  const {
    data: commentsData,
    hasNextPage,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.getComments, params?.listId],
    queryFn: ({ pageParam: cursorId }) => {
      return getComments({ listId: Number(params?.listId), cursorId: cursorId });
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.cursorId : null),
  });

  //댓글 주요 정보 변수화
  const comments = useMemo(() => {
    const totalCount = commentsData ? commentsData.pages[commentsData.pages.length - 1].totalCount : 0;
    const commentsList = commentsData ? commentsData.pages.flatMap(({ comments }) => comments) : [];
    return { commentsList, totalCount };
  }, [commentsData]);

  //옵저버 훅 사용
  const ref = useIntersectionObserver(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  });

  //작성중이던 답글의 원댓글에 관련된 정보를 리셋하는 함수
  const handleReplyInformationDelete = () => {
    if (activeNickname) {
      setActiveNickname(null);
      setCommentId(null);
    }
  };

  //답글 생성중인 댓글에 대한 id를 받아오는 함수
  const handleSetCommentId = (id?: number) => {
    if (id) {
      setCommentId(id);
    }
  };

  //댓글 폼 사용(추후 리액트 훅폼으로 수정해 볼 예정)
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  //댓글 생성 리액트 쿼리 함수
  const createCommentMutation = useMutation({
    mutationFn: () => createComment({ listId: Number(params?.listId), comment: comment }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getComments] });
    },
    onSettled: () => {
      setComment('');
    },
  });

  //답글 생성 리액트 쿼리 함수
  const createReplyMutation = useMutation({
    mutationFn: () => createReply({ listId: Number(params?.listId), commentId: commentId, data: comment }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getComments] });
      addCommentId(commentId as number);
    },
    onSettled: () => {
      setComment('');
      setCommentId(null);
      setActiveNickname(null);
    },
  });

  //댓글/답글 폼 submit 함수
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userId) {
      handleSetOn();
      return;
    }
    if (commentId && activeNickname) {
      createReplyMutation.mutate();
      return;
    }
    createCommentMutation.mutate();
  };

  //무한 스크롤시 필요한 쿼리 리셋함수
  useEffect(() => {
    return () => {
      queryClient.removeQueries({
        queryKey: [QUERY_KEYS.getComments],
        exact: true,
      });
    };
  }, [queryClient]);

  return (
    <>
      {isOn && (
        <Modal handleModalClose={handleSetOff} size="large">
          <LoginModal />
        </Modal>
      )}
      <div className={styles.wrapper}>
        <CommentForm
          comment={comment}
          handleChange={handleInputChange}
          activeNickname={activeNickname}
          handleUpdate={handleReplyInformationDelete}
          handleSubmit={handleSubmit}
          imageSrc={userInformation?.profileImageUrl}
        />
        <div className={styles.totalCount}>{`${comments?.totalCount}개의 댓글`}</div>
        {comments?.commentsList?.map((item: CommentType) => {
          return (
            <div key={item.id} className={styles.commentWrapper}>
              {isFetching ? (
                <CommentsSkeleton />
              ) : (
                <Comment
                  comment={item}
                  onUpdate={setActiveNickname}
                  activeNickname={activeNickname}
                  handleSetCommentId={handleSetCommentId}
                  listId={Number(params?.listId)}
                  commentId={item.id}
                  currentUserInfo={userInformation}
                />
              )}
            </div>
          );
        })}
        {/* {옵저버를 위한 요소} */}
        <div ref={ref}></div>
      </div>
    </>
  );
}

export default Comments;
