'use client';

import { FieldErrors, FormProvider, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import CreateItem from '@/app/create/_components/CreateItem';
import CreateList from '@/app/create/_components/CreateList';
import { useState } from 'react';
import axios from 'axios';

interface Item {
  rank: number;
  title: string;
  comment: string;
  link: string;
  image?: FileList | null; //image
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
      ownerId: 1,
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
          return { rank: rank, extension: image?.[0]?.type.split('/')[1] }; //type앞에 ?
        })
        .filter(({ extension }) => {
          return extension !== undefined;
        }),
    };

    const imageFileList = originData.items.map(({ image }) => image); //추가

    return { requestData, imageData, imageFileList };
  };

  const handleSubmit = async () => {
    try {
      const formData = formatData().requestData;
      console.log(formData);
      console.log(formatData().imageData);
      const response = await axios.post('https://dev.api.listywave.com/lists', formData);
      console.log('Response:', response.data);
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
      <DevTool control={methods.control} /> {/* set up the dev tool */}
    </>
  );
}
