'use client';
import MotionWrapper from './MotionWrapper';
import * as styles from './Section4.css';
import HeroImage from '/public/images/section4_hero.svg';
import HeartIcon from '/public/icons/heart_3d.svg';

function Section4() {
  return (
    <section className={styles.background}>
      <div className={styles.wrapper}>
        <MotionWrapper variantsType="vertical" delay={0.2}>
          <div className={styles.contentsWrapper}>
            <div className={styles.titleWrapper}>
              <h3>한 눈으로 보는</h3>
              <h3>순위 변화</h3>
            </div>
            <div className={styles.subTitleWrapper}>
              <span>마음이 바뀌면 수정만 해주세요.</span>
              <span>자동으로 기록되는 히스토리로</span>
              <span>나의 취향 변화를 살펴봐요.</span>
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
