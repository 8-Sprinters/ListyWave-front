import { FieldErrors, useForm, useFormContext, useWatch } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

import Camera from '/public/icons/camera.svg';
import ErrorIcon from '/public/icons/error_x.svg';

import checkNicknameDuplication from '@/app/_api/user/checkNicknameDuplication';

import { profilePlaceholder } from '@/lib/constants/placeholder';
import {
  nicknameRules,
  profileDescriptionRules,
  nicknameDuplicateRules,
} from '@/lib/constants/formInputValidationRules';
import { UserProfileEditType } from '@/lib/types/userProfileType';
import toastMessage from '@/lib/constants/toastMessage';
import debounce from '@/lib/utils/debounce';
import toasting from '@/lib/utils/toasting';

import * as styles from './ProfileForm.css';
import { ChangeEvent } from 'react';

type FormErrors = FieldErrors<UserProfileEditType>;

const MockBackground = ['기본배경A', '기본배경B', '기본배경C', '기본배경D', '기본배경E', '기본배경F', '기본배경G'];
const MockProfile = ['A', 'B', 'C', 'D', 'E'];

interface ProfileFormProps {
  userNickname: string;
  onProfileChange: (arg: File) => void;
  onBackgroundChange: (arg: File) => void;
}

export default function ProfileForm({ userNickname, onProfileChange, onBackgroundChange }: ProfileFormProps) {
  const {
    register,
    control,
    setError,
    formState: { errors },
  } = useFormContext();

  //닉네임 중복 검사
  const nicknameRegister = register('nickname', nicknameRules);

  const { mutate: checkNickname } = useMutation({
    mutationFn: checkNicknameDuplication,
    onSuccess: (result) => {
      if (result) {
        setError('nickname', nicknameDuplicateRules);
      }
    },
  });

  const debouncedOnNicknameChange = debounce<typeof checkNickname>(checkNickname, 500);

  //글자수세기
  const watchDescription = useWatch({ control, name: 'description' });

  //이미지 미리보기
  const newBackgroundImageRegister = register('newBackgroundFileList');
  const newProfileImageRegister = register('newProfileFileList');

  const MAX_IMAGE_INPUT_SIZE_MB = 50 * 1024 * 1024; //50MB

  const handleBackgroundChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const targetFile = e.target.files[0];
      if (targetFile?.size > MAX_IMAGE_INPUT_SIZE_MB) {
        toasting({ type: 'error', txt: toastMessage.ko.imageSizeError });
      } else {
        newBackgroundImageRegister.onChange(e);
        onBackgroundChange(e.target.files[0]);
      }
    }
  };

  const handleProfileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const targetFile = e.target.files[0];
      if (targetFile?.size > MAX_IMAGE_INPUT_SIZE_MB) {
        toasting({ type: 'error', txt: toastMessage.ko.imageSizeError });
      } else {
        newProfileImageRegister.onChange(e);
        onProfileChange(e.target.files[0]);
      }
    }
  };

  return (
    <>
      <div className={styles.form}>
        {/* 닉네임 */}
        <div>
          <div className={styles.inputContainer}>
            <label className={styles.label}>닉네임</label>
            <input
              className={styles.inputText}
              placeholder={profilePlaceholder.nickname}
              maxLength={10}
              autoComplete="off"
              {...nicknameRegister}
              onChange={(e) => {
                nicknameRegister.onChange(e);
                if (e.target.value && e.target.value !== userNickname) {
                  debouncedOnNicknameChange(e.target.value);
                }
              }}
            />
          </div>
          {errors.nickname && (
            <div className={styles.error}>
              <ErrorIcon alt="닉네임 에러" />
              <span className={styles.errorText}>{(errors as FormErrors)?.nickname?.message}</span>
            </div>
          )}
        </div>

        <div>
          <div className={styles.inputContainer}>
            <label className={styles.label}>소개</label>
            <textarea
              className={styles.textarea}
              placeholder={profilePlaceholder.description}
              autoComplete="off"
              {...register('description', profileDescriptionRules)}
            />
            <span className={styles.textLength}>{`${watchDescription?.length}/160`}</span>
          </div>
          {errors.description && (
            <div className={styles.error}>
              <ErrorIcon alt="소개 에러" />
              <span className={styles.errorText}>{(errors as FormErrors)?.description?.message}</span>
            </div>
          )}
        </div>

        <div className={styles.backgroundOptionContainer}>
          <label className={`${styles.backgroundOption} ${styles.inputFileLabel}`} htmlFor="backgroundImage">
            <Camera />
          </label>
          <input
            type="file"
            id="backgroundImage"
            className={styles.inputFile}
            accept=".jpg, .jpeg, .png"
            {...newBackgroundImageRegister}
            onChange={(e) => handleBackgroundChange(e)}
          />
          {MockBackground.map((image, index) => (
            <button key={`defaultBackgroundImage${index}`} type="button" className={styles.backgroundOption}>
              {image}
            </button>
          ))}
        </div>
        <div className={styles.profileOptionContainer}>
          <label className={`${styles.profileOption} ${styles.inputFileLabel}`} htmlFor="profileImage">
            <Camera />
          </label>
          <input
            type="file"
            id="profileImage"
            className={styles.inputFile}
            accept=".jpg, .jpeg, .png"
            {...newProfileImageRegister}
            onChange={(e) => handleProfileChange(e)}
          />
          {MockProfile.map((image, index) => (
            <button key={`defaultProfileImage${index}`} type="button" className={styles.profileOption}>
              {image}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
