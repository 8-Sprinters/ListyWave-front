'use client';
import Image from 'next/image';

import MotionWrapper from './MotionWrapper';
import * as styles from './Section7.css';
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
              <div className={styles.titleBreak}>
                <h3>링크 하나로</h3>
                <h3>내 소개 끝!</h3>
              </div>
            </div>
            <div className={styles.subTitleWrapper}>
              <span>나를 소개하는 곳에 링크를 공유해요.</span>
              <div className={styles.subTitleBreak}>
                <span>내 취향이 가득한 리스트는</span>
                <span>훌륭한 소개가 되어줄 거예요</span>
              </div>
            </div>
            <div className={styles.imageWrapper}>
              <MotionWrapper delay={1} variantsType="popUp">
                <div className={styles.linkWrapper}>listywave.com/user/1</div>
              </MotionWrapper>
              <Image src={'/images/section7_phone.png'} alt="핸드폰 이미지" width={255} height={518} />
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}

export default Section7;
