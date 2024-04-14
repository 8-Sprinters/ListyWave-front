'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

import getTrendingLists from '@/app/_api/explore/getTrendingLists';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { TrendingListType } from '@/lib/types/exploreType';

import * as styles from './TrendingLists.css';
import { vars } from '@/styles/theme.css';
import { TrendingListsSkeleton } from './Skeleton';
import oceanEmoji from '/public/images/ocean.png';
import fallbackProfile from '/public/images/fallback_profileImage.webp';
import { commonLocale } from '@/components/locale';
import { useLanguage } from '@/store/useLanguage';

/**@todo 트렌딩 리스트 바뀐 디자인에 맞게 새로 갈아엎을 예정 */

const swiperSliderStyle = [
  {
    width: '258px',
    borderRadius: '40px',
  },
  {
    width: '190px',
    borderRadius: '180px',
  },
  {
    width: '258px',
    borderRadius: '40px',
  },
  {
    width: '172px',
    borderRadius: '20px',
  },
];
const STYLE_INDEX = (num: number) => num % 4;

function TrendingList() {
  const { language } = useLanguage();
  const { data: trendingLists, isFetching } = useQuery({
    queryKey: [QUERY_KEYS.getTrendingLists],
    queryFn: () => getTrendingLists(),
  });

  const swiperStyle = {
    width: '100vw',
    height: '100%',
    padding: '10px 0',
  };

  if (isFetching) {
    return <TrendingListsSkeleton />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.sectionTitle}>TRENDING</h2>
        <Image src={oceanEmoji} alt={commonLocale[language].oceanEmofi} width="22" />
      </div>
      <div className={styles.listWrapper}>
        <div className={styles.slide}>
          {trendingLists && (
            <Swiper
              slidesPerView={'auto'}
              grabCursor={true}
              centeredSlides={true}
              spaceBetween={10}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay, EffectCoverflow]}
              className="mySwiper"
              style={swiperStyle}
            >
              <SwiperSlide className={styles.test} style={swiperSliderStyle[0]}>
                <TrendingListItem item={trendingLists[0]} index={0} />
              </SwiperSlide>
              <SwiperSlide className={styles.test} style={swiperSliderStyle[1]}>
                <TrendingListItem item={trendingLists[1]} index={1} />
              </SwiperSlide>
              <SwiperSlide className={styles.test} style={swiperSliderStyle[2]}>
                <TrendingListItem item={trendingLists[2]} index={2} />
              </SwiperSlide>
              <SwiperSlide className={styles.test} style={swiperSliderStyle[3]}>
                <TrendingListItem item={trendingLists[3]} index={3} />
              </SwiperSlide>
              <SwiperSlide className={styles.test} style={swiperSliderStyle[0]}>
                <TrendingListItem item={trendingLists[4]} index={4} />
              </SwiperSlide>
              <SwiperSlide className={styles.test} style={swiperSliderStyle[1]}>
                <TrendingListItem item={trendingLists[5]} index={5} />
              </SwiperSlide>
              <SwiperSlide className={styles.test} style={swiperSliderStyle[2]}>
                <TrendingListItem item={trendingLists[6]} index={6} />
              </SwiperSlide>
              <SwiperSlide className={styles.test} style={swiperSliderStyle[3]}>
                <TrendingListItem item={trendingLists[7]} index={7} />
              </SwiperSlide>
              <SwiperSlide className={styles.test} style={swiperSliderStyle[0]}>
                <TrendingListItem item={trendingLists[8]} index={8} />
              </SwiperSlide>
              <SwiperSlide className={styles.test} style={swiperSliderStyle[1]}>
                <TrendingListItem item={trendingLists[9]} index={9} />
              </SwiperSlide>
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
}

interface TrendingListItemProps {
  item?: TrendingListType;
  index: number;
}

function TrendingListItem({ item, index }: TrendingListItemProps) {
  return (
    <Link href={`/list/${item?.id}`}>
      <div
        className={styles.testItem}
        style={assignInlineVars({
          [styles.customItemBorder]: '20px',
        })}
      >
        {item?.itemImageUrl ? (
          <div
            className={styles.itemWrapperWithImage}
            style={assignInlineVars({
              [styles.customBackgroundImage]: `url(${item.itemImageUrl})`,
              [styles.customBorderRadius]: swiperSliderStyle[STYLE_INDEX(index)]['borderRadius'],
            })}
          >
            <TrendingListInformation item={item} />
          </div>
        ) : (
          <div
            className={styles.itemWrapper}
            style={assignInlineVars({
              [styles.customBackgroundColor]: item?.backgroundColor,
              [styles.customBorderRadius]: swiperSliderStyle[STYLE_INDEX(index)]['borderRadius'],
              [styles.customItemBorder]: item?.backgroundColor === '#FFFFFF' ? `1px solid ${vars.color.gray7}` : '',
            })}
          >
            <TrendingListInformation item={item} />
          </div>
        )}
      </div>
    </Link>
  );
}

export default TrendingList;

interface TrendingListInformationType {
  item?: TrendingListType;
}

function TrendingListInformation({ item }: TrendingListInformationType) {
  const { language } = useLanguage();
  return (
    <div className={styles.itemInformationWrapper}>
      <div
        className={styles.itemTitle}
        style={assignInlineVars({ [styles.customFontColor]: item?.itemImageUrl ? vars.color.white : vars.color.black })}
      >
        <p className={styles.itemTitleContent}>{item?.title}</p>
      </div>
      <div className={styles.ownerProfileWrapper}>
        <div className={styles.profileImageWrapper}>
          <div className={styles.profileTransparentBlack}></div>
          {item?.ownerProfileImageUrl ? (
            <Image
              src={item?.ownerProfileImageUrl}
              alt={commonLocale[language].userProfileImage}
              fill
              style={{ objectFit: 'cover' }}
              className={styles.profileImage}
              sizes="100vw 100vh"
            />
          ) : (
            <Image
              src={fallbackProfile}
              alt={commonLocale[language].userProfileImage}
              fill
              style={{ objectFit: 'cover' }}
              className={styles.profileImage}
              sizes="100vw 100vh"
            />
          )}
        </div>
        <span
          className={styles.ownerNickname}
          style={assignInlineVars({ [styles.customFontColor]: item?.itemImageUrl ? '#fff' : '#000' })}
        >
          {item?.ownerNickname}
        </span>
      </div>
    </div>
  );
}
