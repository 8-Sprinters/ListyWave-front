// 전체 유저 조회 관련
export interface UserProfilesType {
  userInfos: UserProfileType[];
}

export interface UserProfileType {
  id: number;
  profileImageUrl: string;
  nickname: string;
}
