import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import * as styles from './SearchBar.css';

import SearchIcon from '/public/icons/search.svg';
import { introLocale } from '@/app/intro/locale';
import { useLanguage } from '@/store/useLanguage';

function SearchBar() {
  const { language } = useLanguage();
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
          <Text>{introLocale[language].exampleTitles.search.title1}</Text>
        </SwiperSlide>
        <SwiperSlide>
          <Text>{introLocale[language].exampleTitles.search.title2}</Text>
        </SwiperSlide>
        <SwiperSlide>
          <Text>{introLocale[language].exampleTitles.search.title3}</Text>
        </SwiperSlide>
        <SwiperSlide>
          <Text>{introLocale[language].exampleTitles.search.title4}</Text>
        </SwiperSlide>
        <SwiperSlide>
          <Text>{introLocale[language].exampleTitles.search.title5}</Text>
        </SwiperSlide>
        <SwiperSlide>
          <Text>{introLocale[language].exampleTitles.search.title6}</Text>
        </SwiperSlide>
        <SwiperSlide>
          <Text>{introLocale[language].exampleTitles.search.title7}</Text>
        </SwiperSlide>
        <SwiperSlide>
          <Text>{introLocale[language].exampleTitles.search.title8}</Text>
        </SwiperSlide>
        <SwiperSlide>
          <Text>{introLocale[language].exampleTitles.search.title9}</Text>
        </SwiperSlide>
        <SwiperSlide>
          <Text>{introLocale[language].exampleTitles.search.title10}</Text>
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
