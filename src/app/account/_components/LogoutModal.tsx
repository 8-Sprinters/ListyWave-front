'use client';

/**
 TODO
 - [x] 로그아웃 기능 구현(카카오만)
 - [ ] oauth type 전달
 - [x] 로그아웃 모달
 - [x] 로그아웃 기능 마이페이지로 이동
 - [x] 로그아웃 후 뒤로가기를 누른경우 확인
 */

import { useRouter } from 'next/navigation';
import { AxiosError } from 'axios';

import axiosInstance from '@/lib/axios/axiosInstance';
import toasting from '@/lib/utils/toasting';
import { useUser } from '@/store/useUser';

import Modal from '@/components/Modal/Modal';

interface LogOutModalProps {
  handleSetOff: () => void;
}

const oauthType = {
  kakao: 'kakao',
  naver: 'naver',
  google: 'google',
};

export default function LogOutModal({ handleSetOff }: LogOutModalProps) {
  const router = useRouter();
  const { logoutUser } = useUser();

  const handleLogout = async () => {
    try {
      const result = await axiosInstance.patch(`/auth/${oauthType.kakao}`);

      if (result.status === 204) {
        logoutUser();
        toasting({ type: 'success', txt: '로그아웃 되었어요.' });
        router.push('/');
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error.message);
      }
    }
  };

  return (
    <Modal handleModalClose={handleSetOff}>
      <Modal.Title>로그아웃 하시나요?</Modal.Title>
      <Modal.Button onCancel={handleSetOff} onClick={handleLogout}>
        확인
      </Modal.Button>
    </Modal>
  );
}
