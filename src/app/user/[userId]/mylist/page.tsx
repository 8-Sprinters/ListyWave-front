import { Metadata } from 'next';

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

export const metadata: Metadata = {
  title: 'My List',
  description: '나의 취향을 기록한 나만의 리스트 입니다.',
};

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
