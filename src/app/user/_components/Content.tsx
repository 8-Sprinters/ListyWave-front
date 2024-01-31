'use client';

/**
 TODO
 - [x] 콜라보 리스트 눌렀을 때 
 - [x] 카테고리 눌렀을 때
 - [x] 리스트 타입을 고정할 수 있는 방법 - stateHook or searchParamsHook
 - [x] 스타일링
 - [ ] api 연동
 - [ ] 무한스크롤 적용
 - [ ] 피드페이지 스켈레톤 ui 적용
 */

import { useSearchParams } from 'next/navigation';
import { MouseEvent, useState } from 'react';
import { MasonryGrid } from '@egjs/react-grid';

import * as styles from './Content.css';

import { ListType, UserType } from '../mockData/mockDataTypes';
import { LISTS_ME } from '../mockData/lists';

import Card from './Card';
import Categories from './Categories';

interface ContentProps {
  user: UserType;
}

const DEFAULT_LIST = 'my'; // 나중에 constants 파일로 분리

export default function Content({ user }: ContentProps) {
  const [listType, setListType] = useState(DEFAULT_LIST); // or useReducer? 왜냐하면, 렌더링 필요없으므로
  const searchParams = useSearchParams();

  console.log(searchParams.get('type')); // 삭제 예정

  // userId로 피드 정보 가져오는 api 요청
  // /users/{userId}/feeds?type={}&category={}
  // default는 type=my, category=all

  const handleFetchLists = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      return;
    }

    const type = (e.target as HTMLButtonElement).id;
    console.log(type); // 삭제 예정
    setListType(type);
    // userId, type, category(전체)로 피드 정보 가져오는 api 요청
  };

  const handleFetchListsOnCategory = (kind: string) => {
    console.log(kind); // 삭제 예정
    // 현재 위치한 타입을 어떻게 파악? -> state 필요?
    console.log(listType); // 삭제 예정

    // userId, type, category로 피드 정보 가져오는 api 요청
  };

  return (
    <div className={styles.container}>
      {/* 리스트 레이아웃 느낌?? */}
      <div onClick={handleFetchLists} className={styles.options}>
        <button id="my" className={`${styles.leftButton} ${listType === 'my' ? styles.variant : ''}`}>
          마이 리스트
        </button>
        <button id="collabo" className={`${styles.rightButton} ${listType === 'collabo' ? styles.variant : ''}`}>
          콜라보 리스트
        </button>
      </div>
      <Categories onClick={handleFetchListsOnCategory} />
      <div className={styles.cards}>
        <MasonryGrid gap={16} defaultDirection={'end'} align={'start'}>
          {LISTS_ME.map((list: ListType) => (
            <Card key={list.listId} list={list} isOwner={user.isOwner} />
          ))}
        </MasonryGrid>
      </div>
    </div>
  );
}
