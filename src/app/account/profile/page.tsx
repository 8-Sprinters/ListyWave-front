'use client';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { UserProfileEditType, UserType } from '@/lib/types/userProfileType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import toasting from '@/lib/utils/toasting';
import fileToBase64 from '@/lib/utils/fileToBase64';
import compressFile from '@/lib/utils/compressFile';
import toastMessage from '@/lib/constants/toastMessage';
import { useUser } from '@/store/useUser';
import getUserOne from '@/app/_api/user/getUserOne';
import updateProfile from '@/app/_api/user/updateProfile';
import Header from '@/components/Header/Header';
import BlueButton from '@/components/BlueButton/BlueButton';

import ProfileForm from './_components/ProfileForm';
import * as styles from './page.css';
import ImagePreview from './_components/ImagePreview';
import ProfileSkeleton from './_components/ProfileSkeleton';

/** TODO 데이터 가져오는 중 보여줄 화면 필요(로딩UI) */

export default function ProfilePage() {
  const { user } = useUser();
  const router = useRouter();
  const [profilePreviewUrl, setProfilePreviewUrl] = useState('');
  const [backgroundPreviewUrl, setBackgroundPreviewUrl] = useState('');

  const { data: userData } = useQuery<UserType>({
    queryKey: [QUERY_KEYS.userOne, user.id],
    queryFn: () => getUserOne(user.id as number),
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
  }, [userData]);

  //미리보기 이미지 변경
  const handleProfileChange = async (file: File) => {
    const compressedFile = await compressFile(file);
    fileToBase64(compressedFile, setProfilePreviewUrl);
  };

  const handleBackgroundChange = async (file: File) => {
    const compressedFile = await compressFile(file);
    fileToBase64(compressedFile, setBackgroundPreviewUrl);
  };

  //프로필 수정 저장
  const queryClient = useQueryClient();

  const { mutate: updateProfileMutate, isPending } = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      toasting({ type: 'success', txt: toastMessage.ko.updateProfileSuccess });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.userOne, user.id],
      });
    },
    onError: () => {
      toasting({ type: 'error', txt: toastMessage.ko.updateProfileError });
    },
  });

  const handleFormSubmit = () => {
    updateProfileMutate({ userId: user.id as number, data: methods.getValues() });
  };

  return (
    <>
      <FormProvider {...methods}>
        <form className={styles.page} onSubmit={methods.handleSubmit(handleFormSubmit)}>
          <Header
            title="프로필 설정"
            left="back"
            leftClick={() => {
              router.back();
            }}
            right={
              <BlueButton type="submit" disabled={!methods.formState.isDirty || isPending}>
                저장
              </BlueButton>
            }
          />
          {!userData ? (
            <ProfileSkeleton />
          ) : (
            <main className={styles.content}>
              <ImagePreview profileImageUrl={profilePreviewUrl} backgroundImageUrl={backgroundPreviewUrl} />
              <ProfileForm
                userNickname={userData?.nickname ?? ''}
                onProfileChange={handleProfileChange}
                onBackgroundChange={handleBackgroundChange}
              />
            </main>
          )}
        </form>
      </FormProvider>
    </>
  );
}
