'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import getTrendingLists from '@/app/_api/explore/getTrendingLists';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { TrendingListType } from '@/lib/types/exploreType';
import { CUSTOM_WRAPPER, CUSTOM_PADDING, CUSTOM_BORDER_RADIUS } from '@/lib/constants/trendingListCustomStyle';

import * as styles from './TrendingLists.css';

/**@todo 트렌딩 리스트 바뀐 디자인에 맞게 새로 갈아엎을 예정 */

function TrendingList() {
  const router = useRouter();
  const { data: trendingLists, isPending } = useQuery({
    queryKey: [QUERY_KEYS.getTrendingLists],
    queryFn: () => getTrendingLists(),
  });

  console.log(trendingLists);

  const STYLE_INDEX = (num: number) => num % 4;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (element) {
      let scrollAmount = 0;
      const slideTimer = setInterval(() => {
        element.scrollLeft += 10;
        scrollAmount += 10;
        if (scrollAmount >= 1000) {
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
      <h2 className={styles.sectionTitle}>TRENDING ️🌊 </h2>
      <div className={styles.listWrapper} ref={ref}>
        <ul className={styles.slide}>
          {trendingLists?.map((item: TrendingListType, index) => {
            return (
              <li key={item.id}>
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
                      [styles.customItemBorder]: item.backgroundColor === '#FFFFFF' ? '1px solid #EFEFF0' : 'none',
                    })}
                  >
                    <TrendingListInformation item={item} />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
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
        style={assignInlineVars({ [styles.customFontColor]: item.itemImageUrl ? '#fff' : '#000' })}
      >
        {item.title}
      </div>
      <div className={styles.ownerProfileWrapper}>
        <div className={styles.profileImageWrapper}>
          <div className={styles.profileTransparentBlack}></div>
          <Image
            src={item.ownerProfileImageUrl}
            alt="사용자 이미지"
            fill
            style={{ objectFit: 'cover' }}
            className={styles.profileImage}
          />
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
