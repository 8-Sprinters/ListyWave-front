import imageCompression from 'browser-image-compression';

const compressFile = async (file: File) => {
  let finalFile = file;
  //파일압축
  const MAX_IMAGE_SIZE_MB = 4; //압축기준

  if (file.size > MAX_IMAGE_SIZE_MB) {
    const options = {
      maxSizeMB: 4,
      maxWidthOrHeight: 1920,
    };

    const compressedFile = await imageCompression(file, options);
    finalFile = compressedFile;
  }

  return finalFile;
};

export default compressFile;
