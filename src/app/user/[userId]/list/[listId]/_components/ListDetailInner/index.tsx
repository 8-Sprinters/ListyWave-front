'use client';

import { useState } from 'react';
import Header from '@/app/user/[userId]/list/[listId]/_components/ListDetailInner/Header';
import RankList from '@/app/user/[userId]/list/[listId]/_components/ListDetailInner/RankList';
import Footer from '@/app/user/[userId]/list/[listId]/_components/ListDetailInner/Footer';
import * as styles from './index.css';
import { ListDetailType } from '@/lib/types/listType';
import { useUser } from '@/store/useUser';

export interface ListItemProps {
  id?: number;
  rank?: number;
  ranking?: number;
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
  data: ListDetailType;
  listId: string | null;
}

function ListDetailInner({ data, listId }: ListDetailInnerProps) {
  const listData = data?.items;
  const [listType, setListType] = useState('simple');


  const handleChangeListType = (target: OptionsProps) => {
    const value: string = target.value;
    setListType(value);
  };

  const footerData = {
    category: data?.category,
    listId: listId,
    title: data?.title,
    description: data?.description,
    items: listData,
    collaborators: data?.collaborators,
    ownerNickname: data?.ownerNickname,
  };

  return (
    <div className={styles.container}>
      <Header handleChangeListType={handleChangeListType} />
      <div className={styles.listAndFooter}>
        <RankList listData={listData} type={listType} />
        <Footer data={footerData}/>
      </div>
    </div>
  );
}

export default ListDetailInner;
