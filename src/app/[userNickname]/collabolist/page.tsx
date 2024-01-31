import '@/styles/globalStyles.css';

import { USER_DATA_ME } from '../mockData/user'; // 삭제 예정

import Profile from '../_components/Profile';
import Content from '../_components/Content';

interface FeedPageProps {
  params: {
    userNickname: number;
  };
  userId: number;
}

export default function CollaboListPage({ params, userId }: FeedPageProps) {
  // userId로 유저 정보 가져오는 api 요청

  return (
    <section>
      <Profile user={USER_DATA_ME} />
      <Content user={USER_DATA_ME} type="collabo" />
      {/* <button>생성 페이지 이동 플로팅 버튼</button> */}
    </section>
  );
}
