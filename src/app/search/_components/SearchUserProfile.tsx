import Image from 'next/image';
import { useRouter } from 'next/navigation';

import * as styles from './SearchUserProfile.css';
import UserProfileImage from '@/components/UserProfileImage/UserProfileImage';
import FollowButton from '@/app/user/[userId]/_components/FollowButton';
import { useUser } from '@/store/useUser';
import createFollowUser from '@/app/_api/follow/createFollowUser';
import deleteFollowUser from '@/app/_api/follow/deleteFollowUser';
import { useMutation } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

interface UserListProps {
  id: number;
  profileImageUrl: string;
  nickname: string;
}

// TODO: getSearchUserResult에서 following여부를 같이 내려주게되면 isFollowing프롭 삭제
function SearchUserProfile({ user, isFollowed }: { user: UserListProps; isFollowed: boolean }) {
  // const isFollowing = true; // TODO: API 호출로 isFollowing 값 받아오기
  const router = useRouter();
  const handleProfileClick = () => {
    router.push(`/user/${user.id}/mylist`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileImageWrapper} onClick={handleProfileClick}>
        <UserProfileImage src={user.profileImageUrl} size={122} />
      </div>
      <div className={styles.nicknameText} onClick={handleProfileClick}>
        {user.nickname}
      </div>
      {/*{isFollowing ? (*/}
      {/*  <div className={styles.followingButton} onClick={unfollow}>*/}
      {/*    팔로잉*/}
      {/*  </div>*/}
      {/*) : (*/}
      {/*  <div className={styles.followButton} onClick={follow}>*/}
      {/*    팔로우*/}
      {/*  </div>*/}
      {/*)}*/}
      {/*TODO: getSearchUserResult에서 following여부를 같이 내려주게되면 isFollowed 값 변경.*/}
      <FollowButton userId={user.id} isFollowed={isFollowed} />
    </div>
  );
}

export default SearchUserProfile;
