'use client';
import MotionWrapper from './MotionWrapper';
import * as styles from './Section5.css';
import LabelsAnimation from './LabelsAnimation';
import EyeEmoji from '/public/icons/eye_emoji.svg';
import MagnifyingGlass from '/public/icons/magnifying_glass.svg';
import { introLocale } from '@/app/intro/locale';
import { useLanguage } from '@/store/useLanguage';

function Section5() {
  const { language } = useLanguage();
  return (
    <section className={styles.background}>
      <div className={styles.wrapper}>
        <MotionWrapper variantsType="vertical" delay={0.2}>
          <div className={styles.contentsWrapper}>
            <MotionWrapper variantsType="horizontal" delay={0.4}>
              <div className={styles.sectionNameWrapper}>
                <EyeEmoji alt={introLocale[language].section.eyeIcon} />
                <span>alt={introLocale[language].section.message17}</span>
              </div>
            </MotionWrapper>
            <MotionWrapper variantsType="horizontal" delay={0.6}>
              <div className={styles.titleWrapper}>
                <div className={styles.titleLine1}>
                  <h3>
                    {introLocale[language].section.message12}
                    <br className={styles.breakTitle} />
                    {introLocale[language].section.message13}
                  </h3>
                  <MagnifyingGlass alt={introLocale[language].section.readingGlassesIcon} />
                </div>
                <h3>{introLocale[language].section.message14}</h3>
              </div>
            </MotionWrapper>
            <MotionWrapper variantsType="horizontal" delay={0.8}>
              <div className={styles.subTitleWrapper}>
                <span>{introLocale[language].section.message15}</span>
                <span>{introLocale[language].section.message16}</span>
              </div>
              <div className={styles.imageWrapper}></div>
            </MotionWrapper>
          </div>
          <LabelsAnimation />
        </MotionWrapper>
      </div>
    </section>
  );
}

export default Section5;
