'use client';

/**
 TODO
 - [ ] 클릭했을때 로직 (상위요소에 핸들러 고민) (리팩토링)
 */

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import * as styles from './Categories.css';

import { getCategories } from '@/app/_api/category/getCategories';
import { CategoryType } from '@/lib/types/categoriesType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

interface CategoriesProps {
  handleFetchListsOnCategory: (category: string) => void;
}

export const DEFAULT_CATEGORY = 'entire';

export default function Categories({ handleFetchListsOnCategory }: CategoriesProps) {
  const [selected, setSelected] = useState(DEFAULT_CATEGORY);

  const { data } = useQuery<CategoryType[]>({
    queryKey: [QUERY_KEYS.getCategories],
    queryFn: getCategories,
  });

  const handleChangeCategory = (category: string) => () => {
    handleFetchListsOnCategory(category);
    setSelected(category);
  };

  return (
    <div className={styles.container}>
      {data?.map((category) => (
        <button
          key={category.codeValue}
          onClick={handleChangeCategory(category.nameValue)}
          className={`${styles.button} ${category.nameValue === selected ? styles.variant : ''}`}
        >
          {category.korNameValue}
        </button>
      ))}
    </div>
  );
}
