'use client';

// 최초 로그인한 사용자가 보는 페이지

import { FormProvider, useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { useUser } from '@/store/useUser';
import getUserOne from '../_api/user/getUserOne';

import { UserType } from '@/lib/types/userProfileType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

import CreateListStep from './_components/CreateListStep';
import CreateNicknameStep from './_components/CreateNicknameStep';

export default function OnbsoardPage() {
  const { user } = useUser();
  const methods = useForm();
  const [stepIndex, setStepIndex] = useState(0);

  const { data: userData } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne, user.id],
    queryFn: () => getUserOne(user.id as number),
    enabled: !!user.id,
  });

  const handleNextStep = () => {
    setStepIndex((prev) => prev + 1);
  };

  return (
    <FormProvider {...methods}>
      {stepIndex === 0 && userData && <CreateNicknameStep userData={userData} handleNextStep={handleNextStep} />}
      {stepIndex === 0 && userData && <CreateListStep userId={userData?.id} />}
    </FormProvider>
  );
}
