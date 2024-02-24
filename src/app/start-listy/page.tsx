'use client';

/**
 TODO 
 - [ ] 온보딩을 했던 사용자라면 해당 페이지 노출 x, 접근 x
 - [ ] 온보딩 중간 종료된 사용자는 온보딩 페이지 재노출 o
 - [x] 온보딩 중 뒤로가기 방지
 - [x] 리스트 완성 후 뒤로가기 
 - [ ] 새로고침 시
 */

import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { useUser } from '@/store/useUser';
import getUserOne from '../_api/user/getUserOne';

import { UserType } from '@/lib/types/userProfileType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

import CreateListStep from './_components/CreateListStep';
import CreateNicknameStep from './_components/CreateNicknameStep';
import Modal from '@/components/Modal/Modal';

import useBooleanOutput from '@/hooks/useBooleanOutput';

export default function StartListyPage() {
  const { user } = useUser();
  const [stepIndex, setStepIndex] = useState(0);
  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput();

  const {
    data: userData,
    isFetching,
    refetch,
  } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne, user.id],
    queryFn: () => getUserOne(user.id as number),
    enabled: !!user.id,
  });

  const handleNextStep = () => {
    setStepIndex((prev) => prev + 1);
  };

  const handleBackControl = () => {
    /**
     TODO
     * 뒤로가기 클릭시, [온보딩을 종료할까요?] 모달
     * 닉네임 변경한 사용자가 종료를 원하면, '/'로 이동
     * 단, 닉네임 미변경 사용자는 [닉네임 변경이 필요해요.] 알려주기
     * 닉네임 변경 상태 저장해서 체크하기
     */

    alert('온보딩 종료할까요?');
    // 다른 페이지로 이동
  };

  useEffect(() => {
    history.pushState('onboard', '', '/'); // 브라우저 기본 동작으로 온보딩페이지에 접근하지 못하도록 설정
    window.addEventListener('popstate', handleBackControl); // 온보딩 페이지에서 브라우저 이동 시, 수행할 로직
    return () => {
      window.removeEventListener('popstate', handleBackControl);
    };
  }, []);

  if (isFetching) {
    return <div>로딩중</div>;
  }

  return (
    <>
      {userData && (
        <div>
          {stepIndex === 0 && (
            <CreateNicknameStep userData={userData} handleNextStep={handleNextStep} refetch={refetch} />
          )}
          {stepIndex === 1 && <CreateListStep userId={userData?.id} nickname={userData.nickname} />}
        </div>
      )}
      {/* alert창을 나중에 모달로 변경하기 위해 주석처리 해둠 */}
      {/* {isOn && (
        <Modal handleModalClose={handleSetOff}>
          <Modal.Title>온보딩을 종료할까요?</Modal.Title>
          <Modal.Button onCancel={handleSetOff} onClick={handleMoveToPage}>
            확인
          </Modal.Button>
        </Modal>
      )} */}
    </>
  );
}
