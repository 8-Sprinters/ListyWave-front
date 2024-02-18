'use client';

// 최초 로그인한 사용자가 보는 페이지

import { useForm } from 'react-hook-form';

import { UserProfileEditType } from '@/lib/types/userProfileType';
import { nicknameRules } from '@/lib/constants/formInputValidationRules';

export default function OnbsoardPage() {
  const {
    register,
    formState: { errors },
  } = useForm<UserProfileEditType>({
    mode: 'onChange',
  });

  return (
    <form noValidate>
      <label>닉네임을 만들어주세요.</label>
      <input {...register('nickname', nicknameRules)} placeholder="닉네임을 만들어주세요." />
      <p>{errors.nickname?.message}</p>
      {/* 다음으로 누르면 닉네임 중복검사 및 프로필 업데이트  */}
      <button type="button">다음으로</button>
    </form>
  );
}
