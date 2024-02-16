/*59초 이내 방금 전
59분 이내 n분 전
1일 이내 N 시간 전
7일 이내 N일 전
7일 이후 & 같은 해 MM-DD
7일 이후 & 다른 해 YYYY-MM-DD*/

/**
 * 공통 시간 포맷 함수
 * @param params
 * @param {string} params.param1 date (createdDate/updatedDate)
 * @returns {string}
 */

export default function timeDiff(dateString: string) {
  const dateObject = new Date(dateString);
  const now = new Date(new Date().getTime() - 9 * 60 * 60 * 1000);
  const diff = (now.getTime() - dateObject.getTime()) / 1000;

  const year = dateObject.getFullYear().toString();
  const month = dateObject.getMonth() + 1 < 10 ? '0' + (dateObject.getMonth() + 1) : '' + (dateObject.getMonth() + 1);
  const day = dateObject.getDate() < 10 ? '0' + dateObject.getDate() : '' + dateObject.getDate();

  if (diff < 60) {
    return '방금 전';
  } else if (diff < 60 * 60) {
    return `${Math.floor(diff / 60)}분 전`;
  } else if (diff < 60 * 60 * 24) {
    return `${Math.floor(diff / (60 * 60))}시간 전`;
  } else if (diff < 60 * 60 * 24 * 7) {
    return `${Math.floor(diff / (60 * 60 * 24))}일 전`;
  } else if (diff < 60 * 60 * 24 * 365) {
    return `${month}-${day}`;
  } else {
    return `${year}-${month}-${day}`;
  }
}
