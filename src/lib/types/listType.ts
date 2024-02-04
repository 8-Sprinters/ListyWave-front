// 리스트 관련 타입
export interface ListIdType {
  listId: number;
}

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
