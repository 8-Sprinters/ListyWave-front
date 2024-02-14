'use client';

import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';

import Label from '@/components/Label/Label';
import Collaborators from '@/app/user/[userId]/list/[listId]/_components/ListDetailOuter/Collaborators';
import getListDetail from '@/app/_api/list/getDetailList';
import Modal from '@/components/Modal/Modal';
import useBooleanOutput from '@/hooks/useBooleanOutput';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import timeDiff from '@/lib/utils/time-diff';
import { LabelType } from '@/lib/types/listType';
import ListDetailInner from '../ListDetailInner';
import * as styles from './ListInformation.css';
import Comments from './Comments';

function ListInformation() {
  const params = useParams<{ listId: string }>();
  const router = useRouter();
  const { handleSetOff } = useBooleanOutput();

  const { data: list, error } = useQuery({
    queryKey: [QUERY_KEYS.getListDetail],
    queryFn: () => getListDetail(Number(params?.listId)),
    enabled: !!params?.listId,
    retry: 0,
  });

  const handleConfirmButtonClick = () => {
    router.push('/');
  };

  if (error && error?.message.includes('404')) {
    console.log(error);
    return (
      <Modal handleModalClose={handleSetOff}>
        <Modal.Title>이 리스트는 삭제 또는 비공개 처리 되었어요.</Modal.Title>
        <Modal.Button onCancel={handleSetOff} onClick={handleConfirmButtonClick}>
          확인
        </Modal.Button>
      </Modal>
    );
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.categoryWrapper}>
          <div className={styles.labelWrapper}>
            <Label colorType="skyblue">음악</Label>
          </div>
          {list?.labels.map((item: LabelType, idx: number) => {
            return (
              <div className={styles.labelWrapper} key={idx.toString()}>
                <Label colorType="blue">{`${item.name}`}</Label>
              </div>
            );
          })}
        </div>
        <div className={styles.listTitle}>{list?.title}</div>
        <div className={styles.listDescription}>{list?.description}</div>
      </div>
      <ListDetailInner data={list} />
      <div className={styles.bottomWrapper}>
        <div className={styles.bottomLeftWrapper}>
          <Image
            src={list?.ownerProfileImageUrl}
            alt="사용자 프로필 이미지"
            width={36}
            height={36}
            className={styles.profileImage}
          />
          <div className={styles.informationWrapper}>
            <div className={styles.listOwnerNickname}>{list?.ownerNickname}</div>
            <div className={styles.infoDetailWrapper}>
              <span>{timeDiff(list?.createdDate)}</span>
              <span>{list?.isPublic ? '공개' : '비공개'}</span>
            </div>
          </div>
        </div>
        <div className={styles.collaboratorWrapper}>
          <Collaborators collaborators={list?.collaborators} />
        </div>
      </div>
      <Comments />
    </>
  );
}

export default ListInformation;
