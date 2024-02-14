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
import toasting from '@/lib/utils/toasting';
import { MAX_FOLLOWING, toastMessage } from '@/lib/constants/toastMessage';

interface FollowButtonProps {
  userId: number;
  isFollowed: boolean;
}

export default function FollowButton({ isFollowed, userId }: FollowButtonProps) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { user: userMe } = useUser();

  const { data: userMeData } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne, userMe.id],
    queryFn: () => getUserOne(userMe.id),
    enabled: !!userMe.id,
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
        toasting({ type: 'warning', txt: toastMessage.ko.requiredLogin });
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
      deleteFollowingUser.mutate();
    } else {
      if (userMeData && userMeData?.followingCount >= MAX_FOLLOWING) {
        toasting({ type: 'warning', txt: toastMessage.ko.limitFollow });
        return;
      }
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
