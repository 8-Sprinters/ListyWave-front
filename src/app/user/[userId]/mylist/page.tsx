import { Metadata, ResolvingMetadata } from 'next';

import Profile from '../_components/Profile';
import Content from '../_components/Content';
import FloatingContainer from '@/components/floatingButton/FloatingContainer';
import PlusOptionFloatingButton from '@/components/floatingButton/PlusOptionFloatingButton';
import ArrowUpFloatingButton from '@/components/floatingButton/ArrowUpFloatingButton';

import axiosInstance from '@/lib/axios/axiosInstance';
import { UserType } from '@/lib/types/userProfileType';

interface MyListPageProps {
  params: { userId: number };
}

export async function generateMetadata({ params }: MyListPageProps, parent: ResolvingMetadata): Promise<Metadata> {
  const userId = params.userId;
  const { data } = await axiosInstance.get<UserType>(`/users/${userId}`);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: {
      absolute: `${data.nickname}'s Mylist`,
    },
    description: `${data.nickname}님의 취향을 기록한 리스트입니다.`,
    openGraph: {
      description: `${data.description ? data.description : `${data.nickname}님의 취향을 기록한 리스트입니다.`}`,
      images: [`${data.profileImageUrl}`, ...previousImages],
    },
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
