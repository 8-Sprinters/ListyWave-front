// 아이템 생성 타입
export interface ItemCreateType {
  rank: number;
  title: string;
  comment: string | null;
  link: string | null;
  imageUrl: FileList | '';
}

// 리스트 생성 타입
export interface ListCreateType {
  ownerId: number;
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
  ownerId: number;
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

export interface CollaboratorType {
  id?: number;
  userId?: number;
  userProfileImageUrl: string;
}

export interface ListItemsType {
  id: number;
  rank: number;
  title: string;
  comment: string;
  link: string;
  imageUrl: string;
}

export interface ListDetailType {
  category: string;
  labels: LabelType[];
  title: string;
  description: string;
  createdDate: Date;
  lastUpdatedDated: Date;
  ownerId: number;
  ownerProfileImageUrl: string;
  Collaborators: CollaboratorType[];
  items: ListItemsType[];
  isCollected: boolean;
  isPublic: boolean;
  backgroundColor: string;
  collectCount: number;
  viewCount: number;
}
// 리스트 전체 조회 타입
export interface AllListType {
  cursorId: number;
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

export interface ItemType {
  id: number;
  ranking: number;
  title: string;
  comment?: string;
  link?: string;
  imageUrl?: string;
}
