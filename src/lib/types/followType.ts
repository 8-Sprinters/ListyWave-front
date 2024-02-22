import { UserProfileType } from './userProfileType';

export interface FollowingListType {
  followings: UserProfileType[];
}

export interface FollowerListType {
  followers: UserProfileType[];
  totalCount: number;
  hasNext: boolean;
  cursorId: number;
}
