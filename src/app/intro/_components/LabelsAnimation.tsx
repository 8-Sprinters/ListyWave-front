import Label from './Label';

import * as styles from './LabelsAnimation.css';
import ArrowRightIcon from '/public/images/arrow_right.svg';
import ArrowLeftIcon from '/public/images/arrow_left.svg';

function LabelsAnimation() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.labelLine1}>
        <Label colorType="blue1">내 최애 연예인 top10</Label>
        <Label colorType="blue2">맛있는 인천 빵집 🥯</Label>
        <Label colorType="blue3">나랑 잘 맞는 mbti 순위 top10</Label>
        <Label colorType="skyblue">올해의 mvp 축구선수 순위 예측하기 🏟</Label>
      </div>
      <div className={styles.labelLine2}>
        <Label colorType="purple">내가 좋아하는 롤 캐릭터 순위</Label>
        <Label colorType="blue4">20대에 이루고 싶은 버킷리스트 top 10 </Label>
        <Label colorType="blue1">아껴보는 소설 📚</Label>
        <ArrowLeft />
        <Label colorType="purple">지금 사고 싶은 아이템 top5 </Label>
      </div>
      <div className={styles.labelLine3}>
        <Label colorType="blue2">내가 짜증나는 상황 top5 😫</Label>
        <Label colorType="blue3">내 기준 소소하지만 확실한 행복들</Label>
        <Label colorType="skyblue">넷플릭스 크리스마스 시즌용 영화 Top5</Label>
        <Label colorType="blue1">여행갈 때 꼭 들고가는 카메라 렌즈 3개 📷</Label>
      </div>
      <div className={styles.labelLine4}>
        <Label colorType="purple">을지로 직장인 10년차의 찐 맛집 5 곳</Label>
        <Label colorType="blue3">뉴욕에 가면 꼭 해야하는 5가지🗽</Label>
        <Label colorType="blue4">서울 포토존 명소 top10</Label>
        <Label colorType="blue3">내 주변 기준 가장 인기있는 쇼핑몰 TOP5</Label>
      </div>
      <div className={styles.labelLine5}>
        <Label colorType="skyblue">내 책상에서 제일 좋아하는 아이템 3개</Label>
        <Label colorType="blue1">우리 강아지의 사랑스러운 버릇 10가지</Label>
        <Label colorType="purple">울집 냥이😻가 제일 좋아하는 장난감 TOP3</Label>
        <ArrowLeft />
        <Label colorType="blue2">가장 마음에 드는 뉴진스 착장 TOP3</Label>
      </div>
      <div className={styles.labelLine6}>
        <Label colorType="blue4">나를 가장 빠르고 확실하게 행복하게 만드는것 TOP5</Label>
        <ArrowRight />
        <Label colorType="blue2">새벽 작업 노동요 추천 TOP10</Label>
        <Label colorType="blue1">인생 우선순위 TOP 10</Label>
        <Label colorType="blue3">자주 다니는 카페별 베스트 음료 ☕️</Label>
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
