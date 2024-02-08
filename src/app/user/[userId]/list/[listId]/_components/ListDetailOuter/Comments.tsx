'use client';
import { ChangeEvent, useState } from 'react';
import { useParams } from 'next/navigation';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import Comment from './Comment';
import { createComment } from '@/app/_api/comment/createComment';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import * as styles from './Comments.css';
import { getComments } from '@/app/_api/comment/getComments';
import CancelButton from '/public/icons/cancel_button.svg';
import { CommentType } from '../../mockData/mockdataType';

function Comments() {
  const [activeNickname, setActiveNickname] = useState<string | null | undefined>(null);
  const [commentId, setCommentId] = useState<null | number>(null);
  const [comment, setComment] = useState<string>('');
  const params = useParams<{ listId: string }>();
  const queryClient = useQueryClient();

  console.log(comment);

  const { data: commentsData, isPending } = useQuery({
    queryKey: [QUERY_KEYS.getComments],
    queryFn: () => getComments(params?.listId),
    staleTime: 60 * 1000,
    enabled: !!params?.listId,
  });

  console.log(commentsData);

  const handleActiveNicknameDelete = () => {
    if (activeNickname) {
      setActiveNickname(null);
      setCommentId(null);
    }
  };

  //답글 생성중인 댓글에 대한 id를 받아오는 함수
  const handleActiveCommentId = (id: number) => {
    setCommentId(id);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const createCommentMutation = useMutation({
    mutationFn: () => createComment(params?.listId, comment),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getComments] });
    },
    onSettled: () => {
      console.log('댓글을 성공적으로 업로드했습니다.');
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createCommentMutation.mutate();
  };

  //스켈레톤 전 임시 ui
  if (isPending) {
    return <div>로딩중입니다..</div>;
  }

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
      <div className={styles.totalCount}>{`${commentsData?.totalCount}개의 댓글`}</div>
      {commentsData?.comments?.map((item: CommentType) => {
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
