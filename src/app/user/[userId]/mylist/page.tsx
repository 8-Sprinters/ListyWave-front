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

interface MyListPageProps {
  params: {
    userId: number;
  };
}

export default function MyListPage({ params }: MyListPageProps) {
  return (
    <section>
      <Profile userId={params.userId} />
      <Content userId={params.userId} type="my" />
      <FloatingContainer>
        <PlusOptionFloatingButton />
        <ArrowUpFloatingButton />
      </FloatingContainer>
    </section>
  );
}
