'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import './styles.css';

import getTrendingLists from '@/app/_api/explore/getTrendingLists';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { TrendingListType } from '@/lib/types/exploreType';
import { CUSTOM_WRAPPER, CUSTOM_PADDING, CUSTOM_BORDER_RADIUS } from '@/lib/constants/trendingListCustomStyle';

import * as styles from './TrendingLists.css';
import { vars } from '@/styles/theme.css';
import { TrendingListsSkeleton } from './Skeleton';
import oceanEmoji from '/public/images/ocean.png';

/**@todo 트렌딩 리스트 바뀐 디자인에 맞게 새로 갈아엎을 예정 */

function TrendingList() {
  const { data: trendingLists, isFetching } = useQuery({
    queryKey: [QUERY_KEYS.getTrendingLists],
    queryFn: () => getTrendingLists(),
  });

  const STYLE_INDEX = (num: number) => num % 4;

  const swiperStyle = {
    // position: 'relative',
    height: '100%',
    // position: 'relative',
    display: 'flex',
  };

  const swiperSliderStyle = [
    {
      width: '258px',
    },
    {
      width: '190px',
    },
    {
      width: '258px',
    },
    {
      width: '172px',
    },
  ];

  if (isFetching) {
    return <TrendingListsSkeleton />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.sectionTitle}>TRENDING</h2>
        <Image src={oceanEmoji} alt="바다의 파도 이모지" width="22" />
      </div>
      <div className={styles.listWrapper}>
        <div className={styles.slide}>
          <Swiper
            slidesPerView={'auto'}
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={10}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            // slidesPerView={4}
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay, EffectCoverflow]}
            className="mySwiper"
            style={swiperStyle}
          >
            {trendingLists?.map((item: TrendingListType, index) => {
              return (
                <>
                  <SwiperSlide key={index.toString()} className={styles.test} style={swiperSliderStyle[0]}>
                    <div>{item.id}</div>
                  </SwiperSlide>
                  <SwiperSlide key={index.toString()} className={styles.test} style={swiperSliderStyle[1]}>
                    <div>{item.id}</div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
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
