'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import * as styles from './Section1.css';
import Logo from '/public/icons/logo.svg';
import SurfImage from '/public/images/surf_image_white.svg';
import Telescope from '/public/icons/telescope.svg';
import ChevronDown from '/public/icons/chevron_down_double.svg';
import MotionWrapper from './MotionWrapper';

function Section1() {
  return (
    <section className={styles.wrapper}>
      <Link href={'/'}>
        <div className={styles.logoWrapper}>
          <Logo alt="로고 이미지" />
        </div>
      </Link>
      <motion.div
        className={styles.contentsWrapper}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0, 0.3, 0.6, 1],
        }}
      >
        <SurfImage width={400} alt="서핑 이미지" />
        <div className={styles.titleWrapper}>
          <div className={styles.textWrapper}>
            <MotionWrapper delay={0.2} variantsType="horizontal">
              <span className={styles.text}>{`What's`}</span>
            </MotionWrapper>
            <MotionWrapper delay={0.4} variantsType="horizontal">
              <span>{'In'}</span>
            </MotionWrapper>
            <MotionWrapper delay={0.6} variantsType="horizontal">
              <span>{'Your'}</span>
            </MotionWrapper>
            <MotionWrapper delay={0.8} variantsType="horizontal">
              <span>{'List'}</span>
            </MotionWrapper>
          </div>
          <div className={styles.telescopeWrapper}>
            <Telescope width={70} alt="망원경 아이콘" />
          </div>
        </div>
      </motion.div>
      <button className={styles.chevronWrapper}>
        <ChevronDown width={30} height={33} />
      </button>
    </section>
  );
}

export default Section1;
