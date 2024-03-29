import { useForm } from 'react-hook-form';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';

import * as styles from './CreateNicknameStep.css';

import { nicknameDuplicateRules, nicknameRules } from '@/lib/constants/formInputValidationRules';
import { UserProfileEditType, UserType } from '@/lib/types/userProfileType';
import checkNicknameDuplication from '@/app/_api/user/checkNicknameDuplication';
import axiosInstance from '@/lib/axios/axiosInstance';
import { startListyLocale } from '@/app/start-listy/locale';
import { useLanguage } from '@/store/useLanguage';

interface CreateNicnameStepProps {
  userId: number;
  handleNextStep: () => void;
  refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<UserType, Error>>;
}

export default function CreateNicknameStep({ userId, handleNextStep, refetch }: CreateNicnameStepProps) {
  const { language } = useLanguage();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<UserProfileEditType>({
    mode: 'onChange',
  });

  const onSubmit = async (data: UserProfileEditType) => {
    if (!userId) {
      alert(startListyLocale[language].needLoginMessage);
      return;
    }

    const isDuplitedNickname = await checkNicknameDuplication(data.nickname);

    if (isDuplitedNickname) {
      setError('nickname', nicknameDuplicateRules);
      return;
    }

    try {
      await axiosInstance.patch(`/users/${userId}`, {
        nickname: data.nickname,
      });

      // 변경 성공시 next step
      refetch();
      handleNextStep();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={styles.background}>
      <div className={styles.step}>
        <div className={styles.bar.default}></div>
        <div className={isValid ? styles.statusBar.full : styles.statusBar.half}></div>
        <p className={styles.stepText}>step1</p>
      </div>
      <div className={styles.container}>
        <label className={styles.title}>{startListyLocale[language].createNicknameMessage}</label>
        <div className={styles.inputWrapper}>
          <input {...register('nickname', nicknameRules)} autoComplete="off" autoFocus className={styles.input} />
          <p className={styles.errorMessage}>{errors.nickname?.message}</p>
        </div>
        <button type="submit" disabled={!isValid} className={isValid ? styles.variant.active : styles.variant.default}>
          <span>{startListyLocale[language].next}</span>
        </button>
      </div>
    </form>
  );
}
