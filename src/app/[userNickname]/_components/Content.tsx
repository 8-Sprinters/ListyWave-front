'use client';

/**
 TODO
 - [ ] api 연동
 - [ ] 무한스크롤 적용
 - [ ] 피드페이지 스켈레톤 ui 적용
 */

import Link from 'next/link';
import { MasonryGrid } from '@egjs/react-grid';

import * as styles from './Content.css';

import { ListType, UserType } from '../mockData/mockDataTypes'; // 삭제 예정
import { LISTS_ME } from '../mockData/lists'; // 삭제 예정

import Card from './Card';
import Categories from './Categories';

interface ContentProps {
  user: UserType;
  type: string;
}

export default function Content({ user, type }: ContentProps) {
  // 1. props로 받아온 userId, type으로 피드 정보 가져오는 api 요청

  const handleFetchListsOnCategory = (kind: string) => {
    // console.log(type, kind); // 삭제 예정
    // 2. userId, type, category로 피드 정보 가져오는 api 요청
  };

  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <Link href={`/${user.nickname}/mylist`}>
          <button className={`${styles.leftButton} ${type === 'my' ? styles.variant : ''}`}>마이 리스트</button>
        </Link>
        <Link href={`/${user.nickname}/collabolist`}>
          <button className={`${styles.rightButton} ${type === 'collabo' ? styles.variant : ''}`}>콜라보 리스트</button>
        </Link>
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
