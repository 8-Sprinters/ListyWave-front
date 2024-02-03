interface UserProfileType {
  id: number;
  profileImageUrl: string;
  nickname: string;
}

const generateMockData = (count: number): UserProfileType[] => {
  const mockData: UserProfileType[] = [];

  mockData.push({
    id: 101,
    profileImageUrl: `/images/mock_profile.png`,
    nickname: '안유진',
  });

  mockData.push({
    id: 102,
    profileImageUrl: `/images/mock_profile.png`,
    nickname: '강나현',
  });

  mockData.push({
    id: 103,
    profileImageUrl: `/images/mock_profile.png`,
    nickname: '민서영',
  });

  mockData.push({
    id: 104,
    profileImageUrl: `/images/mock_profile.png`,
    nickname: '박소현',
  });

  mockData.push({
    id: 105,
    profileImageUrl: `/images/mock_profile.png`,
    nickname: '강현지',
  });

  mockData.push({
    id: 106,
    profileImageUrl: `/images/mock_profile.png`,
    nickname: '신은서',
  });

  mockData.push({
    id: 107,
    profileImageUrl: `/images/mock_profile.png`,
    nickname: '동호',
  });

  mockData.push({
    id: 108,
    profileImageUrl: `/images/mock_profile.png`,
    nickname: 'JJUNGSU',
  });

  for (let i = 1; i <= count; i++) {
    const user: UserProfileType = {
      id: i,
      profileImageUrl: '',
      nickname: `User${i}`,
    };

    mockData.push(user);
  }

  return mockData;
};

export default generateMockData(20);
