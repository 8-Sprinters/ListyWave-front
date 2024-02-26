'use client';
import MotionWrapper from './MotionWrapper';
import * as styles from './Section7.css';
import HeroImage from '/public/images/section7_phone.svg';
import LinkIcon from '/public/icons/linkIcon_3d.svg';

function Section7() {
  return (
    <section className={styles.background}>
      <div className={styles.wrapper}>
        <MotionWrapper variantsType="vertical" delay={0.2}>
          <div className={styles.contentsWrapper}>
            <div className={styles.sectionNameWrapper}>
              <LinkIcon />
              <span>공유해요</span>
            </div>
            <div className={styles.titleWrapper}>
              <h3>링크 하나로 내 소개 끝!</h3>
            </div>
            <div className={styles.subTitleWrapper}>
              <span>나를 소개하는 곳에 링크를 공유해요.</span>
              <span>내 취향이 가득한 리스트는 훌륭한 소개가 되어줄 거예요</span>
            </div>
            <div className={styles.imageWrapper}>
              <MotionWrapper delay={0.4} variantsType="popUp">
                <div className={styles.linkWrapper}>listywave.com/user/1</div>
              </MotionWrapper>
              <HeroImage />
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}

export default Section7;
