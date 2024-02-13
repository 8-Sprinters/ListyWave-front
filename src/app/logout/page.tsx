'use client';

/**
 TODO
 - [ ] 로그아웃 기능 구현
 - [ ] 로그아웃 모달
 - [ ] 로그아웃 마이페이지로 이동
 - [ ] 로그아웃 후 뒤로가기를 누른경우 확인
 */

import { useRouter } from 'next/navigation';
import axiosInstance from '@/lib/axios/axiosInstance';
import { useUser } from '@/store/useUser';

const oauthType = {
  kakao: 'kakao',
  naver: 'naver',
  google: 'google',
};

export default function LogoutPage() {
  const router = useRouter();
  const { logoutUser } = useUser();

  //   const logoutUser = async (oauthServerType = 'kakao') => {
  //     // oauth type 전달 방법 고민
  //     return await axiosInstance.patch(`/auth/${oauthServerType}`);
  //   };

  const handleLogout = async () => {
    console.log('로그아웃 하기'); // 삭제 예정

    try {
      // (server) 토큰 만료 시키기
      //   const res = await axiosInstance.patch(`/auth/${oauthType.kakao}`);
      //   console.log(res); // 삭제 예정

      // (client) store에 저장되어 있던 사용자 정보(id, 토큰)가 초기화 된다.
      logoutUser();

      // 로그아웃 성공 토스트메세지

      // 탐색페이지로 리다이렉트
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      로그아웃 임시페이지
      <div onClick={handleLogout}>로그아웃 하기</div>
    </div>
  );
}
