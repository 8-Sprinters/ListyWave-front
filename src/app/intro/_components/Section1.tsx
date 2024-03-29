'use client';
import Image from 'next/image';

import Link from 'next/link';
import { motion } from 'framer-motion';

import * as styles from './Section1.css';
import Logo from '/public/icons/logo.svg';
import Telescope from '/public/icons/telescope.svg';
import ChevronDown from '/public/icons/chevron_down_double.svg';
import MotionWrapper from './MotionWrapper';
import { introLocale } from '@/app/intro/locale';
import { useLanguage } from '@/store/useLanguage';

function Section1() {
  const { language } = useLanguage();
  return (
    <section className={styles.wrapper}>
      <Link href={'/'}>
        <div className={styles.logoWrapper}>
          <Logo alt={introLocale[language].section.logoImage} />
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
        <Image
          src={'/images/wave_surf.svg'}
          alt={introLocale[language].section.surfingImage}
          width={371}
          height={376}
        />
        <div className={styles.titleWrapper}>
          <div className={styles.textWrapper}>
            <MotionWrapper delay={0.2} variantsType="horizontal">
              <span>{`What's`}</span>
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
            <Telescope width={70} height={86} alt={introLocale[language].section.telescopeImage} />
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
