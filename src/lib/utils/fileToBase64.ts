/**
 * 이미지 파일을 미리 볼 수 있도록 Base64로 인코딩하는 함수입니다.
 * @param {File} file 이미지 파일
 * @param {function} setter 인코딩 완료 후 그 결과물을 세팅할 세터함수
 */

const fileToBase64 = async (file: File, setter: (arg: string) => void) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    setter(reader.result as string);
  };
};

export default fileToBase64;
