// 사용자 데이터

export const USER_DATA_ME = {
  id: 100,
  nickname: "파도타기",
  description: "파도타기 좋아요",
  profileImageUrl: "",
  backgroundImageUrl: "",
  followingCount: 1000, // 최대 1,000
  followerCount: 0,
  isFollowed: false, // default false
  isOwner: true,
};

export const USER_DATA_OTHER = {
  id: 101,
  nickname: "파도타기1",
  description: "파도타기 좋아요",
  profileImageUrl: "",
  backgroundImageUrl: "",
  followingCount: 1000, // 최대 1,000
  followerCount: 999,
  isFollowed: false, // default false
  isOwner: false,
};
