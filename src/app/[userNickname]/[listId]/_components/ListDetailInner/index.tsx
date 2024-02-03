'use client';

import Header from '@/app/[userNickname]/[listId]/_components/ListDetailInner/Header';
import RankList from '@/app/[userNickname]/[listId]/_components/ListDetailInner/RankList';
import Footer from '@/app/[userNickname]/[listId]/_components/ListDetailInner/Footer';
import { useState } from 'react';
import * as styles from './index.css';

export interface ListItemProps {
  id?: number;
  rank?: number;
  title?: string;
  comment?: string;
  link?: string | null;
  imageUrl?: string | null;
}

interface OptionsProps {
  value: string;
  label: string;
}

interface ListDetailInnerProps {
  listId: string;
  category: string;
  labels: [];
  title: string;
  description: string;
  createdDate: string;
  lastUpdatedDate: string;
  ownerId: number;
  ownerNickname: string;
  ownerProfileImageUrl: string;
  collaborators: [];
  items: [];
  isCollected: boolean;
  isPublic: boolean;
  backgroundColor: string;
  collectCount: number;
  viewCount: number;
}

function ListDetailInner({ data }: { data: ListDetailInnerProps }) {
  const listData = data.items;

  const [listType, setListType] = useState('simple');
  const handleChangeListType = (target: OptionsProps) => {
    const value: string = target.value;
    setListType(value);
  };

  const footerData = {
    category: data.category,
    listId: data.listId,
    title: data.title,
    description: data.description,
  };

  return (
    <div className={styles.container}>
      <Header handleChangeListType={handleChangeListType} />
      <div className={styles.listAndFooter}>
        <RankList listData={listData} type={listType} />
        <Footer data={footerData} />
      </div>
    </div>
  );
}

export default ListDetailInner;
