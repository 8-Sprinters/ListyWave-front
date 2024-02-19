export const MAX_FOLLOWING = 1000;

const toastMessage = {
  ko: {
    requiredLogin: '로그인이 필요해요.',
    limitFollow: `최대 ${MAX_FOLLOWING.toLocaleString('ko-KR')}명까지 팔로우할 수 있어요.`,
    uploadImageError: '이미지를 업로드에 실패했어요. 다시 업로드해주세요.🥲',
    createListError: '리스트 생성에 실패했어요. 다시 시도해주세요.🥲',
    updateProfileSuccess: '프로필을 수정했습니다.🥰',
    updateProfileError: '프로필 수정에 실패했어요. 다시 시도해주세요.🥲',
    imageSizeError: '사진이 너무 커요. 50MB 이하 사진을 넣어주세요.🥹',
  },
  en: {
    requiredLogin: 'Login is required.',
    limitFollow: `Following exceeds the limit of ${MAX_FOLLOWING.toLocaleString('en-US')}.`,
    uploadImageError: 'Failed to upload the image. Please try again.🥲',
    createListError: 'Failed to create the list. Please try again.🥲',
    updateProfileSuccess: 'Profile updated successfully.🥰',
    updateProfileError: 'Failed to update the profile. Please try again.🥲',
    imageSizeError: 'The image is too large. Please insert an image smaller than 50MB.🥹',
  },
};

export default toastMessage;
