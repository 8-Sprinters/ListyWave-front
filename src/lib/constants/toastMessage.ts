export const MAX_FOLLOWING = 1000;

const toastMessage = {
  ko: {
    requiredLogin: '로그인이 필요해요.',
    userStatusLoggedOut: '로그아웃 된 사용자에요. 다시 로그인 해주세요.',
    loggedOut: '로그아웃 되었어요.',
    loggedOutError: '로그아웃에 실패했어요. 다시 시도해주세요.🥲',
    limitFollow: `최대 ${MAX_FOLLOWING.toLocaleString('ko-KR')}명까지 팔로우할 수 있어요.`,
    uploadImageError: '이미지를 업로드에 실패했어요. 다시 업로드해주세요.🥲',
    createListError: '리스트 생성에 실패했어요. 다시 시도해주세요.🥲',
    updateProfileSuccess: '프로필을 수정했습니다.🥰',
    updateProfileError: '프로필 수정에 실패했어요. 다시 시도해주세요.🥲',
    imageSizeError: '사진이 너무 커요. 50MB 이하 사진을 넣어주세요.🥹',
    copyLink: '링크를 복사했어요. 붙여넣기 해주세요.',
    failedCopyLink: '링크 복사에 실패했어요. 다시 시도해주세요.',
    duplicatedItemError: '중복된 아이템이 있어요🥲',
    withdraw: '리스티웨이브를 탈퇴했어요.🥲 꼭 돌아와주세요!',
    withdrawError: '탈퇴에 실패했어요. 다시 시도해주세요.',
    failedCollect: '콜렉트에 실패했어요. 다시 시도해주세요.🥲',
  },
  en: {
    requiredLogin: 'Login is required.',
    userStatusLoggedOut: 'You have been logged out. Please log in again.',
    loggedOut: 'Logged out successfully.',
    loggedOutError: 'Failed to log out. Please try again.🥲',
    limitFollow: `Following exceeds the limit of ${MAX_FOLLOWING.toLocaleString('en-US')}.`,
    uploadImageError: 'Failed to upload the image. Please try again.🥲',
    createListError: 'Failed to create the list. Please try again.🥲',
    updateProfileSuccess: 'Profile updated successfully.🥰',
    updateProfileError: 'Failed to update the profile. Please try again.🥲',
    imageSizeError: 'The image is too large. Please insert an image smaller than 50MB.🥹',
    copyLink: 'The link has been copied. Please paste it.',
    failedCopyLink: 'Failed to copy the link. Please try again.',
    duplicatedItemError: 'Duplicated items exist🥲',
    withdraw: "You've withdrawn from ListyWave. 🥲 Please come back soon!",
    withdrawError: 'Failed to withdraw. Please try again.',
    failedCollect: 'Failed to collect. Please try again.🥲',
  },
};

export default toastMessage;
