/**
 TODO
 - [ ] 타입 공통파일로 분리
 - [ ] 이에 따른 타입 재점검
 */

// 공통 타입

export interface ListType {
  listId: number;
  category: string;
  title: string;
  ownerId: number;
  ownerNickname: string;
  ownerProfileImageUrl?: string; // mock 데이터 기준 optional
  createdDate?: string; // mock 데이터 기준 optional
  itemsId: number;
  isPublic: boolean;
}
