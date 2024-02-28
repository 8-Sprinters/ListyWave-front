import { MouseEventHandler } from 'react';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

import * as styles from './CategoryArea.css';

import { CategoryType } from '@/lib/types/categoriesType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import getCategories from '@/app/_api/category/getCategories';
import CategoryAreaSkeleton from '@/app/search/_components/CategoryAreaSkeleton';

import CheckIcon from '/public/icons/check_red.svg';
import { useLanguage } from '@/store/useLanguage';
import { searchLocale } from '@/app/search/locale';
import ChevronRight from '/public/icons/chevron_right_double.svg';

function CategoryArea({ onClick }: { onClick: MouseEventHandler }) {
  const { language } = useLanguage();

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
              <Image
                className={categoryValue === category.nameValue ? styles.selectedCategoryImage : styles.categoryImage}
                src={category.categoryImageUrl ?? ''}
                alt={category.korNameValue}
                width="60"
                height="60"
              />
              <div className={styles.categoryText}>
                {language === 'ko' ? category.korNameValue : category.nameValue}
              </div>
              {categoryValue === category.nameValue && (
                <div className={styles.selectedIconWrapper}>
                  <CheckIcon className={styles.selectedIcon} />
                </div>
              )}
            </div>
          ))}
      {/*<div className={styles.scrollMessage}>{searchLocale[language].rightScrollMessage}</div>*/}
      <div className={styles.scrollMessage}>
        <ChevronRight width={20} height={20} />
      </div>
    </div>
  );
}

export default CategoryArea;
