'use client';

import Image from 'next/image';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as styles from './ListWave.css';
import { introLocale } from '@/app/intro/locale';
import { useLanguage } from '@/store/useLanguage';

function ListWave() {
  const { language } = useLanguage();
  return (
    <div className={styles.wrapper}>
      <div className={styles.listsContainer}>
        <div
          className={styles.listWrapper1}
          style={assignInlineVars({
            [styles.customBackgroundImage]: `url('${'/images/section6_image1.png'}')`,
          })}
        >
          <div className={styles.informationWrapper}>
            <span>{introLocale[language].exampleItem.line1.title1}</span>
            <span>{introLocale[language].exampleItem.line1.title2}</span>
            <span>{introLocale[language].exampleItem.line1.title3}</span>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src={'/images/category_culture.png'}
              alt={introLocale[language].exampleItem.line1.alt}
              width={60}
              height={60}
            />
          </div>
        </div>
        <div
          className={styles.listWrapper2}
          style={assignInlineVars({
            [styles.customBackgroundImage]: `url('${'/images/section6_image2.png'}')`,
          })}
        >
          <div className={styles.informationWrapper}>
            <span>{introLocale[language].exampleItem.line2.title1}</span>
            <span>{introLocale[language].exampleItem.line2.title2}</span>
            <span>{introLocale[language].exampleItem.line2.title3}</span>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src={'/images/category_life.png'}
              alt={introLocale[language].exampleItem.line2.alt}
              width={60}
              height={60}
            />
          </div>
        </div>
        <div
          className={styles.listWrapper3}
          style={assignInlineVars({
            [styles.customBackgroundImage]: `url('${'/images/section6_image3.png'}')`,
          })}
        >
          <div className={styles.informationWrapper}>
            <span>{introLocale[language].exampleItem.line3.title1}</span>
            <span>{introLocale[language].exampleItem.line3.title2}</span>
            <span>{introLocale[language].exampleItem.line3.title3}</span>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src={'/images/category_place.png'}
              alt={introLocale[language].exampleItem.line3.alt}
              width={60}
              height={60}
            />
          </div>
        </div>
        <div
          className={styles.listWrapper4}
          style={assignInlineVars({
            [styles.customBackgroundImage]: `url('${'/images/section6_image4.png'}')`,
          })}
        >
          <div className={styles.informationWrapper}>
            <span>{introLocale[language].exampleItem.line4.title1}</span>
            <span>{introLocale[language].exampleItem.line4.title2}</span>
            <span>{introLocale[language].exampleItem.line4.title3}</span>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src={'/images/category_music.png'}
              alt={introLocale[language].exampleItem.line4.alt}
              width={60}
              height={60}
            />
          </div>
        </div>
        <div
          className={styles.listWrapper5}
          style={assignInlineVars({
            [styles.customBackgroundImage]: `url('${'/images/section6_image5.png'}')`,
          })}
        >
          <div className={styles.informationWrapper}>
            <span>{introLocale[language].exampleItem.line5.title1}</span>
            <span>{introLocale[language].exampleItem.line5.title2}</span>
            <span>{introLocale[language].exampleItem.line5.title3}</span>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src={'/images/category_play.png'}
              alt={introLocale[language].exampleItem.line5.alt}
              width={60}
              height={60}
            />
          </div>
        </div>
        <div
          className={styles.listWrapper6}
          style={assignInlineVars({
            [styles.customBackgroundImage]: `url('${'/images/section6_image6.png'}')`,
          })}
        >
          <div className={styles.informationWrapper}>
            <span>{introLocale[language].exampleItem.line6.title1}</span>
            <span>{introLocale[language].exampleItem.line6.title2}</span>
            <span>{introLocale[language].exampleItem.line6.title3}</span>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src={'/images/category_book.png'}
              alt={introLocale[language].exampleItem.line6.alt}
              width={60}
              height={60}
            />
          </div>
        </div>
        <div
          className={styles.listWrapper7}
          style={assignInlineVars({
            [styles.customBackgroundImage]: `url('${'/images/section6_image7.png'}')`,
          })}
        >
          <div className={styles.informationWrapper}>
            <span>{introLocale[language].exampleItem.line7.title1}</span>
            <span>{introLocale[language].exampleItem.line7.title2}</span>
            <span>{introLocale[language].exampleItem.line7.title3}</span>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src={'/images/category_plant.png'}
              alt={introLocale[language].exampleItem.line7.alt}
              width={60}
              height={60}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListWave;
