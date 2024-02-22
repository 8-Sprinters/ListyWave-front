'use client';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import Header from '../_components/Header';
import UserList from '../_components/UserList';

import getFollowingList from '@/app/_api/follow/getFollowingList';
import { FollowingListType } from '@/lib/types/followType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

function FollowingPage() {
  const param = useParams<{ userId: string }>();

  const { data: followingList } = useQuery<FollowingListType>({
    queryKey: [QUERY_KEYS.getFollowingList],
    queryFn: () => getFollowingList(Number(param?.userId)),
  });

  return (
    <div>
      <Header title="팔로잉" />
      <UserList type="following" list={followingList?.followings || []} />
    </div>
  );
}

export default FollowingPage;
