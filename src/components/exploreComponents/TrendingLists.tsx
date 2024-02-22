'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { assignInlineVars } from '@vanilla-extract/dynamic';

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

  const STYLE_INDEX = (num: number) => num % 4;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>TRENDING ️🌊 </h2>
      <ul className={styles.listWrapper}>
        {trendingLists?.map((item: TrendingListType, index) => {
          return (
            <li key={item.id}>
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
                <div className={styles.itemInformationWrapper}>
                  <div className={styles.itemTitle}>{item.title}</div>
                  <div className={styles.ownerProfileWrapper}>
                    <div className={styles.temporaryCircle}></div>
                    <span>nickname</span>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TrendingList;
