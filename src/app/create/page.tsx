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

  const methods = useForm<ListCreateType>({
    mode: 'onChange',
    defaultValues: {
      ownerId: 2, //로그인 후 수정 필요
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
          image: null,
        },
        {
          rank: 0,
          title: '',
          comment: '',
          link: '',
          image: null,
        },
        {
          rank: 0,
          title: '',
          comment: '',
          link: '',
          image: null,
        },
      ],
    },
  });

  const handleStepChange = (step: 'list' | 'item') => {
    setStep(step);
  };

  const handleSubmit = async () => {
    try {
      const response = await createList(formatData().requestData);
      // console.log(response.data);
    } catch (error) {
      // console.error(error);
    }
  };

  //request용 데이터 만드는 함수.
  const formatData = () => {
    const originData = methods.getValues();

    originData.items.forEach((item, index) => {
      //rank 정리
      item.rank = index + 1;
    });

    const requestData = {
      ...originData,
      items: originData.items.map(({ image, ...rest }) => rest),
    };

    const imageData = {
      ownerId: originData.ownerId,
      listId: 1, //temp
      extensionsRanks: originData.items
        .map(({ rank, image }) => {
          return { rank: rank, extension: image?.[0].type.split('/')[1] };
        })
        .filter(({ extension }) => {
          return extension !== undefined;
        }),
    };

    return { requestData, imageData };
  };

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
