'use client';

import { useState } from 'react';
import { FieldErrors, FormProvider, useForm } from 'react-hook-form';
import CreateItem from '@/app/create/_components/CreateItem';
import CreateList from '@/app/create/_components/CreateList';
import { ItemImagesType } from '@/lib/types/listType';
import { sendItemImages } from '../_api/list/sendItemImages';
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

    const imageData: ItemImagesType = {
      ownerId: originData.ownerId,
      listId: 1, //temp
      extensionRanks: originData.items
        .map(({ rank, image }) => {
          return { rank: rank, extension: image?.[0]?.type.split('/')[1] as 'jpg' | 'jpeg' | 'png' };
        })
        .filter(({ extension }) => extension !== null && extension !== undefined),
    };

    const imageFileList: File[] = originData.items
      .map(({ image }) => image?.[0] as File)
      .filter((image) => image !== undefined);

    return { requestData, imageData, imageFileList };
  };

  const handleSubmit = async () => {
    try {
      const response = await createList(formatData().requestData);
      const { imageData, imageFileList } = formatData(); //연결필요
      sendItemImages(imageData, imageFileList);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
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
            onSubmitClick={handleSubmit}
          />
        )}
      </FormProvider>
    </>
  );
}
