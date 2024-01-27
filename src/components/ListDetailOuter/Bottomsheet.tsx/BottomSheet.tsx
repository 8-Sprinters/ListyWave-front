import * as S from './BottomSheet.css';

function BottomSheet() {
  return (
    <div className={S.Wrapper}>
      <div>리스트 이미지로 저장하기</div>
      <div>리스트 링크 복사하기</div>
      <div>리스트 카카오톡으로 공유하기</div>
      <div>이 리스트 템플릿으로 바로 리스트 작성하기</div>
    </div>
  );
}

export default BottomSheet;
