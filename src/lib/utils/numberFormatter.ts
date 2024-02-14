const numberFormatter = (num: number, lang: 'ko' | 'en') => {
  const unit = 10000;

  console.log(num); // 삭제 예정

  if (num / unit < 1) {
    return num.toLocaleString('ko-KR');
  }

  const formattedNum = Math.trunc((num / unit) * 10) / 10;
  console.log(formattedNum); // 삭제 예정

  return formattedNum + '만';
};

export default numberFormatter;
