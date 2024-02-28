'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useInfiniteQuery, useQuery, useQueryClient } from '@tanstack/react-query';
import { MasonryGrid } from '@egjs/react-grid';

import * as styles from './Content.css';

import Card from './Card';
import Categories from './Categories';

import getUserOne from '@/app/_api/user/getUserOne';
import getAllList from '@/app/_api/list/getAllList';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { UserType } from '@/lib/types/userProfileType';
import { AllListType } from '@/lib/types/listType';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import MasonryGridSkeleton from './MasonryGridSkeleton';
import NoDataComponent from '@/components/NoData/NoDataComponent';
import { userLocale } from '@/app/user/locale';
import { useLanguage } from '@/store/useLanguage';

interface ContentProps {
  userId: number;
  type: string;
}

const DEFAULT_CATEGORY = 'entire';

export default function Content({ userId, type }: ContentProps) {
  const { language } = useLanguage();
  const queryClient = useQueryClient();
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY);

  const { data: userData } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne, userId],
    queryFn: () => getUserOne(userId),
  });

  const {
    data: listsData,
    hasNextPage,
    fetchNextPage,
    isLoading,
  } = useInfiniteQuery<AllListType>({
    queryKey: [QUERY_KEYS.getAllList, userId, type, selectedCategory],
    queryFn: ({ pageParam: cursorUpdatedDate }) => {
      return getAllList(userId, type, selectedCategory, cursorUpdatedDate as string);
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.cursorUpdatedDate : null),
  });

  const lists = useMemo(() => {
    return listsData
      ? listsData.pages.flatMap(({ feedLists }) =>
          userData && userData.isOwner ? feedLists : feedLists.filter((list) => list.isPublic)
        )
      : [];
  }, [listsData, userData]);

  const ref = useIntersectionObserver(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  });

  const handleFetchListsOnCategory = (category: string) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    return () => {
      queryClient.removeQueries({
        queryKey: [QUERY_KEYS.getAllList, userId, type, selectedCategory],
        exact: true,
      });
    };
  }, [queryClient, selectedCategory, type, userId]);

  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <Link href={`/user/${userData?.id}/mylist`} className={styles.link}>
          <span className={styles.button}>{userLocale[language].myList}</span>
          <div className={type === 'my' ? styles.currentLine : styles.line}></div>
        </Link>
        <Link href={`/user/${userData?.id}/collabolist`} className={styles.link}>
          <button className={styles.button}>{userLocale[language].collaboList}</button>
          <div className={type === 'collabo' ? styles.currentLine : styles.line}></div>
        </Link>
      </div>
      <Categories handleFetchListsOnCategory={handleFetchListsOnCategory} selectedCategory={selectedCategory} />
      {!isLoading && !lists.length && (
        <div className={styles.nodataContainer}>
          <NoDataComponent message={userLocale[language].noListMessage} />
        </div>
      )}
      <div className={styles.cards}>
        {isLoading ? (
          <MasonryGridSkeleton />
        ) : (
          <MasonryGrid className="container" gap={16} defaultDirection={'end'} align={'start'} column={2}>
            {lists.map((list) => (
              <Card key={list.id} list={list} isOwner={!!userData?.isOwner} userId={userId} />
            ))}
          </MasonryGrid>
        )}
      </div>
      <div className={styles.target} ref={ref}></div>
    </div>
  );
}
