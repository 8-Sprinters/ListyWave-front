export interface UserType {
  id: number;
  nickname: string;
  description?: string;
  profileImageUrl?: string;
  backgroundImageUrl?: string;
  followerCount: number;
  followingCount: number;
  isFirst: boolean;
}
