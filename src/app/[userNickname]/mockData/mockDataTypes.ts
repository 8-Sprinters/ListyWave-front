/**
 TODO
 - [ ] 타입 공통파일로 분리
 - [ ] 이에 따른 타입 재점검
 */

// 공통 타입

export interface UserType {
  id: number;
  backgroundImageUrl?: string; // mock 데이터 기준 optional
  profileImageUrl?: string; // mock 데이터 기준 optional
  nickname: string;
  description: string;
  followerCount: number;
  followingCount: number;
  isFollowed: boolean;
  isOwner: boolean;
}

export interface ListType {
  listId: number;
  category: string;
  title: string;
  ownerId: number;
  ownerNickname: string;
  ownerProfileImageUrl?: string; // mock 데이터 기준 optional
  createdDate?: string; // mock 데이터 기준 optional
  backgroundColor: string;
  items: ItemType[];
  isPublic: boolean;
}

export interface ItemType {
  id: number;
  rank: number;
  title: string;
  comment?: string;
  link?: string;
  imageUrl?: string;
  // items 다른 속성 추가 될 수도 있음
}
