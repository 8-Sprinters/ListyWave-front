'use client';
import Image from 'next/image';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as styles from './Section2.css';
import MotionWrapper from './MotionWrapper';

import WaveImage from '/public/images/wave_image.svg';

function Section2() {
  return (
    <section className={styles.background}>
      <MotionWrapper variantsType="vertical">
        <div className={styles.wrapper}>
          <div className={styles.imageWrapper}>
            <WaveImage />
          </div>
          <div className={styles.tapeImageWrapper}>
            <div
              className={styles.tapeImageParent}
              // style={assignInlineVars({ [styles.customBackgroundImage]: `url(${'/images/tape_image.png'})` })}
            ></div>
            <Image src={'/images/tape_image.png'} alt="테이프 이미지" fill style={{ objectFit: 'cover' }} />
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
