'use client';

import UserProfileImage from '@/components/UserProfileImage/UserProfileImage';
import { UserProfileType } from '@/lib/types/userProfileType';
import * as styles from './UserList.css';
import { useRouter } from 'next/navigation';

interface UserProps {
  user: UserProfileType;
  button?: {
    name: string;
    onClick: () => void;
  };
}

function User({ user, button }: UserProps) {
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
      <button className={styles.button} onClick={button?.onClick}>
        {button?.name}
      </button>
    </div>
  );
}

interface UserListProps {
  type: 'follower' | 'following';
  list: UserProfileType[];
}

const data = {
  follower: {
    emptyMessage: '아직은 팔로워가 없어요',
    button: {
      name: '삭제',
      onClick: () => {
        console.log('팔로워 삭제'); //삭제 예정
      },
    },
  },
  following: {
    emptyMessage: '아직 팔로우한 사람이 없어요',
    button: {
      name: '취소',
      onClick: () => {
        console.log('팔로잉 취소'); //삭제 예정
      },
    },
  },
};

function UserList({ type, list }: UserListProps) {
  return (
    <div className={styles.container}>
      {list.length === 0 ? (
        <div className={styles.emptyMessage}>{data[type].emptyMessage}</div>
      ) : (
        list.map((user) => (
          <User
            key={user.id}
            user={user}
            button={{
              name: data[type].button.name,
              onClick: data[type].button.onClick,
            }}
          />
        ))
      )}
    </div>
  );
}

export default UserList;
