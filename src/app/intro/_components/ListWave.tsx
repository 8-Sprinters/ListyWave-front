'use client';

import Image from 'next/image';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as styles from './ListWave.css';

function ListWave() {
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
            <span>1.문화교류</span>
            <span>2.체험</span>
            <span>3.교환학생</span>
          </div>
          <div className={styles.iconWrapper}>
            <Image src={'/images/category_culture.png'} alt="문화 카테고리 아이콘" width={60} height={60} />
          </div>
        </div>
        <div
          className={styles.listWrapper2}
          style={assignInlineVars({
            [styles.customBackgroundImage]: `url('${'/images/section6_image2.png'}')`,
          })}
        >
          <div className={styles.informationWrapper}>
            <span>1.규칙적인 생활</span>
            <span>2.건강한 식단</span>
            <span>3.운동</span>
          </div>
          <div className={styles.iconWrapper}>
            <Image src={'/images/category_life.png'} alt="일상생활 카테고리 아이콘" width={60} height={60} />
          </div>
        </div>
        <div
          className={styles.listWrapper3}
          style={assignInlineVars({
            [styles.customBackgroundImage]: `url('${'/images/section6_image3.png'}')`,
          })}
        >
          <div className={styles.informationWrapper}>
            <span>1.성심당</span>
            <span>2.연희동 베이커리</span>
            <span>3.진진빵집</span>
          </div>
          <div className={styles.iconWrapper}>
            <Image src={'/images/category_place.png'} alt="장소 카테고리 아이콘" width={60} height={60} />
          </div>
        </div>
        <div
          className={styles.listWrapper4}
          style={assignInlineVars({
            [styles.customBackgroundImage]: `url('${'/images/section6_image4.png'}')`,
          })}
        >
          <div className={styles.informationWrapper}>
            <span>1.우연히 봄</span>
            <span>2.벚꽃엔딩</span>
            <span>3.봄사랑벚꽃말고</span>
          </div>
          <div className={styles.iconWrapper}>
            <Image src={'/images/category_music.png'} alt="음악 카테고리 아이콘" width={60} height={60} />
          </div>
        </div>
        <div
          className={styles.listWrapper5}
          style={assignInlineVars({
            [styles.customBackgroundImage]: `url('${'/images/section6_image5.png'}')`,
          })}
        >
          <div className={styles.informationWrapper}>
            <span>1.부산행</span>
            <span>2.분신사바</span>
            <span>3.컨저링</span>
          </div>
          <div className={styles.iconWrapper}>
            <Image src={'/images/category_play.png'} alt="영화/드라마 카테고리 아이콘" width={60} height={60} />
          </div>
        </div>
        <div
          className={styles.listWrapper6}
          style={assignInlineVars({
            [styles.customBackgroundImage]: `url('${'/images/section6_image6.png'}')`,
          })}
        >
          <div className={styles.informationWrapper}>
            <span>1.데미안</span>
            <span>2.동물 농장</span>
            <span>3.삼국지</span>
          </div>
          <div className={styles.iconWrapper}>
            <Image src={'/images/category_book.png'} alt="도서 카테고리 아이콘" width={60} height={60} />
          </div>
        </div>
        <div
          className={styles.listWrapper7}
          style={assignInlineVars({
            [styles.customBackgroundImage]: `url('${'/images/section6_image7.png'}')`,
          })}
        >
          <div className={styles.informationWrapper}>
            <span>1.리트리버</span>
            <span>2.비글</span>
            <span>3.푸들</span>
          </div>
          <div className={styles.iconWrapper}>
            <Image src={'/images/category_plant.png'} alt="동/식물 카테고리 아이콘" width={60} height={60} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListWave;
