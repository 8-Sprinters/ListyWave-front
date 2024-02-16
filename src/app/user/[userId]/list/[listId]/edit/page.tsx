'use client';

import { useEffect, useState } from 'react';
import { FieldErrors, FormProvider, useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import CreateItem from '@/app/list/create/_components/CreateItem';
import CreateList from '@/app/list/create/_components/CreateList';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import getListDetail from '@/app/_api/list/getListDetail';
import { ListDetailType, ListEditType } from '@/lib/types/listType';

export type FormErrors = FieldErrors<ListEditType>;

export default function EditPage() {
  const [step, setStep] = useState<'list' | 'item'>('list');
  const param = useParams<{ userId: string; listId: string }>();

  const { data } = useQuery<ListDetailType>({
    queryKey: [QUERY_KEYS.getListDetail],
    queryFn: () => getListDetail(Number(param?.listId)),
  });

  const methods = useForm<ListEditType>({
    mode: 'onChange',
    defaultValues: {
      ownerId: Number(param?.userId),
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

  const handleStepChange = (step: 'list' | 'item') => {
    setStep(step);
  };

  const handleSubmit = () => {
    console.log('제출');
  };

  useEffect(() => {
    if (data) {
      methods.reset({
        ownerId: data.ownerId,
        category: data.category,
        labels: data.labels.map((obj) => obj.name),
        collaboratorIds: data.collaborators,
        title: data.title,
        description: data.description,
        isPublic: data.isPublic,
        backgroundColor: data.backgroundColor,
        items: data.items,
      });
    }
  }, [data, methods]);

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
            onSubmitClick={handleSubmit} //3차 MVP 수정필요
            isSubmitting={false} //3차 MVP 수정필요
            type="edit"
          />
        )}
      </FormProvider>
    </>
  );
}
