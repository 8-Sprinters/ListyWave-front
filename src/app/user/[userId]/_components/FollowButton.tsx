'use client';

import { useRouter } from 'next/navigation';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import * as styles from './FollowButton.css';

import createFollowUser from '@/app/_api/follow/createFollowUser';
import deleteFollowUser from '@/app/_api/follow/deleteFollowUser';
import getUserOne from '@/app/_api/user/getUserOne';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { UserType } from '@/lib/types/userProfileType';
import { useUser } from '@/store/useUser';
// import toasting from '@/lib/utils/toasting'; // 나중에 사용얘정 토스트

interface FollowButtonProps {
  userId: number;
  isFollowed: boolean;
}

const MAX_FOLLOWING = 1000;

export default function FollowButton({ isFollowed, userId }: FollowButtonProps) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { user: userMe } = useUser();

  const { data: userMeData } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne, userMe.id],
    queryFn: () => getUserOne(userMe.id),
  });

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
    if (userMeData && userMeData?.followingCount >= MAX_FOLLOWING) {
      // TODO 토스트 메세지 적용이 안돼서 우선 주석처리 해둠
      // toasting({ type: 'warning', txt: '최대 1000명까지 팔로우할 수 있어요.' });
      return;
    }

    if (isFollowed) {
      deleteFollowingUser.mutate();
    } else {
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
