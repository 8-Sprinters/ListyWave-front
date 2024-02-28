'use client';
import Image from 'next/image';

import MotionWrapper from './MotionWrapper';
import * as styles from './Section7.css';
import LinkIcon from '/public/icons/linkIcon_3d.svg';
import { introLocale } from '@/app/intro/locale';
import { useLanguage } from '@/store/useLanguage';

function Section7() {
  const { language } = useLanguage();
  return (
    <section className={styles.background}>
      <div className={styles.wrapper}>
        <MotionWrapper variantsType="vertical" delay={0.2}>
          <div className={styles.contentsWrapper}>
            <div className={styles.sectionNameWrapper}>
              <LinkIcon />
              <span>{introLocale[language].section.message22}</span>
            </div>
            <div className={styles.titleWrapper}>
              <div className={styles.titleBreak}>
                <h3>{introLocale[language].section.message23}</h3>
                <h3>{introLocale[language].section.message24}</h3>
              </div>
            </div>
            <div className={styles.subTitleWrapper}>
              <span>{introLocale[language].section.message25}</span>
              <div className={styles.subTitleBreak}>
                <span>{introLocale[language].section.message26}</span>
                <span>{introLocale[language].section.message27}</span>
              </div>
            </div>
            <div className={styles.imageWrapper}>
              <MotionWrapper delay={0.6} variantsType="popUp">
                <div className={styles.linkWrapper}>listywave.com/user/1</div>
              </MotionWrapper>
              <Image
                src={'/images/section7_phone.png'}
                alt={introLocale[language].section.cellphoneImage}
                width={255}
                height={518}
              />
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}

export default Section7;
