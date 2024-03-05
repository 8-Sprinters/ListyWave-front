import Label from './Label';

import * as styles from './LabelsAnimation.css';
import ArrowRightIcon from '/public/images/arrow_right.svg';
import ArrowLeftIcon from '/public/images/arrow_left.svg';
import { introLocale } from '@/app/intro/locale';
import { useLanguage } from '@/store/useLanguage';

function LabelsAnimation() {
  const { language } = useLanguage();
  return (
    <div className={styles.wrapper}>
      <div className={styles.labelLine1}>
        <Label colorType="blue1">{introLocale[language].exampleTitles.line1.title1}</Label>
        <Label colorType="blue2">{introLocale[language].exampleTitles.line1.title2}</Label>
        <Label colorType="blue3">{introLocale[language].exampleTitles.line1.title3}</Label>
        <Label colorType="skyblue">{introLocale[language].exampleTitles.line1.title4}</Label>
      </div>
      <div className={styles.labelLine2}>
        <Label colorType="purple">{introLocale[language].exampleTitles.line2.title1}</Label>
        <Label colorType="blue4">{introLocale[language].exampleTitles.line2.title2} </Label>
        <Label colorType="blue1">{introLocale[language].exampleTitles.line2.title3}</Label>
        <ArrowLeft />
        <Label colorType="purple">{introLocale[language].exampleTitles.line2.title4} </Label>
      </div>
      <div className={styles.labelLine3}>
        <Label colorType="blue2">{introLocale[language].exampleTitles.line3.title1}</Label>
        <Label colorType="blue3">{introLocale[language].exampleTitles.line3.title2}</Label>
        <Label colorType="skyblue">{introLocale[language].exampleTitles.line3.title3}</Label>
        <Label colorType="blue1">{introLocale[language].exampleTitles.line3.title4}</Label>
      </div>
      <div className={styles.labelLine4}>
        <Label colorType="purple">{introLocale[language].exampleTitles.line4.title1}</Label>
        <Label colorType="blue3">{introLocale[language].exampleTitles.line4.title2}</Label>
        <Label colorType="blue4">{introLocale[language].exampleTitles.line4.title3}</Label>
        <Label colorType="blue3">{introLocale[language].exampleTitles.line4.title4}</Label>
      </div>
      <div className={styles.labelLine5}>
        <Label colorType="skyblue">{introLocale[language].exampleTitles.line5.title1}</Label>
        <Label colorType="blue1">{introLocale[language].exampleTitles.line5.title2}</Label>
        <Label colorType="purple">{introLocale[language].exampleTitles.line5.title3}</Label>
        <ArrowLeft />
        <Label colorType="blue2">{introLocale[language].exampleTitles.line5.title4}</Label>
      </div>
      <div className={styles.labelLine6}>
        <Label colorType="blue4">{introLocale[language].exampleTitles.line6.title1}</Label>
        <ArrowRight />
        <Label colorType="blue2">{introLocale[language].exampleTitles.line6.title2}</Label>
        <Label colorType="blue1">{introLocale[language].exampleTitles.line6.title3}</Label>
        <Label colorType="blue3">{introLocale[language].exampleTitles.line6.title4}</Label>
      </div>
    </div>
  );
}

export default LabelsAnimation;

function ArrowLeft() {
  return (
    <Label colorType="whiteLeft">
      <ArrowLeftIcon width={135} height={16} />
    </Label>
  );
}

function ArrowRight() {
  return (
    <Label colorType="whiteRight">
      <ArrowRightIcon idth={135} height={16} />
    </Label>
  );
}
