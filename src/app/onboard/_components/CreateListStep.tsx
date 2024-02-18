import { MouseEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';

import getCategories from '@/app/_api/category/getCategories';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { CategoryType } from '@/lib/types/categoriesType';
import { ListCreateType } from '@/lib/types/listType';

const onBoardlistTitleRules = {
  required: '제목을 입력해주세요',
  maxLength: {
    value: 30,
    message: '리스트 제목은 최대 30자까지 입력할 수 있어요.',
  },
};

export default function CreateListStep() {
  const [title, setTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState({
    nameValue: '',
    korNameValue: '',
  });

  const { data } = useQuery<CategoryType[]>({
    queryKey: [QUERY_KEYS.getCategories],
    queryFn: getCategories,
  });

  const categories = data ? data?.filter((category) => category.korNameValue !== '전체') : [];

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ListCreateType>({
    mode: 'onChange',
  });

  const handleChangeCategory = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      return;
    }

    const targetId = (e.target as HTMLButtonElement).id;
    const category = data?.find((category) => category.nameValue === targetId);

    console.log(category); // 삭제 예정

    if (category) {
      setSelectedCategory({
        nameValue: category.nameValue,
        korNameValue: category.korNameValue,
      });
    } else {
      console.log('선택한 카테고리를 찾을 수 없어요.');

      setSelectedCategory({
        nameValue: '',
        korNameValue: '',
      });
    }
  };

  console.log(selectedCategory);

  // const handleChangeTitle = (e: any) => {
  //   console.log(e.target.value);
  //   setTitle(e.target.value);
  // };

  const onSubmit = () => {
    console.log('리스트 생성');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <label>닉네임님만의 리스트를 만들어 보아요.</label>
      <p>무엇에 대한 리스트인가요?</p>
      <div onClick={handleChangeCategory}>
        {categories.map((category) => (
          <button key={category.codeValue} id={category.nameValue} type="button">
            {category.korNameValue}
          </button>
        ))}
      </div>
      {/* <button type="submit">다음으로</button> */}
      <br />
      <p>리스트의 제목을 지어주세요.</p>
      <input
        {...register('title', onBoardlistTitleRules)}
        placeholder="리스트의 제목을 지어주세요."
        // onChange={handleChangeTitle}
      />
      <p>{errors.title?.message}</p>
      <div>
        <span>{selectedCategory.korNameValue}</span>
        <p>{getValues('title')}</p>
      </div>
      {/* <button type="submit">다음으로</button> */}
    </form>
  );
}
