'use client';

/**
 TODO
 - [ ] 무한스크롤 적용
 - [ ] 피드페이지 스켈레톤 ui 적용
 */

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { MasonryGrid } from '@egjs/react-grid';

import * as styles from './Content.css';

import Card from './Card';
import Categories from './Categories';

import { getUserOne } from '@/app/_api/user/getUserOne';
import { getAllList } from '@/app/_api/list/getAllList';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { UserType } from '@/lib/types/userProfileType';
import { ListType } from '@/lib/types/listType';

// 임시 유저 아이디(소현), 나중에 로그인 기능 완료 후 전역 상태에서 id 받아오는 로직 추가
const TEST_USER_ID = 4;
[];

export default function Content({ type }: { type: string }) {
  const [listGrid, setListGrid] = useState<ListType[]>([]);

  const { data: userData } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne],
    queryFn: () => getUserOne(TEST_USER_ID),
  });

  /** 무한스크롤시 리액트 쿼리로 불러오는게 더 나을지에 대한 고민 때문에 주석처리 해 놓은 코드 */
  // const { data: listData, refetch } = useQuery<AllListType>({
  //   queryKey: [QUERY_KEYS.getAllList],
  //   queryFn: () => getAllList(TEST_USER_ID, type),
  // });

  const handleFetchLists = useCallback(
    async (category?: string) => {
      const data = await getAllList(TEST_USER_ID, type, category);
      setListGrid(data.feedLists);
    },
    [type]
  );

  const handleFetchListsOnCategory = async (category: string) => {
    handleFetchLists(category);
  };

  useEffect(() => {
    handleFetchLists();
  }, [handleFetchLists]);

  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <Link href={`/${userData?.nickname}/mylist`} className={styles.link}>
          <button className={`${styles.leftButton} ${type === 'my' ? styles.variant : ''}`}>마이 리스트</button>
        </Link>
        <Link href={`/${userData?.nickname}/collabolist`} className={styles.link}>
          <button className={`${styles.rightButton} ${type === 'collabo' ? styles.variant : ''}`}>콜라보 리스트</button>
        </Link>
      </div>
      <Categories handleFetchListsOnCategory={handleFetchListsOnCategory} />
      <div className={styles.cards}>
        <MasonryGrid gap={16} defaultDirection={'end'} align={'start'}>
          {listGrid.map((list: ListType) => (
            <Card key={list.id} list={list} isOwner={!!userData?.isOwner} />
          ))}
        </MasonryGrid>
      </div>
    </div>
  );
}
