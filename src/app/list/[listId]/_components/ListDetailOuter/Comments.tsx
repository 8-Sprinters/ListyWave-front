'use client';
import { useParams } from 'next/navigation';
import { ChangeEvent, useEffect, useMemo, useState, useRef } from 'react';
import { useMutation, useQueryClient, useInfiniteQuery, useQuery } from '@tanstack/react-query';

import Comment from './Comment';
import CommentsSkeleton from './CommentsSkeleton';
import createComment from '@/app/_api/comment/createComment';
import createReply from '@/app/_api/comment/createReply';
import editComment from '@/app/_api/comment/EditComment';
import editReply from '@/app/_api/comment/EditReply';
import getComments from '@/app/_api/comment/getComments';
import getUserOne from '@/app/_api/user/getUserOne';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { CommentType } from '@/lib/types/commentType';
import { UserType } from '@/lib/types/userProfileType';
import { useUser } from '@/store/useUser';
import { useReplyId, useCommentId, useCommentIdStore, useIsEditing, useCommentStatus } from '@/store/useComment';
import Modal from '@/components/Modal/Modal';
import CommentForm from './CommentForm';
import LoginModal from '@/components/login/LoginModal';
import useBooleanOutput from '@/hooks/useBooleanOutput';

import * as styles from './Comments.css';
import { useLanguage } from '@/store/useLanguage';
import { commentLocale } from '@/app/list/[listId]/locale';

function Comments() {
  const { language } = useLanguage();

  const [activeNickname, setActiveNickname] = useState<string | null | undefined>(null);
  const [comment, setComment] = useState<string>('');
  const params = useParams<{ listId: string }>();
  const [isPending, setIsPending] = useState(false);
  const queryClient = useQueryClient();
  const { addCommentId } = useCommentIdStore();
  const { isOn, handleSetOff } = useBooleanOutput();
  const { replyId, deleteReplyId } = useReplyId();
  const { commentId, setCommentId, deleteCommentId } = useCommentId();
  const { setIsEditing, setIsNotEditing, isEditing } = useIsEditing();
  const { status, resetStatus } = useCommentStatus();
  const bottomRef = useRef<HTMLDivElement>(null);

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

  const scrollToRef = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  //작성중이던 답글의 원댓글에 관련된 정보를 리셋하는 함수
  const handleReplyInformationDelete = () => {
    if (activeNickname) {
      setActiveNickname(null);
      deleteCommentId();
    }
  };

  //답글 생성중인 댓글에 대한 id를 받아오는 함수
  const handleSetCommentId = (id?: number) => {
    if (id) {
      setCommentId(id);
    }
  };

  const handleSetComment = (comment: string) => {
    setComment(comment);
  };

  //댓글 폼 사용(추후 리액트 훅폼으로 수정해 볼 예정)
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  //댓글 수정 버튼 클릭시, 댓글 수정을 위한 폼 셋팅
  const handleEditComment = (comment?: string) => {
    if (comment) {
      setIsEditing();
      setComment(comment);
    }
  };

  const handleCancelEdit = () => {
    setIsNotEditing();
    setComment('');
    deleteCommentId();
    deleteReplyId();
    resetStatus();
  };

  //댓글 생성 리액트 쿼리 함수
  const createCommentMutation = useMutation({
    mutationFn: () => createComment({ listId: Number(params?.listId), comment: comment }),
    onMutate: () => {
      setIsPending(true);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getComments] });
      scrollToRef();
    },
    onSettled: () => {
      setComment('');
      setIsPending(false);
    },
  });

  //답글 생성 리액트 쿼리 함수
  const createReplyMutation = useMutation({
    mutationFn: () => createReply({ listId: Number(params?.listId), commentId: commentId, data: comment }),
    onMutate: () => {
      setIsPending(true);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getComments] });
      addCommentId(commentId as number);
    },
    onSettled: () => {
      setComment('');
      deleteCommentId();
      setActiveNickname(null);
      setIsPending(false);
      resetStatus();
    },
  });

  //댓글 수정 리액트 쿼리 함수
  const editCommentMutation = useMutation({
    mutationFn: () => editComment(Number(params?.listId) as number, commentId as number, comment),
    onMutate: () => {
      setIsPending(true);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getComments] });
    },
    onSettled: () => {
      setComment('');
      deleteCommentId();
      setIsNotEditing();
      resetStatus();
      setIsPending(false);
    },
  });

  //답글 수정 리액트 쿼리 함수
  const editReplyMutation = useMutation({
    mutationFn: () => editReply(Number(params?.listId) as number, commentId as number, replyId as number, comment),
    onMutate: () => {
      setIsPending(true);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getComments] });
      addCommentId(commentId as number);
      scrollToRef();
    },
    onSettled: () => {
      setComment('');
      deleteCommentId();
      deleteReplyId();
      setIsNotEditing();
      setIsPending(false);
      resetStatus();
    },
  });

  //댓글/답글 폼 submit 함수
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!comment.trim()) {
      return null;
    }
    if (comment.trim()) {
      if (status === 'createReply' && commentId && activeNickname) {
        createReplyMutation.mutate();
        return;
      }
      if (status === 'edit') {
        if (replyId) {
          editReplyMutation.mutate();
          return;
        }
        editCommentMutation.mutate();
        return;
      }
      createCommentMutation.mutate();
      return;
    }
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

  useEffect(() => {
    // 페이지가 로드될 때마다 실행됩니다.
    const handleRouteChange = () => {
      // URL에서 해시를 가져옵니다.
      const hash = window.location.hash;
      if (hash) {
        // 해시가 있다면 해당 요소를 찾아 스크롤을 이동합니다.
        const targetElement = document.getElementById('commentRef');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
      }
    };

    handleRouteChange();
  }, []);

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
          isEditing={isEditing}
          handleCancel={handleCancelEdit}
          isPending={isPending}
        />
        <div
          id="commentRef"
          className={styles.totalCount}
        >{`${comments?.totalCount} ${commentLocale[language].commentCount}`}</div>
        {comments?.commentsList?.map((item: CommentType) => {
          return (
            <div key={item.id} className={styles.commentWrapper}>
              {isFetching ? (
                <CommentsSkeleton />
              ) : (
                <Comment
                  comment={item}
                  setActiveNickname={setActiveNickname}
                  activeNickname={activeNickname}
                  handleSetCommentId={handleSetCommentId}
                  handleSetComment={handleSetComment}
                  listId={Number(params?.listId)}
                  commentId={item.id}
                  currentUserInfo={userInformation}
                  handleEdit={handleEditComment}
                />
              )}
              <div ref={bottomRef}></div>
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
