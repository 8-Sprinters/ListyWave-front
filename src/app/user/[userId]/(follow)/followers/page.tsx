import Header from '../_components/Header';
import UserList from '../_components/UserList';
import { mockFollowers } from '../_components/mockData';

export default function FollowersPage() {
  return (
    <div>
      <Header title="팔로워" />
      <UserList type="follower" list={mockFollowers} />
    </div>
  );
}
