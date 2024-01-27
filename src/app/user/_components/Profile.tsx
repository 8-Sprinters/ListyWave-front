import { UserType } from '../mockData/mockDataTypes';
import Action from './Action';

interface ProfileProps {
  user: UserType;
}

export default function Profile({ user }: ProfileProps) {
  return (
    <div>
      <img src={user.profileImageUrl} alt="아바타" />
      <div>
        <h2>{user.nickname}</h2>
        <p>{user.description}</p>
        <div>
          <span>{user.followingCount} 팔로잉</span>
          <span>{user.followerCount} 팔로워</span>
          <Action isFollowed={user.isFollowed} />
        </div>
      </div>
    </div>
  );
}
