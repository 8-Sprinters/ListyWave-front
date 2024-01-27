// 리스트 데이터

import { ITEMS_01, ITEMS_02, ITEMS_03, ITEMS_04 } from './items';

export const LISTS_ME = [
  {
    listId: 1000,
    category: '장소', // 코드
    title: '내 동네 행복동 맛집 TOP3',
    ownerId: 100, // userId
    ownerNickname: '파도타기',
    ownerProfileImageUrl: '',
    createdDate: '',
    items: ITEMS_01.data,
    isPublic: true,
  },
  {
    listId: 1001,
    category: '장소', // 코드
    title: '자주 가는 카페',
    ownerId: 100, // userId
    ownerNickname: '파도타기',
    ownerProfileImageUrl: '',
    createdDate: '',
    items: ITEMS_02.data,
    isPublic: false,
  },
  {
    listId: 1002,
    category: '도서', // 코드
    title: '내 기준 지루하지 않은 소설',
    ownerId: 100, // userId
    ownerNickname: '파도타기',
    ownerProfileImageUrl: '',
    createdDate: '',
    items: ITEMS_03.data,
    isPublic: true,
  },
  {
    listId: 1003,
    category: '장소', // 코드
    title: '자주 가는 카페',
    ownerId: 100, // userId
    ownerNickname: '파도타기',
    ownerProfileImageUrl: '',
    createdDate: '',
    items: ITEMS_04.data,
    isPublic: true,
  },
];
