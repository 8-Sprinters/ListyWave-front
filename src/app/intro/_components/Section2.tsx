'use client';
import Image from 'next/image';
import * as styles from './Section2.css';
import MotionWrapper from './MotionWrapper';

import WaveImage from '/public/images/wave_image.svg';
import { introLocale } from '@/app/intro/locale';
import { useLanguage } from '@/store/useLanguage';

function Section2() {
  const { language } = useLanguage();
  return (
    <section className={styles.background}>
      <MotionWrapper variantsType="vertical">
        <div className={styles.wrapper}>
          <div className={styles.imageWrapper}>
            <WaveImage width={430} height={510} />
          </div>
          <div className={styles.tapeImageWrapper}>
            <Image
              src={'/images/new_list.png'}
              alt={introLocale[language].section.tapeImage}
              width={414}
              height={158}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className={styles.titleWrapper}>
            <MotionWrapper variantsType="vertical" delay={0.3}>
              <div className={styles.description}>
                <p>{introLocale[language].section.message1}</p>
                <p>{introLocale[language].section.message2}</p>
              </div>
            </MotionWrapper>
            <MotionWrapper variantsType="vertical" delay={0.6}>
              <h4 className={styles.title}>LISTY WAVE</h4>
            </MotionWrapper>
          </div>
        </div>
      </MotionWrapper>
    </section>
  );
}

export default Section2;
