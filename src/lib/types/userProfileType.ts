// 전체 유저 조회 관련
export interface UserProfilesType {
  userInfos: UserProfileType[];
}

/**
 * @todo 백엔드에서 CollaboratorType userId -> id로 받은 다음에 userId 삭제
 */

export interface UserProfileType {
  id: number;
  profileImageUrl: string;
  nickname: string;
}

export interface SearchUserType {
  users: UserProfileType[];
  totalCount: number;
  hasNext: boolean;
}

// 유저 타입
export interface UserType {
  id: number;
  nickname: string;
  description?: string;
  profileImageUrl?: string /**TODO: 옵셔널 없애기 */;
  backgroundImageUrl?: string;
  followerCount: number;
  followingCount: number;
  isFollowed: boolean;
  isOwner: boolean;
}

//프로필수정 인풋 타입
export interface UserProfileEditType
  extends Pick<UserType, 'nickname' | 'description' | 'profileImageUrl' | 'backgroundImageUrl'> {
  newBackgroundFileList: FileList | null;
  newProfileFileList: FileList | null;
}

interface DefaultImageType {
  name: string;
  imageUrl: string;
}
export type DefaultImagesType = DefaultImageType[];
