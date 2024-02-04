'use client';

import { useState } from 'react';
import { FieldErrors, FormProvider, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

import { ItemImagesType, ListCreateType } from '@/lib/types/listType';
import CreateItem from '@/app/create/_components/CreateItem';
import CreateList from '@/app/create/_components/CreateList';
import { createList } from '../_api/list/createList';
import { uploadItemImages } from '../_api/list/uploadItemImages';

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

    //rank 정리
    originData.items.forEach((item, index) => {
      item.rank = index + 1;
    });

    //데이터 쪼개기
    const listData = {
      ...originData,
      items: originData.items.map(({ image, ...rest }) => rest),
    };

    const imageData: ItemImagesType = {
      ownerId: originData.ownerId,
      listId: 0, //temp
      extensionRanks: originData.items
        .map(({ rank, image }) => {
          return { rank: rank, extension: image?.[0]?.type.split('/')[1] as 'jpg' | 'jpeg' | 'png' };
        })
        .filter(({ extension }) => extension !== null && extension !== undefined),
    };

    const imageFileList: File[] = originData.items
      .map(({ image }) => image?.[0] as File)
      .filter((image) => image !== undefined);

    return { listData, imageData, imageFileList };
  };

  const saveImageMutation = useMutation({ mutationFn: uploadItemImages });

  const createListMutation = useMutation({
    mutationFn: createList,
    onSuccess: (data) => {
      saveImageMutation.mutate({
        listId: data.listId,
        imageData: formatData().imageData,
        imageFileList: formatData().imageFileList,
      });
    },
  });

  const handleSubmit = () => {
    const { listData, imageData, imageFileList } = formatData();
    createListMutation.mutate(listData);
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
