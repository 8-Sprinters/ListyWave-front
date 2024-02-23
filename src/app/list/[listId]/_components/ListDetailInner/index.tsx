'use client';

import { useState } from 'react';

import * as styles from './index.css';

import { ListDetailType } from '@/lib/types/listType';
import Header from '@/app/list/[listId]/_components/ListDetailInner/Header';
import RankList from '@/app/list/[listId]/_components/ListDetailInner/RankList';
import Footer from '@/app/list/[listId]/_components/ListDetailInner/Footer';

interface OptionsProps {
  value: string;
  label: string;
}

interface ListDetailInnerProps {
  data: ListDetailType;
  listId: number;
}

function ListDetailInner({ data, listId }: ListDetailInnerProps) {
  const listData = data?.items;
  const [listType, setListType] = useState('simple');

  const handleChangeListType = (target: OptionsProps) => {
    const value: string = target.value;
    setListType(value);
  };

  const footerData = {
    listId: listId,
    items: listData,
    category: data?.category,
    title: data?.title,
    description: data?.description,
    collaborators: data?.collaborators,
    ownerNickname: data?.ownerNickname,
    collectCount: data?.collectCount,
    viewCount: data?.viewCount,
    isCollected: data?.isCollected,
  };

  return (
    <div className={styles.container}>
      <Header handleChangeListType={handleChangeListType} />
      <div className={styles.listAndFooter}>
        <RankList backgroundColor={data?.backgroundColor} listData={listData} type={listType} />
        <Footer data={footerData} />
      </div>
    </div>
  );
}

export default ListDetailInner;
