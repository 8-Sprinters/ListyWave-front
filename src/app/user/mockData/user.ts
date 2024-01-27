// 사용자 데이터

export const USER_DATA_ME = {
  id: 100,
  nickname: '파도타기',
  description:
    '브런치에서 달콤한 크로와상을 즐기며 한편으로는 풍부한 에스프레소의 향을 맡으면서, 머릿속의 생각을 정리하고 즐겁게 시간을 보내는 것을 즐깁니다.',
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
