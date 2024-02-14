'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import getTrendingLists from '@/app/_api/explore/getTrendingLists';
import useMoveToPage from '@/hooks/useMoveToPage';
import { TrendingListType } from '@/lib/types/exploreType';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import * as styles from './TrendingLists.css';

function TrendingList() {
  const { data: trendingLists, isPending } = useQuery({
    queryKey: [QUERY_KEYS.getTrendingLists],
    queryFn: () => getTrendingLists(),
  });

  const { onClickMoveToPage } = useMoveToPage();

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>트렌딩</h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        {trendingLists?.map((item: TrendingListType) => {
          return (
            <SwiperSlide key={item.id} className={styles.swiperSlide}>
              <div
                className={styles.swiperContainer}
                style={assignInlineVars({
                  [styles.blackLayer]: `${item.itemImageUrl !== '' ? 'rgba(25, 25, 27, 0.5)' : 'none'}`,
                })}
                onClick={() => onClickMoveToPage(`/user/${item.ownerId}/list/${item.id}`)}
              >
                <div className={styles.swiperSlide}>
                  <div className={styles.listInformationWrapper}>
                    <h4
                      className={styles.trendingListTitle}
                      style={assignInlineVars({
                        [styles.itemFontColor]: `${item.itemImageUrl === '' ? '#19191B' : '#fff'}`,
                      })}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={styles.trendingListDescription}
                      style={assignInlineVars({
                        [styles.itemFontColor]: `${item.itemImageUrl === '' ? '#19191B' : '#fff'}`,
                      })}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
              {item.itemImageUrl ? (
                <Image
                  src={item.itemImageUrl}
                  alt="배경 이미지"
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                  className={styles.backgroundImage}
                />
              ) : (
                <div
                  className={styles.noImageUrlBox}
                  style={assignInlineVars({
                    [styles.itemBackgroundColor]: `${item.backgroundColor}`,
                  })}
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default TrendingList;
