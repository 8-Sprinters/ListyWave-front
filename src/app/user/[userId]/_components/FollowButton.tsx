'use client';

/**
 TODO
 - [x] 상태(팔로우, 언팔로우)에 따른 팔로우 버튼 UI
 - [x] 조건(비회원, 회원)에 따른 팔로우 버튼 동작(api 연동)
 - [x] 팔로우 취소 api 연동
 - [ ] 최대 1,000명까지 팔로우 제한 - 토스트 에러
 */

import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import * as styles from './FollowButton.css';

import createFollowUser from '@/app/_api/follow/createFollowUser';
import deleteFollowUser from '@/app/_api/follow/deleteFollowUser';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

interface FollowButtonProps {
  userId: number;
  isFollowed: boolean;
}

export default function FollowButton({ isFollowed, userId }: FollowButtonProps) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const followUser = useMutation({
    mutationKey: [QUERY_KEYS.follow, userId],
    mutationFn: () => createFollowUser(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.userOne, userId],
      });
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 401) {
        // TODO 토스트 메세지 적용하기
        router.push('/login');
      }
    },
  });

  const deleteFollowingUser = useMutation({
    mutationKey: [QUERY_KEYS.deleteFollow, userId],
    mutationFn: () => deleteFollowUser(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.userOne, userId],
      });
    },
  });

  const handleFollowUser = (isFollowed: boolean) => () => {
    if (isFollowed) {
      // 이미 팔로잉 상태이므로 팔로우 취소
      deleteFollowingUser.mutate();
    } else {
      // 팔로우 하기
      followUser.mutate();
    }
  };

  return (
    <button
      className={`${isFollowed ? styles.variant.gray : styles.variant.primary}`}
      onClick={handleFollowUser(isFollowed)}
    >
      {isFollowed ? '팔로우 취소' : '팔로우'}
    </button>
  );
}
