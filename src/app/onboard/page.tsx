'use client';

// 최초 로그인한 사용자가 보는 페이지

import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';

import { useUser } from '@/store/useUser';

import { UserProfileEditType, UserType } from '@/lib/types/userProfileType';
import { nicknameDuplicateRules, nicknameRules } from '@/lib/constants/formInputValidationRules';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

import checkNicknameDuplication from '../_api/user/checkNicknameDuplication';
import updateProfile from '../_api/user/updateProfile';
import getUserOne from '../_api/user/getUserOne';

import CreateListStep from './_components/CreateListStep';

export default function OnbsoardPage() {
  const { user } = useUser(); // TODO url 변경시, params에서 id 가져오기

  const { data: userData } = useQuery<UserType>({
    // TODO patch method로 변경시, 쿼리요청 불필요
    queryKey: [QUERY_KEYS.userOne, user.id],
    queryFn: () => getUserOne(user.id as number),
    enabled: !!user.id,
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<UserProfileEditType>({
    mode: 'onChange',
  });

  const onSubmit = async (data: UserProfileEditType) => {
    console.log(data.nickname); // 삭제 예정
    console.log(user.id); // 삭제 예정

    if (!user.id) {
      alert('로그인이 필요해요.');
      return;
    }

    const isDuplitedNickname = await checkNicknameDuplication(data.nickname);
    // isDuplitedNickname이 true면, return + 에러메세지
    if (isDuplitedNickname) {
      setError('nickname', nicknameDuplicateRules);
      return;
    }

    // isDuplitedNickname이 false면, 프로필 업데이트
    await updateProfile({
      userId: user.id as number,
      data: {
        nickname: data.nickname,
        description: userData?.description, // TODO patch method로 변경시, 다른 필드 제거
        backgroundImageUrl: userData?.backgroundImageUrl,
        profileImageUrl: userData?.profileImageUrl,
        newBackgroundFileList: null,
        newProfileFileList: null,
      },
    });

    // 변경 성공시 next step
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>닉네임을 만들어주세요.</label>
        <input {...register('nickname', nicknameRules)} placeholder="닉네임을 만들어주세요." />
        <p>{errors.nickname?.message}</p>
        <button type="submit">다음으로</button>
      </form>
      <br />
      <CreateListStep />
    </>
  );
}
