// 전체 유저 조회 관련
export interface UserProfilesType {
  userInfos: UserProfileType[];
}

export interface UserProfileType {
  id: number;
  profileImageUrl: string;
  nickname: string;
}

// 유저 타입
export interface UserType {
  id: number;
  nickname: string;
  description?: string;
  profileImageUrl?: string;
  backgroundImageUrl?: string;
  followerCount: number;
  followingCount: number;
  isFollowed: boolean;
  isFirst: boolean;
}
