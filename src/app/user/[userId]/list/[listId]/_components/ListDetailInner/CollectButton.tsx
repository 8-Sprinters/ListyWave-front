import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import * as styles from '@/app/user/[userId]/list/[listId]/_components/ListDetailInner/CollectButton.css';

import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import { AxiosError } from 'axios';
import { useUser } from '@/store/useUser';
import numberFormatter from '@/lib/utils/numberFormatter';
import collectList from '@/app/_api/collect/collectList';
import toasting from '@/lib/utils/toasting';
import CollectIcon from '/public/icons/collect.svg';
import CollectedIcon from '/public/icons/collected.svg';

interface CollectProps {
  listId: number;
  collectCount: number;
  isCollected: boolean;
}

const CollectButton = ({ data }: { data: CollectProps }) => {
  const queryClient = useQueryClient();
  const params = useParams<{ userId: string; listId: string }>();
  const { user: loginUser } = useUser();
  const writerId = parseInt(params?.userId ?? '0');

  const collect = useMutation({
    mutationKey: [QUERY_KEYS.collect, data.listId],
    mutationFn: () => collectList(data.listId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.getListDetail],
      });
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 401) {
        toasting({ type: 'warning', txt: '리스트 실패' });
      }
    },
  });

  // TODO: 콜렉트 API생성되면 요청보내고 UI변경시키기
  const handleCollect = () => {
    collect.mutate();
  };

  // TODO: (로그인유저 !== 작성자) 인경우, viewCount, CollectCount를 아예 받아오면안된다.
  if (!loginUser) {
    return <CollectIcon onClick={alert('로그인 모달 띄우기')} />;
  }

  // TODO: 언어설정이 생기면 'ko' 부분을 변수로 수정하기
  if (loginUser?.id === writerId) {
    return (
      <div className={styles.myCollectWrapper}>
        <CollectedIcon />
        <div>{numberFormatter(data.collectCount, 'ko') ?? 0}</div>
      </div>
    );
  }

  return (
    <div className={styles.collectWrapper}>
      {data.isCollected ? <CollectedIcon onClick={handleCollect} /> : <CollectIcon onClick={handleCollect} />}
    </div>
  );
};

export default CollectButton;
