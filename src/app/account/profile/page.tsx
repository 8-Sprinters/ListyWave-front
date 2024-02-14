'use client';
import { FormProvider, useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@tanstack/react-query';

import { UserProfileEditType, UserType } from '@/lib/types/userProfileType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import toasting from '@/lib/utils/toasting';
import fileToBase62 from '@/lib/utils/fileToBase64';
import { editProfileToastMessage } from '@/lib/constants/toastMessage';
import { useUser } from '@/store/useUser';
import { getUserOne } from '@/app/_api/user/getUserOne';
import updateProfile from '@/app/_api/user/updateProfile';

import ProfileForm from './_components/ProfileForm';
import * as styles from './styles.css';
import ImagePreview from './_components/ImagePreview';
import { useEffect, useState } from 'react';
import compressFile from '@/lib/utils/compressFile';

{
  /**TODO
-[] 데이터 가져오는 중 보여줄 화면 필요(로딩UI)
*/
}

export default function ProfilePage() {
  const { user } = useUser();
  const [profilePreviewUrl, setProfilePreviewUrl] = useState('');
  const [backgroundPreviewUrl, setBackgroundPreviewUrl] = useState('');

  const { data: userData } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne, user.id],
    queryFn: () => getUserOne(user.id),
    enabled: !!user.id,
  });

  const methods = useForm<UserProfileEditType>({
    mode: 'onChange',
  });

  useEffect(() => {
    methods.reset({
      nickname: userData?.nickname ?? '',
      description: userData?.description ?? '',
      backgroundImageUrl: userData?.backgroundImageUrl,
      profileImageUrl: userData?.profileImageUrl,
      newBackgroundFileList: null,
      newProfileFileList: null,
    });
    setProfilePreviewUrl(userData?.profileImageUrl ?? '');
    setBackgroundPreviewUrl(userData?.backgroundImageUrl ?? '');
  }, [userData, methods.reset]);

  //미리보기 이미지 변경

  const handleProfileChange = async (file: File) => {
    const compressedFile = await compressFile(file);
    fileToUrl(compressedFile, setProfilePreviewUrl);
  };

  const handleBackgroundChange = async (file: File) => {
    const compressedFile = await compressFile(file);
    fileToUrl(compressedFile, setBackgroundPreviewUrl);
  };

  //프로필 수정 저장
  const { mutate: updateProfileMutate, isPending } = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      toasting({ type: 'success', txt: editProfileToastMessage.editProfileSuccess });
      methods.reset({}, { keepValues: true });
    },
    onError: () => {
      toasting({ type: 'error', txt: editProfileToastMessage.editProfileError });
    },
  });

  const handleFormSubmit = () => {
    updateProfileMutate({ userId: user.id, data: methods.getValues() });
  };

  return (
    <>
      <FormProvider {...methods}>
        <form className={styles.page} onSubmit={methods.handleSubmit(handleFormSubmit)}>
          <button type="submit" disabled={!methods.formState.isDirty || isPending}>
            {/* 잘되는지 확인하세요 */}
            저장
          </button>
          <main className={styles.content}>
            <ImagePreview profileImageUrl={profilePreviewUrl} backgroundImageUrl={backgroundPreviewUrl} />
            <ProfileForm
              userNickname={userData?.nickname ?? ''}
              onProfileChange={handleProfileChange}
              onBackgroundChange={handleBackgroundChange}
            />
          </main>
        </form>
      </FormProvider>
    </>
  );
}
