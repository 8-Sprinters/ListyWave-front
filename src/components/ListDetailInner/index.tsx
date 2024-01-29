'use client';

import Header from '@/components/ListDetailInner/Header/Header';
import RankList from '@/components/ListDetailInner/RankList/RankList';
import Footer from '@/components/ListDetailInner/Footer/Footer';
import MOCKDATA_LIST from '@/components/ListDetailInner/MockData';
import { useState } from 'react';
import * as styles from '@/components/ListDetailInner/style.css';

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

// 테스트용 코드
const initialValue: ListItemProps[] = MOCKDATA_LIST[0].items ?? [];

function ListDetailInner() {
  const listData = initialValue;

  const [listType, setListType] = useState('simple');
  const handleChangeListType = (target: OptionsProps) => {
    const value: string = target.value;
    setListType(value);
  };

  return (
    <div className={styles.container}>
      <Header handleChangeListType={handleChangeListType} />
      <div className={styles.listAndFooter}>
        <RankList listData={listData} type={listType} />
        <Footer />
      </div>
    </div>
  );
}

export default ListDetailInner;
