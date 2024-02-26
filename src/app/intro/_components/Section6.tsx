'use client';
import MotionWrapper from './MotionWrapper';
import * as styles from './Section6.css';

function Section6() {
  return (
    <section className={styles.background}>
      <div className={styles.wrapper}>
        <MotionWrapper variantsType="vertical" delay={0.3}>
          <div className={styles.contentsWrapper}>
            <MotionWrapper variantsType="reverseHorizontal" delay={0.5}>
              <div className={styles.titleWrapper}>
                <h3>취향으로 파도타기</h3>
              </div>
            </MotionWrapper>
            <MotionWrapper variantsType="reverseHorizontal" delay={0.7}>
              <div className={styles.subTitleWrapper}>
                <span>나랑 좋아하는 게 비슷한</span>
                <span>취향 메이트를 발견할 수 있어요.</span>
                <span>취향 저격 리스트는 한 곳에 모아 봐요.</span>
              </div>
              <div className={styles.imageWrapper}></div>
            </MotionWrapper>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}

export default Section6;
