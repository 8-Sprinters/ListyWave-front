import { useRef } from 'react';

/**
 * textarea의 높이를 내부 텍스트 높이에 따라 조정하는 훅입니다.
 * @returns textareaRef: 높이를 조정하고 싶은 textarea를 참조하는 ref
 * @returns handleResizeHeight: onChange가 발생할 때마다 높이 감지하는 함수
 */

const useResizeTextarea = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleResizeHeight = () => {
    if (textareaRef.current !== null) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  };

  return { textareaRef, handleResizeHeight };
};

export default useResizeTextarea;
