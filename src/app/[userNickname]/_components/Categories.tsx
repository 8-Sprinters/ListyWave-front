'use client';

/**
 TODO
 - [x] api 연동
 - [ ] 클릭했을때 로직 (상위요소에 핸들러 고민) (리팩토링)
 */

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import * as styles from './Categories.css';

import { getCategories } from '@/app/_api/category/getCategories';
import { CategoryType } from '@/lib/types/categoriesType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { DEFAULT_CATEGORY } from '@/lib/constants/common';

interface CategoriesProps {
  onClick: (kind: string) => void;
}

export default function Categories({ onClick }: CategoriesProps) {
  const [selected, setSelected] = useState(DEFAULT_CATEGORY);

  const { data } = useQuery<CategoryType[]>({
    queryKey: [QUERY_KEYS.getCategories],
    queryFn: getCategories,
  });

  // console.log(data); // 삭제 예정

  const handleChangeCategory = (category: string) => () => {
    onClick(category); // 함수이름 변경 필요
    setSelected(category);
  };

  return (
    <div className={styles.container}>
      {data?.map((category) => (
        <button
          key={category.codeValue}
          onClick={handleChangeCategory(category.korNameValue)}
          className={`${styles.button} ${category.korNameValue === selected ? styles.variant : ''}`}
        >
          {category.korNameValue}
        </button>
      ))}
    </div>
  );
}
