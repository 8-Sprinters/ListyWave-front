import { Metadata, ResolvingMetadata } from 'next';
import * as styles from './ListDetail.css';

import ListInformation from '@/app/list/[listId]/_components/ListDetailOuter/ListInformation';
import axiosInstance from '@/lib/axios/axiosInstance';
import { ListDetailType } from '@/lib/types/listType';

interface ListDetailProps {
  params: { listId: number };
}

export async function generateMetadata({ params }: ListDetailProps, parent: ResolvingMetadata): Promise<Metadata> {
  const listId = params.listId;
  const { data } = await axiosInstance.get<ListDetailType>(`/lists/${listId}`);
  const { title, ownerNickname, collaborators, description, items } = data;

  const previousImages = (await parent).openGraph?.images || [];
  const listType = collaborators.length === 0 ? 'Mylist' : 'CollaboList';

  return {
    title: {
      absolute: `${ownerNickname}'s ${listType} - ${data.title}`,
    },
    description: `${description}`,
    authors: [{ name: `${ownerNickname}` }],
    openGraph: {
      title: `${title} By.${ownerNickname}`,
      description: `${description || `${ownerNickname}님의 취향을 기록한 리스트입니다.`}`,
      url: `https://listywave.com/list/${listId}`,
      type: 'website',
      images: [`${items[0].imageUrl}`, ...previousImages],
    },
  };
}

export default function ListDetailPage() {
  return (
    <section className={styles.wrapper}>
      <ListInformation />
    </section>
  );
}
