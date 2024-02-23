'use client';

import { useEffect, useState } from 'react';
import { FieldErrors, FormProvider, useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter, useParams } from 'next/navigation';

import CreateItem from '@/app/list/create/_components/CreateItem';
import CreateList from '@/app/list/create/_components/CreateList';

import { useUser } from '@/store/useUser';
import updateList from '@/app/_api/list/updateList';
import getListDetail from '@/app/_api/list/getListDetail';
import getCategories from '@/app/_api/category/getCategories';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { ItemImagesType, ListDetailType, ListEditType } from '@/lib/types/listType';
import { CategoryType } from '@/lib/types/categoriesType';

export type FormErrors = FieldErrors<ListEditType>;

export default function EditPage() {
  const router = useRouter();
  const param = useParams<{ userId: string; listId: string }>();
  const { user: owner } = useUser();

  const [step, setStep] = useState<'list' | 'item'>('list');
  const [isItemChanged, setIsItemChanged] = useState(false);

  const { data: listDetailData } = useQuery<ListDetailType>({
    queryKey: [QUERY_KEYS.getListDetail, param?.listId],
    queryFn: () => getListDetail(Number(param?.listId)),
  });

  const { data: categories } = useQuery<CategoryType[]>({
    queryKey: [QUERY_KEYS.getCategories],
    queryFn: () => getCategories(),
  });

  const methods = useForm<ListEditType>({
    mode: 'onChange',
    defaultValues: {
      category: 'culture',
      labels: [],
      collaboratorIds: [],
      title: '',
      description: '',
      isPublic: true,
      backgroundColor: '#ffffff',
      items: [],
    },
  });

  //request용 데이터 만드는 함수.

  const formatData = () => {
    const originData = methods.getValues();

    //rank 정리
    originData.items.forEach((item, index) => {
      item.rank = index + 1;
    });

    //데이터 쪼개기
    const listData: ListEditType = {
      ...originData,
      items: originData.items.map(({ imageUrl, ...rest }) => {
        return {
          ...rest,
          imageUrl: '',
        };
      }),
    };

    const imageData: ItemImagesType = {
      ownerId: Number(listDetailData?.ownerId),
      listId: Number(param?.listId),
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

  const handleStepChange = (step: 'list' | 'item') => {
    setStep(step);
  };

  const handleSubmit = () => {
    const { listData, imageData, imageFileList } = formatData();
    const updateData = {
      listId: Number(param?.listId) || 0,
      listData: listData,
      isItemChanged: isItemChanged,
      imageData: imageData,
      imageFileList: imageFileList,
    };
    updateListMutation(updateData);
  };

  useEffect(() => {
    if (listDetailData) {
      methods.reset({
        category: categories?.find((c) => c.korNameValue === listDetailData.category)?.nameValue || 'culture',
        labels: listDetailData.labels.map((obj) => obj.name),
        collaboratorIds: listDetailData.collaborators,
        title: listDetailData.title,
        description: listDetailData.description,
        isPublic: listDetailData.isPublic,
        backgroundColor: listDetailData.backgroundColor,
        items: listDetailData.items.map(({ id, rank, title, comment, link, imageUrl }) => {
          return {
            rank: rank,
            id: id,
            title: title,
            comment: comment ? comment : '',
            link: link ? link : '',
            imageUrl: typeof imageUrl === 'string' ? imageUrl : '',
          };
        }),
      });
    }
  }, [listDetailData, categories, methods]);

  const {
    mutate: updateListMutation,
    isPending: isUpdatingList,
    isSuccess,
  } = useMutation({
    mutationFn: updateList,
    onSettled: () => {
      router.push(`/user/${owner.id}/list/${param?.listId}`);
    },
  });

  return (
    <>
      <FormProvider {...methods}>
        {step === 'list' ? (
          <CreateList
            onNextClick={() => {
              handleStepChange('item');
            }}
            type="edit"
          />
        ) : (
          <CreateItem
            onBackClick={() => {
              handleStepChange('list');
            }}
            onSubmitClick={handleSubmit}
            isSubmitting={isUpdatingList || isSuccess}
            type="edit"
            setItemChanged={() => {
              setIsItemChanged(true);
            }}
          />
        )}
      </FormProvider>
    </>
  );
}
