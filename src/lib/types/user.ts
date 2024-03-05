import { UserProfileType } from './userProfileType';

// 로그인한 사용자 리스폰스 타입
export interface UserOnLoginType {
  id: number;
  nickname: string;
  description?: string;
  profileImageUrl?: string;
  backgroundImageUrl?: string;
  followerCount: number;
  followingCount: number;
  isFirst: boolean;
  accessToken: string;
  refreshToken: string;
}

export interface UserSearchType {
  users: UserProfileType[];
  totalCount: number;
  hasNext: boolean;
}
