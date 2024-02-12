'use client';

/**
 TODO
 - [x] 상태(팔로우, 언팔로우)에 따른 팔로우 버튼 UI
 - [x] 조건(비회원, 회원)에 따른 팔로우 버튼 동작(api 연동)
 - [x] 팔로우 취소 api 연동
 - [x] 최대 1,000명까지 팔로우 제한 - 토스트 에러
 */

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

  // 내 정보 조회
  const { data: userMeData } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne, userMe.id],
    queryFn: () => getUserOne(userMe.id),
  });

  console.log(userMeData); // 삭제 예정

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
    // 만약, 내가 팔로우한 사람이 이미 최대인 경우(1천명) 팔로우 요청 할 수 없음
    if (userMeData && userMeData?.followingCount >= MAX_FOLLOWING) {
      // TODO 토스트 메세지 적용이 안되서 우선 주석처리 해둠
      // toasting({ type: 'warning', txt: '최대 1000명까지 팔로우할 수 있어요.' });
      return;
    }

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
