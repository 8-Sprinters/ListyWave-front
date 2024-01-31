/**
 TODO
 - [x] 리스트 mock data 만들기
 - [x] mock 데이터 연결 (리스트)
 - [x] mock 데이터 연결 (아이템)
 - [x] 레이아웃 스타일링
 - [x] 마이리스트/ 콜라보, 카테고리 레이아웃 컴포넌트 분리 (리팩토링)
 - [x] 프로필 컴포넌트 분리 (리팩토링)
 - [ ] 마이, 콜라보 페이지 분리
 - [x] onclick 기능 추가
 */

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

export default function MyListPage({ params, userId }: FeedPageProps) {
  // console.log(params.userNickname); // 삭제 예정

  // userId로 유저 정보 가져오는 api 요청

  return (
    <section>
      <Profile user={USER_DATA_ME} />
      <Content user={USER_DATA_ME} type="my" />
      {/* <button>생성 페이지 이동 플로팅 버튼</button> */}
    </section>
  );
}
