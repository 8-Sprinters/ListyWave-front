'use client';

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
import toastMessage, { MAX_FOLLOWING } from '@/lib/constants/toastMessage';
import useBooleanOutput from '@/hooks/useBooleanOutput';
import Modal from '@/components/Modal/Modal';
import LoginModal from '@/components/login/LoginModal';
import { useLanguage } from '@/store/useLanguage';
import { userLocale } from '@/app/user/locale';

interface FollowButtonProps {
  userId: number;
  isFollowed: boolean;
}

export default function FollowButton({ isFollowed, userId }: FollowButtonProps) {
  const { language } = useLanguage();

  const queryClient = useQueryClient();
  const { user: userMe } = useUser();
  const { isOn, handleSetOff, handleSetOn } = useBooleanOutput();

  const { data: userMeData } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne, userMe.id],
    queryFn: () => getUserOne(userMe.id as number),
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
        handleSetOn();
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
    onError: (error: AxiosError) => {
      if (error.response?.status === 401) {
        handleSetOn();
      }
    },
  });

  const handleFollowUser = (isFollowed: boolean) => () => {
    if (isFollowed) {
      deleteFollowingUser.mutate();
    } else {
      if (userMeData && userMeData?.followingCount >= MAX_FOLLOWING) {
        toasting({ type: 'warning', txt: toastMessage[language].limitFollow });
        return;
      }
      followUser.mutate();
    }
  };

  return (
    <>
      <button
        className={`${isFollowed ? styles.variant.gray : styles.variant.primary}`}
        onClick={handleFollowUser(isFollowed)}
      >
        {isFollowed ? userLocale[language].cancelFollow : userLocale[language].follow}
      </button>
      {isOn && (
        <Modal handleModalClose={handleSetOff} size="large">
          <LoginModal id="followLoginBtn" />
        </Modal>
      )}
    </>
  );
}
