'use client';
import MotionWrapper from './MotionWrapper';
import * as styles from './Section4.css';
import HeroImage from '/public/images/section4_hero.svg';
import HeartIcon from '/public/icons/heart_3d.svg';
import { introLocale } from '@/app/intro/locale';
import { useLanguage } from '@/store/useLanguage';

function Section4() {
  const { language } = useLanguage();
  return (
    <section className={styles.background}>
      <div className={styles.wrapper}>
        <MotionWrapper variantsType="vertical" delay={0.2}>
          <div className={styles.contentsWrapper}>
            <div className={styles.titleWrapper}>
              <h3>{introLocale[language].section.message7}</h3>
              <h3>{introLocale[language].section.message8}</h3>
            </div>
            <div className={styles.subTitleWrapper}>
              <span>{introLocale[language].section.message9}</span>
              <span>{introLocale[language].section.message10}</span>
              <span>{introLocale[language].section.message11}</span>
            </div>
            <div className={styles.imageWrapper}>
              <div className={styles.iconWrapper}>
                <HeartIcon />
              </div>
              <HeroImage />
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}

export default Section4;
