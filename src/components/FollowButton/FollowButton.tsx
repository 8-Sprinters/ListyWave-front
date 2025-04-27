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
import useBooleanOutput from '@/hooks/useBooleanOutput';
import Modal from '@/components/Modal/Modal';
import LoginModal from '@/components/login/LoginModal';
import { useLanguage } from '@/store/useLanguage';
import { commonLocale } from '@/components/locale';

import * as styles from './FollowButton.css';

interface FollowButtonProps {
  isFollowed: boolean;
  onClick?: () => void;
  userId: number;
}

function FollowButton({ isFollowed, onClick, userId }: FollowButtonProps) {
  const queryClient = useQueryClient();
  const { language } = useLanguage();
  const { user: userMe } = useUser();
  const { isOn, handleSetOff, handleSetOn } = useBooleanOutput();

  const { data: userMeData } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne, userMe.id],
    queryFn: () => getUserOne(userMe.id as number),
    enabled: !!userMe.id,
  });

  const followUserMutation = useMutation({
    mutationKey: [isFollowed ? QUERY_KEYS.deleteFollow : QUERY_KEYS.follow, userId],
    mutationFn: isFollowed ? () => deleteFollowUser(userId) : () => createFollowUser(userId),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: [QUERY_KEYS.userOne, userId] });
      const previousFollower: UserType | undefined = queryClient.getQueryData([QUERY_KEYS.userOne, userId]);

      if (!previousFollower) return;

      return { previousFollower };
    },
    onError: (error: AxiosError, userId: number, context) => {
      if (error.response?.status === 401) {
        handleSetOn();
      }
      queryClient.setQueryData([QUERY_KEYS.userOne, userId], context?.previousFollower);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.userOne, userId],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.getListDetail],
      });
    },
  });

  const handleFollowUser = (isFollowed: boolean) => () => {
    if (!isFollowed) {
      if (userMeData && userMeData?.followingCount >= MAX_FOLLOWING) {
        toasting({ type: 'warning', txt: toastMessage[language].limitFollow });
        return;
      }
    }
    followUserMutation.mutate(userId);
    if (onClick) onClick();
  };

  return (
    <>
      <button
        className={`${styles.followButtonDefault} ${isFollowed === true && styles.followButtonFollowing}`}
        onClick={handleFollowUser(isFollowed)}
        disabled={followUserMutation.isPending}
      >
        <span>{isFollowed ? commonLocale[language].following : commonLocale[language].follow}</span>
      </button>
      {isOn && (
        <Modal handleModalClose={handleSetOff} size="large">
          <LoginModal id="exploreFollowLoginBtn" />
        </Modal>
      )}
    </>
  );
}

export default FollowButton;
