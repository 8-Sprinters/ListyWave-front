'use client';

import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';

import Modal from '@/components/Modal/Modal';
import useBooleanOutput from '@/hooks/useBooleanOutput';
import withdraw from '@/app/_api/auth/withdraw';
import toasting from '@/lib/utils/toasting';
import { removeCookie } from '@/lib/utils/cookie';
import toastMessage from '@/lib/constants/toastMessage';
import { useUser } from '@/store/useUser';
import * as styles from './AgreementConfirmation.css';
import { useLanguage } from '@/store/useLanguage';

interface WithdrawalButtonProps {
  isDisabled: boolean;
}

const oauthType = {
  // TODO oauth type 전달
  kakao: 'kakao',
  naver: 'naver',
  google: 'google',
};

export default function WithdrawalButton({ isDisabled }: WithdrawalButtonProps) {
  const { language } = useLanguage();
  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput(false);
  const router = useRouter();
  const { logoutUser } = useUser();

  //회원탈퇴 진행
  const { mutate: withdrawMutate } = useMutation({
    mutationFn: withdraw,
    onSuccess: () => {
      //사용자 상태 초기화
      logoutUser();
      //쿠키 삭제
      removeCookie('accessToken');
      removeCookie('refreshToken');

      toasting({ type: 'success', txt: toastMessage[language].withdraw });
      router.replace('/');
    },
    onError: () => {
      toasting({ type: 'error', txt: toastMessage[language].withdrawError });
    },
  });

  return (
    <>
      <button className={styles.confirmButton} disabled={isDisabled} onClick={handleSetOn}>
        탈퇴하기
      </button>
      {isOn && (
        <Modal handleModalClose={handleSetOff}>
          <Modal.Title>확인 버튼 클릭 시 즉시 탈퇴 처리됩니다.</Modal.Title>
          <Modal.Button
            onCancel={handleSetOff}
            onClick={() => {
              withdrawMutate();
            }}
          >
            확인
          </Modal.Button>
        </Modal>
      )}
    </>
  );
}
