// 사용자 데이터

export const USER_DATA_ME = {
  id: 100,
  nickname: '파도타기',
  description:
    '리스트는 데이터를 순서대로 저장하는 자료 구조입니다. 파이썬에서는 대괄호([])로 표현하며, 다양한 연산을 지원합니다. 인덱스를 사용하여 요소에 접근할 수 있고, 데이터 처리에 효율적입니다. 리스트는 프로그래밍에서 중요한 개념이며, 다양한 알고리즘과 과제에 활용됩니다.',
  profileImageUrl: '',
  backgroundImageUrl: '',
  followingCount: 1000, // 최대 1,000
  followerCount: 0,
  isFollowed: false, // default false
  isOwner: true,
};

export const USER_DATA_OTHER = {
  id: 101,
  nickname: '파도타기1',
  description: '파도타기 좋아요',
  profileImageUrl: '',
  backgroundImageUrl: '',
  followingCount: 1000, // 최대 1,000
  followerCount: 999,
  isFollowed: false, // default false
  isOwner: false,
};
