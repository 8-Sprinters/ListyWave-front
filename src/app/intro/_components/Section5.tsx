'use client';
import MotionWrapper from './MotionWrapper';
import * as styles from './Section5.css';
import LabelsAnimation from './LabelsAnimation';
import EyeEmoji from '/public/icons/eye_emoji.svg';
import MagnifyingGlass from '/public/icons/magnifying_glass.svg';

function Section5() {
  return (
    <section className={styles.background}>
      <div className={styles.wrapper}>
        <MotionWrapper variantsType="vertical" delay={0.2}>
          <div className={styles.contentsWrapper}>
            <MotionWrapper variantsType="horizontal" delay={0.4}>
              <div className={styles.sectionNameWrapper}>
                <EyeEmoji alt="눈 모양 이모지" />
                <span>발견해요</span>
              </div>
            </MotionWrapper>
            <MotionWrapper variantsType="horizontal" delay={0.6}>
              <div className={styles.titleWrapper}>
                <div className={styles.titleLine1}>
                  <h3>검색으로 쉽게 찾는</h3>
                  <MagnifyingGlass alt="돋보기 모양 아이콘" />
                </div>
                <h3>솔직한 정보</h3>
              </div>
            </MotionWrapper>
            <MotionWrapper variantsType="horizontal" delay={0.8}>
              <div className={styles.subTitleWrapper}>
                <span>3개부터 최대 10개까지 담기는 리스트엔</span>
                <span>고르고 고른 것들만 담겨있어요.</span>
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
