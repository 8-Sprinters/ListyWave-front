'use client';

import { useState } from 'react';
import { FieldErrors, FormProvider, useForm } from 'react-hook-form';

import CreateItem from '@/app/create/_components/CreateItem';
import CreateList from '@/app/create/_components/CreateList';

import { ListCreateType } from '@/lib/types/listType';
import { createList } from '../_api/list/createList';

export type FormErrors = FieldErrors<ListCreateType>;

export default function CreatePage() {
  const [step, setStep] = useState<'list' | 'item'>('list');

  const handleStepChange = (step: 'list' | 'item') => {
    setStep(step);
  };

  const handleSubmit = async () => {
    try {
      const formData = methods.getValues();
      const response = await createList(formData);
      // console.log(response.data);
    } catch (error) {
      // console.error(error);
    }
  };

  const methods = useForm<ListCreateType>({
    mode: 'onChange',
    defaultValues: {
      ownerId: 2, // 로그인 후 수정 필요
      category: 'culture',
      labels: [],
      collaboratorIds: [],
      title: '',
      description: '',
      isPublic: true,
      backgroundColor: '#FFFFFF',
      items: [
        {
          rank: 0,
          title: '',
          comment: '',
          link: '',
        },
        {
          rank: 0,
          title: '',
          comment: '',
          link: '',
        },
        {
          rank: 0,
          title: '',
          comment: '',
          link: '',
        },
      ],
    },
  });
  const itemValue = methods.watch('items');

  //rank 정리하는 함수. 마지막에 한 번만 실행되게끔 하기 (submit)
  itemValue.forEach((item, index) => {
    item.rank = index + 1;
  });

  return (
    <div>
      <div>
        <FormProvider {...methods}>
          {step === 'list' ? (
            <CreateList
              onNextClick={() => {
                handleStepChange('item');
              }}
            />
          ) : (
            <CreateItem
              onBackClick={() => {
                handleStepChange('list');
              }}
              onSubmit={() => {
                handleSubmit();
              }}
            />
          )}
        </FormProvider>
      </div>
    </div>
  );
}
