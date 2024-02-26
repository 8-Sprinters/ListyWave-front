import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import * as styles from './SearchBar.css';

import SearchIcon from '/public/icons/search.svg';

function SearchBar() {
  const swiperStyle = {
    width: '100%',
  };

  return (
    <div className={styles.wrapper}>
      <Swiper
        slidesPerView={1}
        direction={'vertical'}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // slidesPerView={4}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
        style={swiperStyle}
      >
        <SwiperSlide>
          <Text>키우기 쉬운 식물 모았어요</Text>
        </SwiperSlide>
        <SwiperSlide>
          <Text>부산사람의 돼지국밥 맛집 5곳</Text>
        </SwiperSlide>
        <SwiperSlide>
          <Text>가장 슬프게 본 영화 TOP3</Text>
        </SwiperSlide>
        <SwiperSlide>
          <Text>코인노래방에서 자주 부르는 노래 top10 🎵</Text>
        </SwiperSlide>
        <SwiperSlide>
          <Text>인생 넷플릭스 영화 TOP5</Text>
        </SwiperSlide>
        <SwiperSlide>
          <Text>대전 칼국수 맛집 top10</Text>
        </SwiperSlide>
        <SwiperSlide>
          <Text>반전결말 왓챠 플레이 미드 TOP3</Text>
        </SwiperSlide>
        <SwiperSlide>
          <Text>서울 김치가 맛있는 국밥집 top10</Text>
        </SwiperSlide>
        <SwiperSlide>
          <Text>내가 이자카야에서 제일 자주 먹는 안주 TOP 3</Text>
        </SwiperSlide>
        <SwiperSlide>
          <Text>내 플리의 최다 재생곡 TOP 10</Text>
        </SwiperSlide>
      </Swiper>
      <SearchIcon />
    </div>
  );
}

export default SearchBar;

function Text({ children }: { children: ReactNode }) {
  return (
    <div className={styles.slideWrapper}>
      <span>{children}</span>
    </div>
  );
}
