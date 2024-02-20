import { MouseEvent } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';

import getCategories from '@/app/_api/category/getCategories';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { CategoryType } from '@/lib/types/categoriesType';

interface CategoryProps {
  handleChangeCategory: (category: Omit<CategoryType, 'codeValue'>) => void;
}

export default function Category({ handleChangeCategory }: CategoryProps) {
  const { setValue } = useFormContext();

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

    console.log(category); // 삭제 예정

    if (category) {
      handleChangeCategory({
        nameValue: category.nameValue,
        korNameValue: category.korNameValue,
      });
      setValue('category', category.nameValue);
    } else {
      console.log('선택한 카테고리를 찾을 수 없어요.');

      handleChangeCategory({
        nameValue: '',
        korNameValue: '',
      });
    }
  };

  return (
    <>
      <label>무엇에 대한 리스트인가요?</label>
      <div onClick={onClickChangeCategory}>
        {categories.map((category) => (
          <button key={category.codeValue} id={category.nameValue} type="button">
            {category.korNameValue}
          </button>
        ))}
      </div>
    </>
  );
}
