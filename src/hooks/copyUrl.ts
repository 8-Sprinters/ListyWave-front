import copy from 'copy-to-clipboard';

function makeUrl() {
  let url = '';
  // 테스트 데이터
  url = 'https://hungseong.tistory.com/72';
  return url;
}

function copyLink() {
  const url = makeUrl();
  copy(url);
  console.log('url 복사', url);
}

export default copyLink;
