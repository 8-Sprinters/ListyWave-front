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

import * as styles from './CreateNicknameStep.css';
import createList from '@/app/_api/list/createList';

import { CategoryType } from '@/lib/types/categoriesType';
import { ListCreateType } from '@/lib/types/listType';
import toastMessage from '@/lib/constants/toastMessage';
import toasting from '@/lib/utils/toasting';

import ChoiceCategory from './ChoiceCategory';
import RegisterListTitle from './RegisterListTitle';
import RegisterItems from './RegisterItems';

interface CreateListStepProps {
  userId: number;
  nickname: string;
}

export default function CreateListStep({ userId, nickname }: CreateListStepProps) {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
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

  const {
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = methods;

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
  console.log(isValid);

  const onSubmit = async (data: ListCreateType) => {
    console.log('리스트 생성'); // 삭제 예정
    console.log(data); // 삭제 예정

    if (!isValid) return;

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

  return (
    <FormProvider {...methods}>
      <div className={styles.background}>
        {stepIndex === 0 && (
          <>
            <div className={styles.step}>
              <div className={styles.barContainer}>
                <span className={styles.bar.dafult}></span>
                <span className={selectedCategory.nameValue ? styles.statusBar.divide : styles.statusBar.zero}></span>
              </div>
              <p className={styles.stepText}>step2</p>
            </div>
            <p className={styles.subTitle}>
              <span>{`"${nickname}"`}</span>
              <span>님만의 리스트를 만들어 보아요.</span>
            </p>
            <div className={styles.container}>
              <ChoiceCategory handleChangeCategory={handleChangeCategory} />
              <button
                type="button"
                onClick={handleNextStep}
                className={selectedCategory.nameValue ? styles.variant.active : styles.variant.default}
                disabled={!selectedCategory.nameValue}
              >
                다음으로
              </button>
            </div>
          </>
        )}
        {stepIndex === 1 && (
          <>
            <div className={styles.step}>
              <div className={styles.barContainer}>
                <span className={styles.bar.dafult}></span>
                <span
                  className={!getValues('title') || errors.title ? styles.statusBar.divide : styles.statusBar.sixty}
                ></span>
              </div>
              <p className={styles.stepText}>step2</p>
            </div>
            <div className={styles.container}>
              <RegisterListTitle selectedCategory={selectedCategory} />
              <button
                type="button"
                onClick={handleNextStep}
                className={!getValues('title') || errors.title ? styles.variant.default : styles.variant.active}
                disabled={!getValues('title') || !!errors.title}
              >
                다음으로
              </button>
            </div>
          </>
        )}
        {stepIndex === 2 && (
          <>
            <div className={styles.step}>
              <div className={styles.barContainer}>
                <span className={styles.bar.dafult}></span>
                <span className={isValid ? styles.statusBar.full : styles.statusBar.sixty}></span>
              </div>
              <p className={styles.stepText}>step2</p>
            </div>
            <div className={styles.container}>
              <RegisterItems selectedCategory={selectedCategory} />
              <button
                type="button"
                onClick={handleSubmit(onSubmit)}
                className={isValid ? styles.variant.active : styles.variant.default}
                disabled={!isValid}
              >
                완료
              </button>
            </div>
          </>
        )}
      </div>
    </FormProvider>
  );
}
