'use client';

/**
 TODO
 - [ ] 무한스크롤 적용
 - [ ] 피드페이지 스켈레톤 ui 적용
 */

import Link from 'next/link';
import { useState } from 'react';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
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
import { AllListType, ListType } from '@/lib/types/listType';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

interface ContentProps {
  userId: number;
  type: string;
}

export default function Content({ userId, type }: ContentProps) {
  const [selectedCategory, setSelectedCategory] = useState('entire');

  const { data: userData } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne, userId],
    queryFn: () => getUserOne(userId),
  });

  const {
    data: listsData,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery<AllListType>({
    queryKey: [QUERY_KEYS.getAllList, userId, type, selectedCategory],
    queryFn: ({ pageParam }) => {
      console.log(pageParam);
      return getAllList(userId, type, selectedCategory, pageParam);
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.cursorId : null),
  });

  // select: (listsData) => ({
  //   pages: listsData.pages,
  //   pageParams: listsData.pageParams,
  // }),

  console.log(hasNextPage);

  const ref = useIntersectionObserver(() => {
    if (listsData?.pages[0].hasNext) {
      fetchNextPage();
    }
  });

  console.log(listsData); // 삭제 예정

  const handleFetchListsOnCategory = (category: string) => {
    setSelectedCategory(category);
  };

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
      <Categories handleFetchListsOnCategory={handleFetchListsOnCategory} selectedCategory={selectedCategory} />
      <div className={styles.cards}>
        {listsData?.pages.map((page: AllListType, pageIndex) => (
          <div key={pageIndex}>
            {page.feedLists.map((list: ListType) => (
              <MasonryGrid gap={16} defaultDirection={'end'} align={'start'} key={list.id}>
                <Card key={list.id} list={list} isOwner={!!userData?.isOwner} />
              </MasonryGrid>
            ))}
          </div>
        ))}
      </div>
      <div style={{ height: '1px' }} ref={ref}>
        여기
      </div>
    </div>
  );
}
