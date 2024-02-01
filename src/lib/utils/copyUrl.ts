import copy from 'copy-to-clipboard';
import toasting from '@/lib/utils/toasting';

function makeUrl() {
  let url = '';
  // 테스트 데이터
  url = 'https://hungseong.tistory.com/72';
  return url;
}

function copyLink() {
  const url = makeUrl();
  copy(url);
  toasting({ type: 'default', txt: '링크가 복사되었습니다.' });
}

export default copyLink;
