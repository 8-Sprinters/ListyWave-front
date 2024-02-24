'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import getTrendingLists from '@/app/_api/explore/getTrendingLists';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { TrendingListType } from '@/lib/types/exploreType';
import { CUSTOM_WRAPPER, CUSTOM_PADDING, CUSTOM_BORDER_RADIUS } from '@/lib/constants/trendingListCustomStyle';

import * as styles from './TrendingLists.css';
import { vars } from '@/styles/theme.css';
import { TrendingListsSkeleton } from './Skeleton';

/**@todo 트렌딩 리스트 바뀐 디자인에 맞게 새로 갈아엎을 예정 */

function TrendingList() {
  const { data: trendingLists, isFetching } = useQuery({
    queryKey: [QUERY_KEYS.getTrendingLists],
    queryFn: () => getTrendingLists(),
  });

  let addedList: TrendingListType[] = [];

  if (trendingLists && trendingLists.length > 0) {
    addedList.push(trendingLists[trendingLists.length - 1]); // trendingLists의 마지막 요소를 addedList의 첫 번째로 추가
    addedList = [...addedList, ...(trendingLists || [])]; // trendingLists를 추가
    addedList.push(trendingLists[0]); // trendingLists의 첫 번째 요소를 addedList의 마지막으로 추가
  }

  const STYLE_INDEX = (num: number) => num % 12;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (element) {
      let scrollAmount = 0;
      const slideTimer = setInterval(() => {
        element.scrollLeft += 10;
        scrollAmount += 10;
        // console.log(scroll);
        if (scrollAmount >= 2325) {
          element.scrollLeft = 0;
          scrollAmount = 0;
        }
      }, 100);
      return () => {
        clearInterval(slideTimer);
      };
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>TRENDING🌊</h2>
      <div className={styles.listWrapper} ref={ref}>
        {isFetching ? (
          <TrendingListsSkeleton />
        ) : (
          <ul className={styles.slide}>
            {addedList?.map((item: TrendingListType, index) => {
              return (
                <li key={index.toString()}>
                  <Link href={`/list/${item.id}`}>
                    {item.itemImageUrl ? (
                      <div
                        className={styles.itemWrapperWithImage}
                        style={assignInlineVars({
                          [styles.customBackgroundImage]: `url(${item.itemImageUrl})`,
                          [styles.customWidth]: CUSTOM_WRAPPER[STYLE_INDEX(index)],
                          [styles.customPadding]: CUSTOM_PADDING[STYLE_INDEX(index)],
                          [styles.customBorderRadius]: CUSTOM_BORDER_RADIUS[STYLE_INDEX(index)],
                        })}
                      >
                        {/* <Image src={item.itemImageUrl} alt="트렌딩 리스트 배경" fill /> */}
                        <TrendingListInformation item={item} />
                      </div>
                    ) : (
                      <div
                        className={styles.itemWrapper}
                        style={assignInlineVars({
                          [styles.customWidth]: CUSTOM_WRAPPER[STYLE_INDEX(index)],
                          [styles.customPadding]: CUSTOM_PADDING[STYLE_INDEX(index)],
                          [styles.customBorderRadius]: CUSTOM_BORDER_RADIUS[STYLE_INDEX(index)],
                          [styles.customBackgroundColor]: item.backgroundColor,
                          [styles.customItemBorder]:
                            item.backgroundColor === '#FFFFFF' ? `1px solid ${vars.color.gray5}` : 'none',
                        })}
                      >
                        <TrendingListInformation item={item} />
                      </div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TrendingList;

interface TrendingListInformationType {
  item: TrendingListType;
}

function TrendingListInformation({ item }: TrendingListInformationType) {
  return (
    <div className={styles.itemInformationWrapper}>
      <div
        className={styles.itemTitle}
        style={assignInlineVars({ [styles.customFontColor]: item.itemImageUrl ? vars.color.white : vars.color.black })}
      >
        {item.title}
      </div>
      <div className={styles.ownerProfileWrapper}>
        <div className={styles.profileImageWrapper}>
          <div className={styles.profileTransparentBlack}></div>
          {item?.ownerProfileImageUrl ? (
            <Image
              src={item?.ownerProfileImageUrl}
              alt="사용자 이미지"
              fill
              style={{ objectFit: 'cover' }}
              className={styles.profileImage}
            />
          ) : (
            <div className={styles.profileImage}></div>
          )}
        </div>
        <span
          className={styles.ownerNickname}
          style={assignInlineVars({ [styles.customFontColor]: item.itemImageUrl ? '#fff' : '#000' })}
        >
          {item.ownerNickname}
        </span>
      </div>
    </div>
  );
}
