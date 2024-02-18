'use client';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import createFollowUser from '@/app/_api/follow/createFollowUser';
import deleteFollowUser from '@/app/_api/follow/deleteFollowUser';
import getUserOne from '@/app/_api/user/getUserOne';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { UserType } from '@/lib/types/userProfileType';
import { useUser } from '@/store/useUser';
import toasting from '@/lib/utils/toasting';
import toastMessage, { MAX_FOLLOWING } from '@/lib/constants/toastMessage';
import * as styles from './UsersRecommendation.css';

interface FollowButtonProps {
  isFollowing: boolean;
  onClick: () => void;
  userId: number;
}

function FollowButton({ isFollowing, onClick, userId }: FollowButtonProps) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { user: userMe } = useUser();

  const { data: userMeData } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne, userId],
    queryFn: () => getUserOne(userId),
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
      console.log('성공적으로 팔로우 했습니다');
    },
  });

  const handleFollowUser = (isFollowing: boolean) => () => {
    if (isFollowing) {
      deleteFollowingUser.mutate();
      onClick();
    } else {
      if (userMeData && userMeData?.followingCount >= MAX_FOLLOWING) {
        toasting({ type: 'warning', txt: toastMessage.ko.limitFollow });
        return;
      }
      followUser.mutate();
      onClick();
    }
  };

  return (
    <button
      className={`${styles.followButtonDefault} ${isFollowing === true ? styles.followButtonFollowing : ''}`}
      onClick={handleFollowUser(isFollowing)}
    >
      <span>{isFollowing ? '팔로잉' : '팔로우'}</span>
    </button>
  );
}

export default FollowButton;
