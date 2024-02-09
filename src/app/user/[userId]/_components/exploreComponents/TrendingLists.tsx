'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import 'swiper/css';
import { TrendingLists } from '../../../../_mockdata/mockdata';

import * as styles from './TrendingLists.css';
import { Autoplay } from 'swiper/modules';

function TrendingList() {
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
        {TrendingLists.map((item) => {
          return (
            <SwiperSlide key={item.id} className={styles.swiperSlide}>
              <div
                className={styles.swiperContainer}
                style={assignInlineVars({
                  [styles.blackLayer]: `${item.itemImageUrl !== '' ? 'rgba(25, 25, 27, 0.5)' : 'none'}`,
                })}
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
