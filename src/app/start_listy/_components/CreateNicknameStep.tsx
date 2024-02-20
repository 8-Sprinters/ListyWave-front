import { useForm } from 'react-hook-form';

import * as styles from './CreateNicknameStep.css';

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
    formState: { errors, isValid },
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

  console.log(isValid);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={styles.background}>
      <div className={styles.step}>
        <div className={styles.bar.dafult}></div>
        <div className={isValid ? styles.statusBar.full : styles.statusBar.half}></div>
        <p className={styles.stepText}>step1</p>
      </div>
      <div className={styles.container}>
        <label className={styles.title}>닉네임을 만들어주세요.</label>
        <div className={styles.inputWrapper}>
          <input {...register('nickname', nicknameRules)} autoComplete="off" autoFocus className={styles.input} />
          <p className={styles.errorMessage}>{errors.nickname?.message}</p>
        </div>
        <button type="submit" disabled={!isValid} className={isValid ? styles.variant.active : styles.variant.default}>
          <span className={styles.buttonText}>다음으로</span>
        </button>
      </div>
    </form>
  );
}
