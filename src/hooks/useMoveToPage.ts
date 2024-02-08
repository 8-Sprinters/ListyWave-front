import { useRouter } from 'next/navigation';

/**
 * 페이지 경로를 받아서 useRouter로 이동시키는 custom hook 입니다.
 * @param page 페이지 경로입니다.
 */

export default function useMoveToPage() {
  const router = useRouter();

  const onClickMoveToPage = (path: string) => () => {
    router.push(path);
  };

  return { onClickMoveToPage };
}
