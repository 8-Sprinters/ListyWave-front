'use client';

import { ListType, UserType } from '@/app/[userNickname]/[listId]/mockData/mockDataTypes';
import Top3Card from '@/app/search/_components/Top3Card';
import FloatingContainer from '@/components/floatingButton/FloatingContainer';
import PlusButton from '@/components/floatingButton/PlusOptionFloatingButton';
import ArrowUpButton from '@/components/floatingButton/ArrowUpFloatingButton';
import SelectComponent from '@/components/SelectComponent/SelectComponent';
import { useState } from 'react';
import * as styles from './SearchKeywordResult.css';

interface OptionsProps {
  value: string;
  label: string;
}

const dropdownOptions = [
  {
    value: 'new',
    label: '최신순',
  },
  {
    value: 'old',
    label: '오래된순',
  },
  {
    value: 'relate',
    label: '관련도순',
  },
  {
    value: 'collect',
    label: '콜렉트순',
  },
];

function SortArea() {
  const [sort, setSort] = useState('new');

  const handleChangeSortType = (target: OptionsProps) => {
    const value: string = target.value;
    setSort(value);
  };

  return (
    <div className={styles.sortWrapper}>
      <SelectComponent name="listType" options={dropdownOptions} isSearchable={false} onChange={handleChangeSortType} />
    </div>
  );
}

// type = keyword, category
function SearchKeywordResult({ user, data }: { user: UserType; data: [] }) {
  console.log(data);
  return (
    <div>
      <SortArea />
      <div className={styles.cardWrapper}>
        {data.resultLists.map((list: ListType) => (
          <Top3Card key={list.listId} list={list} />
        ))}
      </div>
      <FloatingContainer>
        <PlusButton />
        <ArrowUpButton />
      </FloatingContainer>
    </div>
  );
}

export default SearchKeywordResult;
