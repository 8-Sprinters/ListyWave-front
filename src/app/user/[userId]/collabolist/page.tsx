import { Metadata } from 'next';

import Profile from '../_components/Profile';
import Content from '../_components/Content';
import FloatingContainer from '@/components/floatingButton/FloatingContainer';
import PlusOptionFloatingButton from '@/components/floatingButton/PlusOptionFloatingButton';
import ArrowUpFloatingButton from '@/components/floatingButton/ArrowUpFloatingButton';

interface CollaboListPageProps {
  params: {
    userId: number;
  };
}

export const metadata: Metadata = {
  title: 'Collabo List',
  description: '콜라보레이터와 함께 기록한 리스트 입니다.',
};

export default function CollaboListPage({ params }: CollaboListPageProps) {
  return (
    <section>
      <Profile userId={params.userId} />
      <Content userId={params.userId} type="collabo" />
      <FloatingContainer>
        <PlusOptionFloatingButton />
        <ArrowUpFloatingButton />
      </FloatingContainer>
    </section>
  );
}
