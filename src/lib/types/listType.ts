// 아이템 생성 타입
export interface ItemCreateType {
  rank: number;
  title: string;
  comment: string | null;
  link: string | null;
  image?: FileList | null;
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
  extension: 'jpg' | 'jpeg' | 'png';
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
