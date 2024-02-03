'use client';

/**
 TODO
 - [ ] api 연동
 - [ ] 클릭했을때 로직 (상위요소에 핸들러 고민) (리팩토링)
 */
import { KINDS } from '../mockData/categories'; // 삭제 예정

import { useState } from 'react';
// import { useQuery } from '@tanstack/react-query'; // 주석 import 나중에 사용 예정

import * as styles from './Categories.css';

// import { getCategories } from '@/app/_api/getCategories';
// import { CategoriesType } from '@/lib/types/categoriesType';
// import { queryKeys } from '@/lib/constants/queryKeys';

interface CategoriesProps {
  onClick: (kind: string) => void;
}

const DEFAULT_CATEGORY = '전체'; // 나중에 constants 파일로 분리

export default function Categories({ onClick }: CategoriesProps) {
  const [selected, setSelected] = useState(DEFAULT_CATEGORY);

  // 1. 카테고리 api 요청
  // const { data } = useQuery<CategoriesType>({
  //   queryKey: [queryKeys.getCategories],
  //   queryFn: getCategories,
  // });

  const handleChangeCategory = (kind: string) => () => {
    onClick(kind);
    setSelected(kind);
  };

  return (
    <div className={styles.container}>
      {KINDS.map((kind) => (
        <button
          key={kind.codeValue}
          onClick={handleChangeCategory(kind.korNameValue)}
          className={`${styles.button} ${kind.korNameValue === selected ? styles.variant : ''}`}
        >
          {kind.korNameValue}
        </button>
      ))}
    </div>
  );
}
