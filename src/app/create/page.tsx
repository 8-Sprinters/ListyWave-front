'use client';

import { FieldErrors, FormProvider, useForm } from 'react-hook-form';
import CreateItem from '@/app/create/_components/CreateItem';

interface Item {
  rank: number;
  title: string;
  comment: string | null;
  link: string | null;
}

interface FormValues {
  ownerId: number;
  category: string;
  labels: string[] | null;
  collaboratorIds: number[] | null;
  title: string;
  description: string | null;
  isPublic: boolean;
  backgroundColor: string;
  items: Item[];
}

export type FormErrors = FieldErrors<FormValues>;

export default function CreatePage() {
  const methods = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      ownerId: 0,
      category: '',
      labels: [],
      collaboratorIds: [],
      title: '',
      description: '',
      isPublic: true,
      backgroundColor: '#000000',
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
          comment: null,
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
          <CreateItem />
        </FormProvider>
      </div>
    </div>
  );
}
