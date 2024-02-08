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
import BlueLineIcon from '/public/icons/blue_line.svg';
import BlueLineLongIcon from '/public/icons/blue_line_long.svg';

import Card from './Card';
import Categories from './Categories';

import { getUserOne } from '@/app/_api/user/getUserOne';
import { getAllList } from '@/app/_api/list/getAllList';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { UserType } from '@/lib/types/userProfileType';
import { ListType } from '@/lib/types/listType';

interface ContentProps {
  userId: number;
  type: string;
}

export default function Content({ userId, type }: ContentProps) {
  const [listGrid, setListGrid] = useState<ListType[]>([]);

  const { data: userData } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne, userId],
    queryFn: () => getUserOne(userId),
  });

  /** 무한스크롤시 리액트 쿼리로 불러오는게 더 나을지에 대한 고민 때문에 주석처리 해 놓은 코드 */
  // const { data: listData, refetch } = useQuery<AllListType>({
  //   queryKey: [QUERY_KEYS.getAllList],
  //   queryFn: () => getAllList(userId, type),
  // });

  const handleFetchLists = useCallback(
    async (category?: string) => {
      const data = await getAllList(userId, type, category);
      setListGrid(data.feedLists);
    },
    [userId, type]
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
        <Link href={`/user/${userData?.id}/mylist`} className={styles.link}>
          <button className={styles.leftButton}>마이 리스트</button>
        </Link>
        <Link href={`/user/${userData?.id}/collabolist`} className={styles.link}>
          <button className={styles.rightButton}>콜라보 리스트</button>
        </Link>
      </div>
      {type === 'my' ? (
        <BlueLineIcon className={styles.variantLine.left} />
      ) : (
        <BlueLineLongIcon className={styles.variantLine.right} />
      )}

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
