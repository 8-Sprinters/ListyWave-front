'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

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
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <h4>title</h4>
          <span>description</span>
        </SwiperSlide>
        <SwiperSlide>Slide2</SwiperSlide>
        <SwiperSlide>Slide3</SwiperSlide>
        <SwiperSlide>Slide4</SwiperSlide>
        <SwiperSlide>Slide5</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TrendingList;
