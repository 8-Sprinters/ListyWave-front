// 리스트 데이터

import { ITEMS_01, ITEMS_02, ITEMS_03, ITEMS_04, ITEMS_05 } from './items';

export const LISTS_ME = [
  {
    listId: 1000,
    category: '장소', // 코드
    title: '내 동네 미사2동 맛집은 글자수가 30자일까요 top3',
    ownerId: 100, // userId
    ownerNickname: '파도타기',
    ownerProfileImageUrl: '',
    createdDate: '',
    backgroundColor: '#B7EEFF',
    items: ITEMS_01.data,
    isPublic: true,
  },
  {
    listId: 1001,
    category: '장소', // 코드
    title: 'What is essential is invisible to the eye.',
    ownerId: 100, // userId
    ownerNickname: '파도타기',
    ownerProfileImageUrl: '',
    createdDate: '',
    backgroundColor: '#FFF6A5',
    items: ITEMS_02.data,
    isPublic: false,
  },
  {
    listId: 1002,
    category: '도서', // 코드
    title: '내 기준 지루하지 않은 소설 TOP10',
    ownerId: 100, // userId
    ownerNickname: '파도타기',
    ownerProfileImageUrl: '',
    createdDate: '',
    backgroundColor: '#D0FF89B2',
    items: ITEMS_03.data,
    isPublic: true,
  },
  {
    listId: 1003,
    category: '장소', // 코드
    title: '자주 가는 카페(순위가 변경 될 수도 있음!!)',
    ownerId: 100, // userId
    ownerNickname: '파도타기',
    ownerProfileImageUrl: '',
    createdDate: '',
    backgroundColor: '#FFDCB2',
    items: ITEMS_04.data,
    isPublic: true,
  },
  {
    listId: 1004,
    category: '동식물', // 코드
    title: '좋아하는 꽃',
    ownerId: 100, // userId
    ownerNickname: '파도타기',
    ownerProfileImageUrl: '',
    createdDate: '',
    backgroundColor: '#E6C6FF',
    items: ITEMS_05.data,
    isPublic: false,
  },
];
