'use client';

import { useState } from 'react';
import { FieldErrors, FormProvider, useForm } from 'react-hook-form';
import axios from 'axios';

import CreateItem from '@/app/create/_components/CreateItem';
import CreateList from '@/app/create/_components/CreateList';

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

  const handleSubmit = async () => {
    try {
      const formData = methods.getValues();
      const response = await axios.post('https://dev.api.listywave.com/lists', formData);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const methods = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      ownerId: 2,
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
