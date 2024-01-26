//59초 이내 방금 전
//59분 이내 n분 전
//1일 이내 N 시간 전
//7일 이내 N일 전
//7일 이후 & 같은 해 MM-DD
//7일 이후 & 다른 해 YYYY-MM-DD

export default function timeDiff(date: Date) {
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  if (diff < 60) {
    return "방금 전";
  } else if (diff < 60 * 60) {
    return `${Math.floor(diff / 60)}분 전`;
  } else if (diff < 60 * 60 * 24) {
    return `${Math.floor(diff / (60 * 60))}시간 전`;
  } else if (diff < 60 * 60 * 24 * 7) {
    return `${Math.floor(diff / (60 * 60 * 24))}일 전`;
  } else if (diff < 60 * 60 * 60 * 24 * 365) {
    return `${Math.floor}일 전`;
  } else {
    return "";
  }
}
