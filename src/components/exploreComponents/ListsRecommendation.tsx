'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import SimpleList from '@/components/SimpleList/SimpleList';
import getRecommendedLists from '@/app/_api/explore/getRecommendedLists';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { ListRecommendationType } from '@/lib/types/exploreType';
import Label from '@/components/Label/Label';
import * as styles from './ListsRecommendation.css';
import NoDataComponent from '@/components/NoData/NoDataComponent';
import { exploreBackgroundColors } from '@/lib/constants/exploreListBackgroundColor';
import { ListRecommendationSkeleton, ListsSkeleton } from './Skeleton';
import sparkleEmoji from '/public/images/sparkle.png';

import ChevronDown from '/public/icons/chevron_down.svg';

function ListRecommendation() {
  const COLOR_INDEX = (num: number) => num % 5;

  //리스트 무한스크롤 리액트 쿼리 함수
  const {
    data: result,
    hasNextPage,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.getRecommendedLists],
    queryFn: ({ pageParam: cursorId }) => {
      return getRecommendedLists({ cursorId: cursorId });
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.cursorId : null),
  });

  const ref = useIntersectionObserver(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  });

  //리스트 변수화
  const recommendLists = useMemo(() => {
    const list = result ? result.pages.flatMap(({ lists }) => lists) : [];
    return list;
  }, [result]);

  if (!result) {
    return (
      <section className={styles.wrapperOuter}>
        <ListsSkeleton />
      </section>
    );
  }

  return (
    <section className={styles.wrapperOuter}>
      <div className={styles.titleWrapper}>
        <div className={styles.sectionTitle}>NEW</div>
        <Image src={sparkleEmoji} alt="빛나는 반짝 이모지" width="22" />
      </div>
      <ul>
        {recommendLists?.length !== 0 ? (
          recommendLists?.map((item: ListRecommendationType, index) => {
            return (
              <Link href={`/list/${item.id}`} key={item.id}>
                {isFetching ? (
                  <ListRecommendationSkeleton />
                ) : (
                  <li
                    className={styles.listWrapper}
                    style={assignInlineVars({ [styles.listBackground]: exploreBackgroundColors[COLOR_INDEX(index)] })}
                  >
                    <div className={styles.categoryWrapper}>
                      <div className={styles.labelWrapper}>
                        <Label colorType="blue">{item.category}</Label>
                      </div>
                      <ul className={styles.labelsWrapper}>
                        {item.labels.map((label) => {
                          return (
                            <div key={label.id}>
                              <Label colorType="white">{label.name}</Label>
                            </div>
                          );
                        })}
                      </ul>
                    </div>
                    <div className={styles.listInformationWrapper}>
                      <div className={styles.listTitle}>{item.title}</div>
                      <div className={styles.ownerInformationWrapper}>
                        <div>{`By. ${item.ownerNickname}`}</div>
                        <Link href={`/user/${item.ownerId}/mylist`} className={styles.profileImageWrapper}>
                          {item?.ownerProfileImage ? (
                            <Image
                              src={item.ownerProfileImage}
                              alt="리스트 생성자 이미지"
                              fill
                              className={styles.ownerProfileImage}
                              style={{
                                objectFit: 'cover',
                              }}
                            />
                          ) : (
                            <div className={styles.noImage}></div>
                          )}
                        </Link>
                      </div>
                      <div className={styles.listDescription}>{item.description}</div>
                    </div>
                    <div className={styles.simpleListWrapper}>
                      <SimpleList items={item?.items} />
                    </div>
                    <Link href={`/list/${item.id}`}>
                      <div className={styles.showMoreButtonWrapper}>
                        <ChevronDown width={18} height={18} />
                        <span className={styles.showMoreButton}>더보기</span>
                      </div>
                    </Link>
                  </li>
                )}
              </Link>
            );
          })
        ) : (
          <div className={styles.noData}>
            <NoDataComponent message="팔로잉 중인 사용자의 최신 리스트가 없어요" />
          </div>
        )}
        <div ref={ref}></div>
      </ul>
    </section>
  );
}

export default ListRecommendation;
