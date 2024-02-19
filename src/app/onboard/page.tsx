'use client';

// 최초 로그인한 사용자가 보는 페이지

import { FormProvider, useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';

import { useUser } from '@/store/useUser';
import getUserOne from '../_api/user/getUserOne';

import { UserType } from '@/lib/types/userProfileType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

import CreateListStep from './_components/CreateListStep';
import CreateNicknameStep from './_components/CreateNicnameStep';

export default function OnbsoardPage() {
  const { user } = useUser();
  const methods = useForm();

  const { data: userData } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne, user.id],
    queryFn: () => getUserOne(user.id as number),
    enabled: !!user.id,
  });

  return (
    <FormProvider {...methods}>
      {userData && <CreateNicknameStep userData={userData} />}
      <CreateListStep />
    </FormProvider>
  );
}
