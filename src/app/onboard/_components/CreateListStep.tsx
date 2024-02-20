/**
 TODO 
 - [ ] 온보딩을 했던 사용자라면 해당 페이지 노출 x, 접근 x
 - [ ] 온보딩 중간 종료된 사용자는 온보딩 페이지 재노출 o
 - [ ] 온보딩 중 뒤로가기 방지
 - [ ] 리스트 완성 후 뒤로가기 
 */

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import createList from '@/app/_api/list/createList';

import { CategoryType } from '@/lib/types/categoriesType';
import { ListCreateType } from '@/lib/types/listType';
import toastMessage from '@/lib/constants/toastMessage';
import toasting from '@/lib/utils/toasting';

import Category from './Category';
import ListTitleStep from './ListTitleStep';
import ItemsStep from './ItemsStep';

interface CreateListStepProps {
  userId: number;
}

export default function CreateListStep({ userId }: CreateListStepProps) {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [title, setTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState({
    nameValue: '',
    korNameValue: '',
  });

  const methods = useForm<ListCreateType>({
    mode: 'onChange',
    defaultValues: {
      ownerId: userId,
      category: '',
      labels: [],
      collaboratorIds: [],
      title: '',
      description: '',
      isPublic: true,
      backgroundColor: '#FFFFFF', // default 색상 변경
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

  console.log(selectedCategory); // 삭제 예정
  console.log(stepIndex); // 삭제 예정

  const handleNextStep = () => {
    setStepIndex((prev) => prev + 1);
  };

  const handleChangeCategory = (category: Omit<CategoryType, 'codeValue'>) => {
    setSelectedCategory({
      nameValue: category.nameValue,
      korNameValue: category.korNameValue,
    });
  };

  console.log(selectedCategory);

  const onSubmit = async (data: ListCreateType) => {
    console.log('리스트 생성'); // 삭제 예정
    console.log(data); // 삭제 예정

    try {
      const result = await createList(data);

      if (result.listId) {
        router.push(`user/${userId}/mylist`);
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
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onError)} noValidate>
        {stepIndex === 0 && (
          <div>
            <p>닉네임님만의 리스트를 만들어 보아요.</p>
            <Category handleChangeCategory={handleChangeCategory} />
            <button type="button" onClick={handleNextStep}>
              다음으로
            </button>
          </div>
        )}
        {stepIndex === 1 && (
          <div>
            <ListTitleStep selectedCategory={selectedCategory} title={title} setTitle={setTitle} />
            <button type="button" onClick={handleNextStep}>
              다음으로
            </button>
          </div>
        )}
        {stepIndex === 2 && (
          <div>
            <ItemsStep selectedCategory={selectedCategory} title={title} />
            <button type="submit">완료</button>
          </div>
        )}
      </form>
    </FormProvider>
  );
}
