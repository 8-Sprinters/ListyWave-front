'use client';

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

import useBooleanOutput from '@/hooks/useBooleanOutput';
import Modal from '@/components/Modal/Modal';
import LoginModal from '@/components/login/LoginModal';

interface FollowButtonProps {
  isFollowing: boolean;
  onClick: () => void;
  userId: number;
  targetId: number;
}

function FollowButton({ isFollowing, onClick, userId, targetId }: FollowButtonProps) {
  const queryClient = useQueryClient();
  const { user: userMe } = useUser();
  const { isOn, handleSetOff, handleSetOn } = useBooleanOutput();

  const { data: userMeData } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne, userId],
    queryFn: () => getUserOne(userId),
    enabled: !!userMe.id,
    retry: 1,
  });

  const followUser = useMutation({
    mutationKey: [QUERY_KEYS.follow, userId],
    mutationFn: () => createFollowUser(targetId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.userOne, userId],
      });
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 401) {
        toasting({ type: 'warning', txt: toastMessage.ko.requiredLogin });
        handleSetOn();
      }
    },
  });

  const deleteFollowingUser = useMutation({
    mutationKey: [QUERY_KEYS.deleteFollow, userId],
    mutationFn: () => deleteFollowUser(targetId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.userOne, userId],
      });
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 401) {
        toasting({ type: 'warning', txt: toastMessage.ko.requiredLogin });
        handleSetOn();
      }
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

  if (!userMe) {
    return null;
  }

  return (
    <>
      <button
        className={`${styles.followButtonDefault} ${isFollowing === true ? styles.followButtonFollowing : ''}`}
        onClick={handleFollowUser(isFollowing)}
      >
        <span>{isFollowing ? '팔로잉' : '팔로우'}</span>
      </button>
      {isOn && (
        <Modal handleModalClose={handleSetOff} size="large">
          <LoginModal />
        </Modal>
      )}
    </>
  );
}

export default FollowButton;
