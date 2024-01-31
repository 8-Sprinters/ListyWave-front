/**
 TODO
 - [ ] user api 연동 
 - [ ] 페이지 하위 컴포넌트 global css 변수로 변경
 - [ ] 반응형 UI 구현
 */

import '@/styles/globalStyles.css';

import { USER_DATA_ME } from '../mockData/user'; // 삭제 예정

import Profile from '../_components/Profile';
import Content from '../_components/Content';
import FloatingButton from '../_components/FloatingButton';

interface FeedPageProps {
  params: {
    userNickname: number;
  };
  userId: number;
}

export default function MyListPage({ params, userId }: FeedPageProps) {
  // console.log(params.userNickname); // 삭제 예정

  // 1. userId로 유저 정보 가져오는 api 요청

  return (
    <section>
      <Profile user={USER_DATA_ME} />
      <Content user={USER_DATA_ME} type="my" />
      <FloatingButton />
    </section>
  );
}
