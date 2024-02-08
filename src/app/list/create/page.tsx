'use client';

import { useState } from 'react';
import { FieldErrors, FormProvider, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import CreateItem from '@/app/list/create/_components/CreateItem';
import CreateList from '@/app/list/create/_components/CreateList';
import { ItemImagesType, ListCreateType } from '@/lib/types/listType';
import toasting from '@/lib/utils/toasting';
import { creaetListToastMessage } from '@/lib/constants/toastMessage';
import { createList } from '@/app/_api/list/createList';
import { uploadItemImages } from '@/app/_api/list/uploadItemImages';

export type FormErrors = FieldErrors<ListCreateType>;

export default function CreatePage() {
  const [step, setStep] = useState<'list' | 'item'>('list');
  const [newListId, setNewListId] = useState(0);
  const router = useRouter();

  const methods = useForm<ListCreateType>({
    mode: 'onChange',
    defaultValues: {
      ownerId: 2, //로그인 후 수정 필요
      category: '',
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
          imageUrl: '',
        },
        {
          rank: 0,
          title: '',
          comment: '',
          link: '',
          imageUrl: '',
        },
        {
          rank: 0,
          title: '',
          comment: '',
          link: '',
          imageUrl: '',
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
    const listData: ListCreateType = {
      ...originData,
      items: originData.items.map(({ imageUrl, ...rest }) => {
        return {
          ...rest,
          imageUrl: '',
        };
      }),
    };

    const imageData: ItemImagesType = {
      ownerId: originData.ownerId,
      listId: 0, //temp
      extensionRanks: originData.items
        .filter(({ imageUrl }) => imageUrl !== '')
        .map(({ rank, imageUrl }) => {
          return {
            rank: rank,
            extension: imageUrl !== '' ? (imageUrl?.[0]?.type.split('/')[1] as 'jpg' | 'jpeg' | 'png') : '',
          };
        }),
    };

    const imageFileList: File[] = originData.items
      .filter(({ imageUrl }) => imageUrl !== '')
      .map(({ imageUrl }) => imageUrl?.[0] as File);

    return { listData, imageData, imageFileList };
  };

  const { mutate: saveImageMutate, isPending: isUploadingImage } = useMutation({
    mutationFn: uploadItemImages,
    retry: 3,
    retryDelay: 1000,
    onError: () => {
      toasting({ type: 'error', txt: creaetListToastMessage.uploadImageError });
    },
    onSettled: () => {
      router.push(`/user/${formatData().listData.ownerId}/list/${newListId}`);
    },
  });

  const {
    mutate: createListMutate,
    isPending: isCreatingList,
    isSuccess,
  } = useMutation({
    mutationFn: createList,
    onSuccess: (data) => {
      setNewListId(data.listId);
      saveImageMutate({
        listId: data.listId,
        imageData: formatData().imageData,
        imageFileList: formatData().imageFileList,
      });
    },
    onError: () => {
      toasting({ type: 'error', txt: creaetListToastMessage.createListError });
    },
  });

  const handleSubmit = () => {
    const { listData } = formatData();
    createListMutate(listData);
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
            isSubmitting={isUploadingImage || isCreatingList || isSuccess}
          />
        )}
      </FormProvider>
    </>
  );
}
