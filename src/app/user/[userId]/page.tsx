/**
 TODO
 - [x] 리스트 mock data 만들기
 - [x] mock 데이터 연결 (리스트)
 - [x] mock 데이터 연결 (아이템)
 - [ ] 레이아웃 스타일링
 - [ ] 마이리스트/ 콜라보, 카테고리 레이아웃 컴포넌트 분리 (리팩토링)
 - [x] 프로필 컴포넌트 분리 (리팩토링)
 - [ ] 기타 조건 반영
 - [ ] onclick 기능 추가
 - [ ] 피드페이지 스켈레톤 ui 적용
 - [ ] 리스트 무한스트롤 적용
 */

/**
 * /users/{userId}/feeds/ 단일 페이지 -> 프론트에서 userId 값 넘겨주기
 * /user 단일 엔드포인트 (+. accessToken // Nullable)
 *   ㄴ 기존 {userId} 없이 -> accessToken에서 검증하므로
 * 백엔드에서 accessToken으로 권한체크 한 값을 isOwner로 보내주기
 * ex1. 사용자 권한이면 isOwner가 true (내가 내꺼 보는 경우)
 * ex2. 읽기 권한이면 isOwner가 false (내가 다른사람꺼 보는 경우)
 *
 * 피드 페이지 접속 경우의 수
 * case1) 회원이고 && 본인일때 -> 리스폰스에 inOwner가 true
 * case2) 회원이고 && 다른사람일 때 -> 리스폰스에 isOwner가 false
 * case3) 비회원인 경우 -> accessToken이 없을테니 inOwner가 false
 */

import { USER_DATA_ME } from '../mockData/user'; // 삭제 예정

import Profile from '../_components/Profile';
import Content from '../_components/Content';

interface FeedPageProps {
  params: {
    userId: number;
  };
}

export default function FeedPage({ params }: FeedPageProps) {
  console.log(params.userId); // 삭제 예정

  // userId로 유저 정보 가져오는 api 요청

  return (
    <section>
      <Profile user={USER_DATA_ME} />
      <Content user={USER_DATA_ME} />
      {/* <button>생성 페이지 이동 플로팅 버튼</button> */}
    </section>
  );
}
