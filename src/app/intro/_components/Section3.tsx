'use client';
import Image from 'next/image';

import MotionWrapper from './MotionWrapper';
import * as styles from './Section3.css';

function Section3() {
  return (
    <section className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.recordWrapper}>
          <div className={styles.record}></div>
          <span className={styles.recText}>REC</span>
        </div>
        <MotionWrapper variantsType="vertical">
          <div className={styles.contentsWrapper}>
            <div className={styles.titleWrapper}>
              <h3>마음 속 순위로</h3>
              <h3>기록하는 나</h3>
            </div>
            <div className={styles.subTitleWrapper}>
              <span>트렌드는 잠시 잊고,</span>
              <span>지극히 개인적인 취향으로 순위를 매겨요.</span>
            </div>
            <div className={styles.imageWrapper}>
              <Image src={'/images/section3_hero.png'} alt="리스트 생성하기 요소" width={300} height={314} />
              <div className={styles.blurBox}></div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}

export default Section3;
