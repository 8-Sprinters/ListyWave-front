import { UserProfileType } from './userProfileType';

// 아이템 생성 타입
export interface ItemCreateType {
  rank: number;
  title: string;
  comment: string | null;
  link: string | null;
  imageUrl: FileList | string | '';
}

// 리스트 생성 타입
export interface ListCreateType {
  category: string;
  labels: string[];
  collaboratorIds: number[];
  title: string;
  description: string;
  isPublic: boolean;
  backgroundColor: string;
  items: ItemCreateType[];
}

// 리스트 수정 타입
export interface ListEditType {
  category: string;
  labels: string[];
  collaboratorIds: number[];
  title: string;
  description: string;
  isPublic: boolean;
  backgroundColor: string;
  items: ItemCreateType[];
}

export interface ListIdType {
  listId: number;
}

// 이미지 생성 타입
export interface ItemImageType {
  rank: number;
  extension: 'jpg' | 'jpeg' | 'png' | '';
}

export interface ItemImagesType {
  listId: number;
  extensionRanks: ItemImageType[] | [];
}

export interface PresignedUrlType {
  rank: number;
  presignedUrl: string;
}

export type PresignedUrlListType = PresignedUrlType[];

//리스트 상세조회 타입
export interface LabelType {
  id: number;
  name: string;
}

// 리스트 전체 조회 타입
export interface AllListType {
  cursorUpdatedDate: string;
  hasNext: boolean;
  feedLists: ListType[];
}

export interface ListType {
  id: number;
  title: string;
  isPublic: boolean;
  backgroundColor: string;
  listItems: Omit<ItemType, 'comment' | 'link'>[];
}

// 리스트 상세조회 타입
export interface ItemType {
  id: number;
  rank: number;
  title: string;
  comment?: string;
  link?: string;
  imageUrl?: string;
}

export interface LabelType {
  name: string;
}

export interface ListDetailType {
  id?: number;
  category: string;
  labels: LabelType[];
  title: string;
  description: string;
  createdDate: Date;
  lastUpdatedDate: Date;
  ownerId: number;
  ownerNickname: string;
  ownerProfileImageUrl: string;
  collaborators: UserProfileType[];
  items: ItemType[];
  isCollected: boolean;
  isPublic: boolean;
  backgroundColor: string;
  collectCount: number;
  viewCount: number;
}

export interface ListItemType {
  id: number;
  title: string;
  rank?: number;
  imageUrl?: string;
}

export interface SearchListType {
  id: number;
  title: string;
  items: ListItemType[];
  listItems: ListItemType[];
  isPublic: boolean;
  backgroundColor: string;
  updatedDate: Date;
  ownerId: number;
  ownerNickname: string;
  ownerProfileImageUrl: string;
  representImageUrl: string;
}

export interface SearchResultType {
  resultLists: SearchListType[];
  totalCount: number;
  cursorId: number;
  hasNext: boolean;
}

export interface CollectionType {
  id: number;
  list: CollectionListType;
}

export interface CollectionListType {
  id: number;
  backgroundColor: string;
  title: string;
  ownerId: string;
  ownerNickname: string;
  ownerProfileImageUrl: string;
  updatedDate: Date;
  listItems: ListItemType[];
}
