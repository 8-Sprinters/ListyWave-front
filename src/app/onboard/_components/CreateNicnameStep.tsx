import { useForm } from 'react-hook-form';

import { nicknameDuplicateRules, nicknameRules } from '@/lib/constants/formInputValidationRules';
import { UserProfileEditType, UserType } from '@/lib/types/userProfileType';
import checkNicknameDuplication from '@/app/_api/user/checkNicknameDuplication';
import updateProfile from '@/app/_api/user/updateProfile';

interface CreateNicnameStepProps {
  userData: UserType;
  handleNextStep: () => void;
}

export default function CreateNicknameStep({ userData, handleNextStep }: CreateNicnameStepProps) {
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
    console.log(userData.id); // 삭제 예정

    if (!userData.id) {
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
      userId: userData.id as number,
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
    handleNextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <label>닉네임을 만들어주세요.</label>
      <input {...register('nickname', nicknameRules)} placeholder="닉네임을 만들어주세요." autoComplete="off" />
      <p>{errors.nickname?.message}</p>
      <button type="submit">다음으로</button>
    </form>
  );
}
