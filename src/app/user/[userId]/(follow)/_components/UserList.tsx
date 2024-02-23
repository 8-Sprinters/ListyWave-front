'use client';

import { ReactNode } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import UserProfileImage from '@/components/UserProfileImage/UserProfileImage';
import deleteFollower from '@/app/_api/follow/deleteFollower';
import { useUser } from '@/store/useUser';
import { UserProfileType } from '@/lib/types/userProfileType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

import * as styles from './UserList.css';
import NoDataComponent from '@/components/NoData/NoDataComponent';

const BUTTON_MESSAGE = {
  ko: {
    delete: '삭제',
  },
};

const EMPTY_MESSAGE = {
  ko: {
    follower: '아직은 팔로워가 없어요',
    following: '아직 팔로우한 사람이 없어요',
  },
};

function DeleteFollowerButton({ userId }: { userId: number }) {
  const queryClient = useQueryClient();

  const deleteUser = useMutation({
    mutationKey: [QUERY_KEYS.deleteFollower, userId],
    mutationFn: () => deleteFollower(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.deleteFollower, userId],
      });
    },
  });

  return (
    <button
      className={styles.button}
      onClick={() => {
        deleteUser.mutate();
      }}
    >
      {BUTTON_MESSAGE.ko.delete}
    </button>
  );
}

interface UserProps {
  user: UserProfileType;
  button?: ReactNode;
  isOwner?: boolean;
}

function User({ user, button, isOwner }: UserProps) {
  const router = useRouter();

  return (
    <div className={styles.profileContainer}>
      <div
        className={styles.wrapper}
        onClick={() => {
          router.push(`/user/${user.id}/mylist`);
        }}
      >
        <UserProfileImage src={user.profileImageUrl} size={50} />
        {user.nickname}
      </div>
      {isOwner ? button : null}
    </div>
  );
}

interface UserListProps {
  type: 'follower' | 'following';
  list: UserProfileType[];
}

function UserList({ type, list }: UserListProps) {
  const { user: me } = useUser();
  const params = useParams<{ userId: string }>();
  const isOwner = Number(params?.userId) === me.id;

  return (
    <div className={styles.container}>
      {list.length === 0 ? (
        <NoDataComponent message={EMPTY_MESSAGE.ko[type]} />
      ) : (
        <>
          {type === 'following' && list?.map((user: UserProfileType) => <User key={user.id} user={user} />)}
          {type === 'follower' &&
            list?.map((user: UserProfileType) => (
              <User key={user.id} user={user} button={<DeleteFollowerButton userId={user.id} />} isOwner={isOwner} />
            ))}
        </>
      )}
    </div>
  );
}

export default UserList;
