import { useEffect, useRef } from 'react';

const useInfiniteScroll = (handler: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null);

  //scroll로 한 번 도전해봤는데 ref wrapper 자체가 clientHeight보다 작으면 문제가 생겨서 document로 걸어주었습니다 ㅠ
  useEffect(() => {
    const handleScrollToBottom = () => {
      const element = document.documentElement;
      if (!element) return;

      const { scrollTop, scrollHeight, clientHeight } = element;
      if (scrollHeight - scrollTop <= clientHeight + 0.5) {
        handler();
      }
    };

    document.addEventListener('scroll', handleScrollToBottom);
    return () => {
      document.removeEventListener('scroll', handleScrollToBottom);
    };
  }, [ref, handler]);

  return { ref };
};

export default useInfiniteScroll;
