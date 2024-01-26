"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function ListOuterDetailLayout() {
  const handleBackButtonClick = () => {
    router.push("/ ");
  };

  const handleBottomSheetButtonClick = () => {};

  const router = useRouter();

  return (
    <div>
      <div>리스트 상세</div>
      <div>
        헤더
        <button onClick={handleBackButtonClick}>뒤로 가기</button>
        <h3>리스트</h3>
        <button>바텀 시트 버튼</button>
        <button>수정 아이콘</button>
        <button>삭제 아이콘</button>
        <button>히스토리 연결 페이지</button>
      </div>
      ------------------
      <div>
        리스트 상세 상단부
        <div>카테고리명</div>
        <div>라벨들</div>
        <div>리스트 제목</div>
        <div>날짜</div>
        <div>
          콜라보레이터
          <div>프로필 이미지 영역</div>
          <div>외 4명</div>
        </div>
        <div>리스트 한 줄 소개</div>
      </div>
      ------------------
      <div>
        댓글 영역
        <div>n개의 댓글</div>
        <div>프로필 사진</div>
        <div>사용자명</div>
        <div>생성 시간</div>
        <div>댓글 내용</div>
        <button>수정</button>
        <button>삭제</button>
        <button>댓글 더 보기 버튼</button>
        <div>
          대댓글 영역
          <div>프로필 사진</div>
          <div>사용자명</div>
          <div>생성 시간</div>
          <div>댓글 내용</div>
        </div>
      </div>
      ------------------
      <div>
        댓글 작성 영역
        <div>프로필 이미지 영역</div>
        <input></input>
        <button>게시</button>
      </div>
    </div>
  );
}

export default ListOuterDetailLayout;
