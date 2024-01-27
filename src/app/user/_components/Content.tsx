'use client';

/**
 TODO
 - [x] 콜라보 리스트 눌렀을 때 
 - [ ] 카테고리 눌렀을 때
 - [ ] 리스트 타입을 고정할 수 있는 방법
 */

import { MouseEvent } from 'react';

import { ListType, UserType } from '../mockData/mockDataTypes';
import { LISTS_ME } from '../mockData/lists';

import Card from './Card';
import Categories from './Categories';

interface ContentProps {
  user: UserType;
}

export default function Content({ user }: ContentProps) {
  // userId로 피드 정보 가져오는 api 요청
  // /users/{userId}/feeds?type={}&category={}
  // default는 type=my, category=all

  const handleFetchLists = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      return;
    }

    const type = (e.target as HTMLButtonElement).id;
    console.log(type); // 삭제 예정

    // userId, type으로 피드 정보 가져오는 api 요청
  };

  return (
    <div>
      {/* 리스트 레이아웃 느낌?? */}
      <div onClick={handleFetchLists}>
        <button id="my">마이 리스트</button>
        <button id="collabo">콜라보 리스트</button>
      </div>
      <Categories />
      <div>
        {LISTS_ME.map((list: ListType) => (
          <ul key={list.listId}>
            <Card list={list} isOwner={user.isOwner} />
          </ul>
        ))}
      </div>
    </div>
  );
}
