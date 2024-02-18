/**
 TODO 
 - [ ] 온보딩을 했던 사용자라면 해당 페이지 노출 x, 접근 x
 - [ ] 온보딩 중간 종료된 사용자는 온보딩 페이지 재노출 o
 */

import { useRouter } from 'next/navigation';
import { MouseEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';

import getCategories from '@/app/_api/category/getCategories';
import createList from '@/app/_api/list/createList';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { CategoryType } from '@/lib/types/categoriesType';
import { ListCreateType } from '@/lib/types/listType';
import { itemTitleRules } from '@/lib/constants/formInputValidationRules';
import toastMessage from '@/lib/constants/toastMessage';
import toasting from '@/lib/utils/toasting';

const onBoardlistTitleRules = {
  required: '제목을 입력해주세요',
  maxLength: {
    value: 30,
    message: '리스트 제목은 최대 30자까지 입력할 수 있어요.',
  },
};

export default function CreateListStep() {
  const router = useRouter();
  const [title, setTitle] = useState(''); // 사용 예정
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
    setValue,
    formState: { errors },
  } = useForm<ListCreateType>({
    mode: 'onChange',
    defaultValues: {
      ownerId: 13, // userId 변경 예정
      category: '',
      labels: [],
      collaboratorIds: [],
      title: '',
      description: '',
      isPublic: true,
      backgroundColor: '#FFFFFF',
      items: [
        {
          rank: 1,
          title: '',
          comment: '',
          link: '',
          imageUrl: '',
        },
        {
          rank: 2,
          title: '',
          comment: '',
          link: '',
          imageUrl: '',
        },
        {
          rank: 3,
          title: '',
          comment: '',
          link: '',
          imageUrl: '',
        },
      ],
    },
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
      setValue('category', category.nameValue);
    } else {
      console.log('선택한 카테고리를 찾을 수 없어요.');

      setSelectedCategory({
        nameValue: '',
        korNameValue: '',
      });
    }
  };

  console.log(selectedCategory); // 삭제 예정

  // 추후 구현
  // const handleChangeTitle = (e: any) => {
  //   console.log(e.target.value);
  //   setTitle(e.target.value);
  // };

  const onSubmit = async (data: ListCreateType) => {
    console.log('리스트 생성'); // 삭제 예정
    console.log(data); // 삭제 예정

    try {
      const result = await createList(data);

      if (result.listId) {
        router.push(`user/13/mylist`);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        toasting({ type: 'error', txt: toastMessage.ko.createListError });
      }
    }
  };

  const onError = () => {
    console.log('에러 발생');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
      <label>닉네임님만의 리스트를 만들어 보아요.</label>
      <p>무엇에 대한 리스트인가요?</p>
      <div onClick={handleChangeCategory}>
        {categories.map((category) => (
          <button key={category.codeValue} id={category.nameValue} type="button">
            {category.korNameValue}
          </button>
        ))}
      </div>
      <button type="button">다음으로</button>
      <br />
      <p>리스트의 제목을 지어주세요.</p>
      <input
        {...register('title', onBoardlistTitleRules)}
        placeholder="리스트의 제목을 지어주세요."
        autoComplete="off"
        // onChange={handleChangeTitle}
      />
      <p>{errors.title?.message}</p>
      <div>
        <span>{selectedCategory.korNameValue}</span>
        <p>{getValues('title')}</p>
      </div>
      <button type="button">다음으로</button>
      <br />
      <p>
        리스트에 넣을 1, 2, 3위 <br /> 아이템을 적어주세요.
      </p>
      <div>
        <span>{selectedCategory.korNameValue}</span>
        <p>{getValues('title')}</p>
        <div>
          {new Array(3).fill(0).map((_, index) => (
            <div key={index}>
              <input
                {...register(`items.${index}.title`, itemTitleRules)}
                placeholder={`${index + 1}위 아이템을 입력해주세요.`}
                autoComplete="off"
              />
              <p>{errors.items?.[index]?.title?.message}</p>
            </div>
          ))}
        </div>
      </div>
      <button type="submit">완료</button>
    </form>
  );
}
