import { MouseEvent } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';

import * as styles from './CategoryButton.css';
import getCategories from '@/app/_api/category/getCategories';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { CategoryType } from '@/lib/types/categoriesType';
import { startListyLocale } from '@/app/start-listy/locale';
import { useLanguage } from '@/store/useLanguage';

interface CategoryProps {
  handleChangeCategory: (category: Omit<CategoryType, 'codeValue'>) => void;
}

export default function ChoiceCategory({ handleChangeCategory }: CategoryProps) {
  const { language } = useLanguage();
  const { setValue, getValues } = useFormContext();

  const { data } = useQuery<CategoryType[]>({
    queryKey: [QUERY_KEYS.getCategories],
    queryFn: getCategories,
  });

  const categories = data ? data?.filter((category) => category.korNameValue !== '전체') : [];

  const onClickChangeCategory = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      return;
    }

    const targetId = (e.target as HTMLButtonElement).id;
    const category = data?.find((category) => category.nameValue === targetId);

    if (category) {
      handleChangeCategory({
        nameValue: category.nameValue,
        korNameValue: category.korNameValue,
      });
      setValue('category', category.nameValue);
    } else {
      console.log(startListyLocale[language].notFountCategory);
      handleChangeCategory({
        nameValue: '',
        korNameValue: '',
      });
    }
  };

  return (
    <>
      <label className={styles.title}>{startListyLocale[language].whatAbout}</label>
      <div onClick={onClickChangeCategory} className={styles.container}>
        {categories.map((category) => (
          <button
            key={category.codeValue}
            id={category.nameValue}
            type="button"
            className={
              category.nameValue === getValues('category')
                ? `${styles.variants[`${category.nameValue}Button`]} ${styles.selected}`
                : styles.variants[`${category.nameValue}Button`]
            }
          >
            {category.korNameValue}
          </button>
        ))}
      </div>
    </>
  );
}
