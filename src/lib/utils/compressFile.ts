import imageCompression from 'browser-image-compression';

/**
 * 4MB가 초과한 파일을 최대 4MB, 1920px로 압축해주는 함수입니다.
 * @param {File} file 압축해야할 원본 파일
 */

const compressFile = async (file: File) => {
  const MAX_IMAGE_SIZE_MB = 4; //압축기준

  if (file.size <= MAX_IMAGE_SIZE_MB) return file;

  const options = {
    maxSizeMB: 4,
    maxWidthOrHeight: 1920,
  };

  const compressedFile = await imageCompression(file, options);

  return compressedFile;
};

export default compressFile;
