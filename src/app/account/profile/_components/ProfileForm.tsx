import { useFormContext, useWatch } from 'react-hook-form';
import { ChangeEvent, useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import Camera from '/public/icons/camera.svg';
import ErrorIcon from '/public/icons/error_x.svg';
import CheckIcon from '/public/icons/check_blue.svg';

import checkNicknameDuplication from '@/app/_api/user/checkNicknameDuplication';
import getDefaultBackgroundImages from '@/app/_api/user/getDefaultBackgroundImages';
import getDefaultProfileImages from '@/app/_api/user/getDefaultProfileImages';

import useDebounce from '@/hooks/useDebounce';
import { profilePlaceholder } from '@/lib/constants/placeholder';
import {
  nicknameRules,
  profileDescriptionRules,
  nicknameDuplicateRules,
} from '@/lib/constants/formInputValidationRules';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { DefaultImagesType, UserProfileEditType } from '@/lib/types/userProfileType';
import toastMessage from '@/lib/constants/toastMessage';
import toasting from '@/lib/utils/toasting';

import * as styles from './ProfileForm.css';

interface ProfileFormProps {
  userNickname: string;
  handleProfilePreviewChange: (arg: File | string) => void;
  handleBackgroundPreviewChange: (arg: File | string) => void;
}

export default function ProfileForm({
  userNickname,
  handleProfilePreviewChange,
  handleBackgroundPreviewChange,
}: ProfileFormProps) {
  const [isNicknameValidated, setIsNicknameValidated] = useState(false);
  const [selectedBackground, setSelectedBackground] = useState('');
  const [selectedProfile, setSelectedProfile] = useState('');

  const {
    register,
    control,
    setError,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext<UserProfileEditType>();

  //기본 이미지 조회
  const { data: defaultBackgroundImages } = useQuery<DefaultImagesType>({
    queryKey: [QUERY_KEYS.getDefaultBackgroundImages],
    queryFn: getDefaultBackgroundImages,
  });

  const { data: defaultProfileImages } = useQuery<DefaultImagesType>({
    queryKey: [QUERY_KEYS.getDefaultProfileImages],
    queryFn: getDefaultProfileImages,
  });

  //닉네임 중복 검사
  const nicknameRegister = register('nickname', nicknameRules);

  const { mutate: checkNickname } = useMutation({
    mutationFn: checkNicknameDuplication,
    onSuccess: (result) => {
      setIsNicknameValidated(!result);
      if (result) {
        setError('nickname', nicknameDuplicateRules);
      }
    },
  });

  const debouncedOnNicknameChange = useDebounce<typeof checkNickname>(checkNickname, 500);
  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    nicknameRegister.onChange(e);
    setIsNicknameValidated(false);
    if (e.target.value && e.target.value !== userNickname) {
      debouncedOnNicknameChange(e.target.value);
    }
  };

  //글자수세기
  const watchDescription = useWatch({ control, name: 'description' });

  //이미지 업로드
  const newBackgroundImageRegister = register('newBackgroundFileList');
  const newProfileImageRegister = register('newProfileFileList');

  const MAX_IMAGE_INPUT_SIZE_MB = 50 * 1024 * 1024; //50MB

  const handleBackgroundFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const targetFile = e.target.files[0];
      if (targetFile?.size > MAX_IMAGE_INPUT_SIZE_MB) {
        toasting({ type: 'error', txt: toastMessage.ko.imageSizeError });
      } else {
        newBackgroundImageRegister.onChange(e);
        handleBackgroundPreviewChange(e.target.files[0]);
        setValue('backgroundImageUrl', '');
        setSelectedBackground('file');
      }
    }
  };

  const handleProfileFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const targetFile = e.target.files[0];
      if (targetFile?.size > MAX_IMAGE_INPUT_SIZE_MB) {
        toasting({ type: 'error', txt: toastMessage.ko.imageSizeError });
      } else {
        newProfileImageRegister.onChange(e);
        handleProfilePreviewChange(e.target.files[0]);
        setValue('profileImageUrl', '');
        setSelectedProfile('file');
      }
    }
  };

  //기본 이미지 선택
  const handleDefaultImageClick = (type: 'background' | 'profile', imageUrl: string) => {
    if (type === 'profile') {
      handleProfilePreviewChange(imageUrl);
      setValue('profileImageUrl', imageUrl, { shouldDirty: true });
      setValue('newProfileFileList', null);
      setSelectedProfile(imageUrl);
    } else {
      handleBackgroundPreviewChange(imageUrl);
      setValue('backgroundImageUrl', imageUrl, { shouldDirty: true });
      setValue('newBackgroundFileList', null);
      setSelectedBackground(imageUrl);
    }
  };

  //선택 이미지 표시
  useEffect(() => {
    setSelectedBackground(getValues('backgroundImageUrl') as string);
    setSelectedProfile(getValues('profileImageUrl') as string);
  }, []);

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
                handleNicknameChange(e);
              }}
            />
          </div>
          {errors.nickname ? (
            <div className={styles.validationMessage}>
              <ErrorIcon alt="닉네임 중복 검사 결과 실패" />
              <span className={styles.errorText}>{errors?.nickname?.message}</span>
            </div>
          ) : (
            getValues('nickname') !== userNickname &&
            isNicknameValidated && (
              <div className={styles.validationMessage}>
                <CheckIcon alt="닉네임 중복 검사 결과 성공" />
                <span className={styles.successText}>사용 가능한 닉네임이에요.</span>
              </div>
            )
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
            <div className={styles.validationMessage}>
              <ErrorIcon alt="소개 에러" />
              <span className={styles.errorText}>{errors?.description?.message}</span>
            </div>
          )}
        </div>

        <div className={styles.inputContainer}>
          <p className={styles.label}>배경이미지</p>
          <div className={styles.backgroundOptionContainer}>
            <label className={styles.backgroundOption} htmlFor="backgroundImage">
              <Camera />
            </label>
            <input
              type="file"
              id="backgroundImage"
              className={styles.inputFile}
              accept=".jpg, .jpeg, .png"
              {...newBackgroundImageRegister}
              onChange={(e) => handleBackgroundFileInput(e)}
            />
            {defaultBackgroundImages?.map((image) => (
              <button
                key={image.name}
                type="button"
                className={`${styles.backgroundOption} ${selectedBackground === image.imageUrl ? styles.selectedOption : ''}`}
                style={assignInlineVars({
                  [styles.imageUrl]: `url(${image?.imageUrl})`,
                })}
                onClick={() => {
                  handleDefaultImageClick('background', image.imageUrl);
                }}
              />
            ))}
          </div>
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.label}>프로필이미지</p>
          <div className={styles.profileOptionContainer}>
            <label className={styles.profileOption} htmlFor="profileImage">
              <Camera />
            </label>
            <input
              type="file"
              id="profileImage"
              className={styles.inputFile}
              accept=".jpg, .jpeg, .png"
              {...newProfileImageRegister}
              onChange={(e) => handleProfileFileInput(e)}
            />
            {defaultProfileImages?.map((image) => (
              <button
                key={image.name}
                type="button"
                className={`${styles.profileOption} ${selectedProfile === image.imageUrl ? styles.selectedOption : ''}`}
                style={assignInlineVars({
                  [styles.imageUrl]: `url(${image?.imageUrl})`,
                })}
                onClick={() => {
                  handleDefaultImageClick('profile', image.imageUrl);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
