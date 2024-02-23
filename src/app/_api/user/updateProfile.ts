import axiosInstance from '@/lib/axios/axiosInstance';
import axios from 'axios';
import { UserProfileEditType } from '@/lib/types/userProfileType';
import compressFile from '@/lib/utils/compressFile';

//프로필수정 이미지업로드 타입
interface UserPresignedUrlsType {
  ownerId: number;
  backgroundPresignedUrl: string;
  profilePresignedUrl: string;
}

interface UpdateProfileParams {
  userId: number;
  data: UserProfileEditType;
}

const updateProfile = async ({ userId, data }: UpdateProfileParams) => {
  const { nickname, description, backgroundImageUrl, profileImageUrl, newBackgroundFileList, newProfileFileList } =
    data;

  //1.프로필 수정
  const result = await axiosInstance.patch(`/users/${userId}`, {
    nickname,
    description,
    backgroundImageUrl,
    profileImageUrl,
  });

  //이미지 파일 없는 경우 return
  if (result.status !== 204 || (newBackgroundFileList === null && newProfileFileList === null)) return;

  //2. presignedUrl 생성요청
  const imageData = {
    backgroundExtension: newBackgroundFileList?.[0].type.split('/')[1],
    profileExtension: newProfileFileList?.[0].type.split('/')[1],
  };

  const response = await axiosInstance.post<UserPresignedUrlsType>('/users/upload-url', imageData);
  //3. presignedUrl에 사진 업로드
  const { backgroundPresignedUrl, profilePresignedUrl } = response?.data;

  if (newBackgroundFileList !== null) {
    const resultFile = await compressFile(newBackgroundFileList[0]);
    await axios.put(backgroundPresignedUrl, resultFile);
  }

  if (newProfileFileList !== null) {
    const resultFile = await compressFile(newProfileFileList[0]);
    await axios.put(profilePresignedUrl, resultFile);
  }

  //4.서버에 성공 알림
  await axiosInstance.post('/users/upload-complete', imageData);
};

export default updateProfile;
