'use client';
import * as styles from './Section2.css';
import MotionWrapper from './MotionWrapper';

import WaveImage from '/public/images/wave_image.svg';
import TapeImage from '/public/images/tape_image.svg';

function Section2() {
  return (
    <section className={styles.background}>
      <MotionWrapper variantsType="vertical">
        <div className={styles.wrapper}>
          <div className={styles.imageWrapper}>
            <WaveImage />
          </div>
          <div className={styles.tapeImageWrapper}>
            <TapeImage />
          </div>
          <div className={styles.titleWrapper}>
            <MotionWrapper variantsType="vertical" delay={0.3}>
              <div className={styles.description}>
                <p>파도처럼 흐르는</p>
                <p>나의 취향 기록</p>
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
