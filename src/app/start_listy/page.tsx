'use client';

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
  const [stepIndex, setStepIndex] = useState(0);

  const {
    data: userData,
    isLoading,
    refetch,
  } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne, user.id],
    queryFn: () => getUserOne(user.id as number),
    enabled: !!user.id,
  });

  const handleNextStep = () => {
    setStepIndex((prev) => prev + 1);
  };

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <>
      {userData ? (
        <div>
          {stepIndex === 0 && (
            <CreateNicknameStep userData={userData} handleNextStep={handleNextStep} refetch={refetch} />
          )}
          {stepIndex === 1 && <CreateListStep userId={userData?.id} nickname={userData.nickname} />}
        </div>
      ) : (
        <div>
          <p>잘못된 접근 경로에요.</p>
          <button>되돌아가기</button>
        </div>
      )}
    </>
  );
}
