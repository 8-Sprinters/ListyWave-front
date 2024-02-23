'use client';

import { useEffect, useState } from 'react';
import { FieldErrors, FormProvider, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import CreateItem from '@/app/list/create/_components/CreateItem';
import CreateList from '@/app/list/create/_components/CreateList';
import { ItemImagesType, ListCreateType } from '@/lib/types/listType';
import toasting from '@/lib/utils/toasting';
import toastMessage from '@/lib/constants/toastMessage';
import createList from '@/app/_api/list/createList';
import uploadItemImages from '@/app/_api/list/uploadItemImages';
import { useUser } from '@/store/useUser';

export type FormErrors = FieldErrors<ListCreateType>;

export default function CreatePage() {
  const { user: owner } = useUser();
  const [step, setStep] = useState<'list' | 'item'>('list');
  const router = useRouter();

  const methods = useForm<ListCreateType>({
    mode: 'onChange',
    defaultValues: {
      ownerId: owner.id || 0, // 수정필요
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
      ownerId: owner.id || 0,
      listId: 0, //temp
      extensionRanks: originData.items
        .filter(({ imageUrl }) => imageUrl !== '')
        .map(({ rank, imageUrl }) => {
          return {
            rank: rank,
            extension:
              typeof imageUrl === 'object' ? (imageUrl?.[0]?.type.split('/')[1] as 'jpg' | 'jpeg' | 'png') : '',
          };
        }),
    };

    const imageFileList: File[] = originData.items
      .filter(({ imageUrl }) => imageUrl !== '')
      .map(({ imageUrl }) => imageUrl?.[0] as File);

    return { listData, imageData, imageFileList };
  };

  const { mutate: uploadImageMutate, isPending: isUploadingImage } = useMutation({
    mutationFn: uploadItemImages,
    retry: 3,
    retryDelay: 1000,
    onError: () => {
      toasting({ type: 'error', txt: toastMessage.ko.uploadImageError });
    },
  });

  const {
    mutate: createListMutate,
    isPending: isCreatingList,
    isSuccess,
  } = useMutation({
    mutationFn: createList,
    onSuccess: (data) => {
      if (formatData().imageData.extensionRanks.length !== 0) {
        uploadImageMutate({
          listId: data.listId,
          imageData: formatData().imageData,
          imageFileList: formatData().imageFileList,
        });
      }
      router.push(`/user/${formatData().listData.ownerId}/list/${data.listId}`);
    },
    onError: () => {
      toasting({ type: 'error', txt: toastMessage.ko.createListError });
    },
  });

  const handleSubmit = () => {
    const { listData } = formatData();
    createListMutate(listData);
  };

  //TODO: api에 ownerId 지워지면 아래 코드 삭제
  useEffect(() => {
    methods.setValue('ownerId', owner.id || 0);
  }, [owner]);

  return (
    <>
      <FormProvider {...methods}>
        {step === 'list' ? (
          <CreateList
            onNextClick={() => {
              handleStepChange('item');
            }}
            type="create"
          />
        ) : (
          <CreateItem
            onBackClick={() => {
              handleStepChange('list');
            }}
            onSubmitClick={handleSubmit}
            isSubmitting={isUploadingImage || isCreatingList || isSuccess}
            type="create"
          />
        )}
      </FormProvider>
    </>
  );
}
