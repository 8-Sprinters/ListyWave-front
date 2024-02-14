import Header from '../_components/Header';
import UserList from '../_components/UserList';
import { mockFollowers } from '../_components/mockData';

export default function FollowingPage() {
  return (
    <div>
      <Header title="팔로잉" />
      <UserList type="following" list={mockFollowers} />
    </div>
  );
}
