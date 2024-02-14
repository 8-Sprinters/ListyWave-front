const numberFormatter = (num: number, lang: 'ko' | 'en') => {
  const unit = 10000;

  if (num / unit < 1) {
    return num.toLocaleString('ko-KR');
  }

  if (lang === 'ko') {
    const formattedNumKo = Math.trunc((num / unit) * 10) / 10;
    return formattedNumKo + '만';
  } else {
    const formattedNumEn = Math.trunc((num / unit) * 10);
    if (formattedNumEn < 1000) {
      return formattedNumEn + 'K';
    } else {
      const formattedMillion = Math.trunc((formattedNumEn / 1000) * 10) / 10;
      return formattedMillion + 'M';
    }
  }
};

export default numberFormatter;
