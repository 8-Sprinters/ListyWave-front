'use client';

import { FieldErrors, FormProvider, useForm } from 'react-hook-form';
import CreateItem from '@/app/create/_components/CreateItem';
import CreateList from '@/app/create/_components/CreateList';
import { useState } from 'react';

interface Item {
  rank: number;
  title: string;
  comment: string | null;
  link: string | null;
}

interface FormValues {
  ownerId: number;
  category: string;
  labels: string[];
  collaboratorIds: number[];
  title: string;
  description: string;
  isPublic: boolean;
  backgroundColor: string;
  items: Item[];
}

export type FormErrors = FieldErrors<FormValues>;

export default function CreatePage() {
  const [step, setStep] = useState<'list' | 'item'>('list');

  const handleStepChange = (step: 'list' | 'item') => {
    setStep(step);
  };

  const methods = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      ownerId: 0,
      category: '문화',
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
          comment: null,
          link: null,
        },
        {
          rank: 0,
          title: '',
          comment: null,
          link: null,
        },
        {
          rank: 0,
          title: '',
          comment: null,
          link: null,
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
            />
          )}
        </FormProvider>
      </div>
    </div>
  );
}
