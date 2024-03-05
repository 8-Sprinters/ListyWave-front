'use client';
import ListWave from './ListWave';
import MotionWrapper from './MotionWrapper';
import SearchBar from './SearchBar';
import * as styles from './Section6.css';
import { introLocale } from '@/app/intro/locale';
import { useLanguage } from '@/store/useLanguage';

function Section6() {
  const { language } = useLanguage();
  return (
    <section className={styles.background}>
      <div className={styles.wrapper}>
        <MotionWrapper variantsType="vertical" delay={0.3}>
          <div className={styles.contentsWrapper}>
            <MotionWrapper variantsType="reverseHorizontal" delay={0.5}>
              <div className={styles.titleWrapper}>
                <h3>{introLocale[language].section.message21}</h3>
              </div>
            </MotionWrapper>
            <MotionWrapper variantsType="reverseHorizontal" delay={0.7}>
              <div className={styles.subTitleWrapper}>
                <span>{introLocale[language].section.message18}</span>
                <span>{introLocale[language].section.message19}</span>
                <span>{introLocale[language].section.message20}</span>
              </div>
              <div className={styles.imageWrapper}></div>
            </MotionWrapper>
          </div>
          <div className={styles.searchBarWrapper}>
            <SearchBar />
          </div>
          <div>
            <ListWave />
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}

export default Section6;
