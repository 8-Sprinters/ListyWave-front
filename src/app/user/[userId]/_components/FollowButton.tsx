'use client';

/**
 TODO
 - [ ] 상태(팔로우, 언팔로우)에 따른 팔로우 버튼 UI
 - [ ] 조건(비회원, 회원)에 따른 팔로우 버튼 동작(api 연동)
 - [ ] 최대 1,000명까지 팔로우 제한 - 토스트 에러
 */

import { useMutation, useQueryClient } from '@tanstack/react-query';

import * as styles from './FollowButton.css';

import createFollowUser from '@/app/_api/follow/createFollowUser';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

interface FollowButtonProps {
  userId: number;
  isFollowed: boolean;
}

export default function FollowButton({ isFollowed, userId }: FollowButtonProps) {
  const queryClient = useQueryClient();

  const followUser = useMutation({
    mutationKey: [QUERY_KEYS.follow, userId],
    mutationFn: () => createFollowUser(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.userOne, userId],
      });
    },
  });

  const handleFollowUser = () => {
    followUser.mutate();
    console.log(followUser.data);
  };

  return (
    <button className={styles.button} onClick={handleFollowUser}>
      {isFollowed ? '팔로우 취소' : '팔로우'}
    </button>
  );
}
