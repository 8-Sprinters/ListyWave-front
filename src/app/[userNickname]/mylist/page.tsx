/**
 TODO
 - [ ] 페이지 하위 컴포넌트 global css 변수로 변경
 - [ ] 반응형 UI 구현
 - [ ] 피드페이지 스켈레톤 ui 적용
 */

import Profile from '../_components/Profile';
import Content from '../_components/Content';
import FloatingContainer from '@/components/floatingButton/FloatingContainer';
import PlusOptionFloatingButton from '@/components/floatingButton/PlusOptionFloatingButton';
import ArrowUpFloatingButton from '@/components/floatingButton/ArrowUpFloatingButton';

// 타입 사용할 때 재정의
// interface MyListPageProps {
//   params: {
//     userNickname: number;
//   };
//   userId: number;
// }

export default function MyListPage() {
  // console.log(params.userNickname); // 삭제 예정

  // 1. userId로 유저 정보 가져오는 api 요청

  return (
    <section>
      <Profile />
      <Content type="my" />
      <FloatingContainer>
        <PlusOptionFloatingButton />
        <ArrowUpFloatingButton />
      </FloatingContainer>
    </section>
  );
}
