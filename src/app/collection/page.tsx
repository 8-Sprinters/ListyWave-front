'use client';

import { useRouter } from 'next/navigation';

import Header from '@/components/Header/Header';
import * as styles from './page.css';
import { useQuery } from '@tanstack/react-query';
import { CategoryType } from '@/lib/types/categoriesType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import getCategories from '@/app/_api/category/getCategories';
import { MouseEvent } from 'react';
import { collectionLocale } from '@/app/collection/locale';
import { useLanguage } from '@/store/useLanguage';

export default function CollectionPage() {
  const { language } = useLanguage();
  const router = useRouter();

  const { data } = useQuery<CategoryType[]>({
    queryKey: [QUERY_KEYS.getCategories],
    queryFn: getCategories,
  });

  const handleCategoryClick = (e: MouseEvent<HTMLDivElement>) => {
    const category = e.currentTarget.dataset.value;
    router.push(`/collection/${category}`);
  };

  return (
    <>
      <Header
        title={collectionLocale[language].collection}
        left="back"
        leftClick={() => {
          router.back();
        }}
        right={<div></div>}
      />
      <div className={styles.container}>
        <div className={styles.categoryFolders}>
          {data &&
            data.map((category) => (
              <div
                className={styles.category}
                key={category.codeValue}
                onClick={handleCategoryClick}
                data-value={category.nameValue}
              >
                <div className={styles.categoryText}>{category.korNameValue}</div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
