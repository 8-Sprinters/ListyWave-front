import { MouseEventHandler } from 'react';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

import * as styles from './CategoryArea.css';

import { CategoryType } from '@/lib/types/categoriesType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import getCategories from '@/app/_api/category/getCategories';
import CategoryAreaSkeleton from '@/app/search/_components/CategoryAreaSkeleton';

import tempImageSrc from '/public/images/mock_profile.png';
import CheckIcon from '/public/icons/check_red.svg';

// TODO: 추후 카테고리 리스트 get요청시 'imageUrl'을 받기로했습니다.

function CategoryArea({ onClick }: { onClick: MouseEventHandler }) {
  const searchParams = useSearchParams();
  const categoryValue = searchParams?.get('category');

  const { data, isFetching } = useQuery<CategoryType[]>({
    queryKey: [QUERY_KEYS.getCategories],
    queryFn: getCategories,
  });

  return (
    <div className={styles.categoryWrapper}>
      {isFetching
        ? Array.from({ length: 6 }).map((_, index) => <CategoryAreaSkeleton key={index} />)
        : data &&
          data.map((category) => (
            <div className={styles.category} key={category.codeValue} onClick={onClick} data-value={category.nameValue}>
              {/*<img className={styles.itemImage} src={category.imageUrl} alt={category.korNameValue}/>*/}
              <Image
                src={tempImageSrc}
                className={categoryValue === category.nameValue ? styles.selectedCategoryImage : styles.categoryImage}
                alt={category.korNameValue}
              />
              <div className={styles.categoryText}>{category.korNameValue}</div>
              {categoryValue === category.nameValue && (
                <div className={styles.selectedIconWrapper}>
                  <CheckIcon className={styles.selectedIcon} />
                </div>
              )}
            </div>
          ))}
    </div>
  );
}

export default CategoryArea;
