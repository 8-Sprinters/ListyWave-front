import axiosInstance from '@/lib/axios/axiosInstance';
import { ItemImagesType, ListEditType, PresignedUrlListType } from '@/lib/types/listType';
import axios from 'axios';

interface UploadItemImagesProps {
  listId: number;
  listData: ListEditType;
  imageData: ItemImagesType;
  imageFileList: File[];
}

const updateList = async ({ listId, listData, imageData, imageFileList }: UploadItemImagesProps) => {
  // 이미지 제외 리스트 정보들 수정 요청
  const listResponse = await axiosInstance.patch<ListEditType>(`/lists/${listId}`, listData);

  // 에러난 경우 & 이미지 수정 없는 경우 return
  if (listResponse.status !== 204 || imageData.extensionRanks.length === 0) return;

  //PresignedUrl 생성 요청
  const imageResponse = await axiosInstance.post<PresignedUrlListType>('/lists/upload-url', imageData);

  //PresignedUrl에 이미지 업로드
  for (let i = 0; i < imageResponse.data.length; i++) {
    const result = await axios.put(imageResponse.data[i].presignedUrl, imageFileList[i], {
      headers: {
        'Content-Type': imageFileList[i]?.type,
      },
    });
    if (result.status !== 200) return;
  }

  //서버에 성공 완료 알림
  if (imageFileList.length !== 0) {
    await axiosInstance.post('/lists/upload-complete', imageData);
  }
};

export default updateList;
