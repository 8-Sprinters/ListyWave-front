import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '@mui/material';

import * as styles from './Categories.css';

import getCategories from '@/app/_api/category/getCategories';
import { CategoryType } from '@/lib/types/categoriesType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

interface CategoriesProps {
  handleFetchListsOnCategory: (category: string) => void;
  selectedCategory: string;
}

export default function Categories({ handleFetchListsOnCategory, selectedCategory }: CategoriesProps) {
  const { data, isLoading } = useQuery<CategoryType[]>({
    queryKey: [QUERY_KEYS.getCategories],
    queryFn: getCategories,
    staleTime: Infinity, // 카테고리는 자주 변하는 데이터가 아니므로
  });

  const handleChangeCategory = (category: string) => () => {
    handleFetchListsOnCategory(category);
  };

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div className={styles.skeletonContainer}>
          {new Array(4).fill(0).map((_, index) => (
            <Skeleton key={index} variant="rounded" width={100} height={35} animation="wave" />
          ))}
        </div>
      ) : (
        data?.map((category) => (
          <button
            key={category.codeValue}
            onClick={handleChangeCategory(category.nameValue)}
            className={`${styles.button} ${category.nameValue === selectedCategory ? styles.variant : ''}`}
          >
            {category.korNameValue}
          </button>
        ))
      )}
    </div>
  );
}
