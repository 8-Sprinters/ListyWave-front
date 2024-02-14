'use client';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';

import Label from '@/components/Label/Label';
import Collaborators from '@/app/user/[userId]/list/[listId]/_components/ListDetailOuter/Collaborators';
import getListDetail from '@/app/_api/list/getListDetail';
import Modal from '@/components/Modal/Modal';
import Header from '@/components/Header/Header';
import HeaderRight from './HeaderRight';
import useBooleanOutput from '@/hooks/useBooleanOutput';
import { useUser } from '@/store/useUser';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';
import timeDiff from '@/lib/utils/time-diff';
import { LabelType, ListDetailType } from '@/lib/types/listType';
import ListDetailInner from '../ListDetailInner';
import * as styles from './ListInformation.css';
import Comments from './Comments';
import { UserProfileType } from '@/lib/types/userProfileType';

function ListInformation() {
  const params = useParams<{ listId: string; userId: string }>();
  const router = useRouter();
  const { handleSetOff } = useBooleanOutput();

  //zustand로 관리하는 user정보 불러오기
  const { user } = useUser();
  const userId = user?.id;

  const { data: list, error } = useQuery<ListDetailType>({
    queryKey: [QUERY_KEYS.getListDetail],
    queryFn: () => getListDetail(Number(params?.listId)),
    enabled: !!params?.listId,
    retry: 0,
  });
  console.log(list);

  //리스트 생성자 제외한 사람들만 콜라보레이터들로 설정

  const filteredCollaboratorsList = list?.collaborators.filter((item: UserProfileType) => item?.id !== list.ownerId);
  const isCollaborator: boolean | undefined =
    list?.collaborators.some((item: UserProfileType) => item?.id === userId) && userId !== Number(params?.userId);

  const handleConfirmButtonClick = () => {
    router.push('/');
  };

  if (error && error?.message.includes('404')) {
    return (
      <Modal handleModalClose={handleSetOff}>
        <Modal.Title>이 리스트는 삭제 또는 비공개 처리 되었어요.</Modal.Title>
        <Modal.Button onCancel={handleSetOff} onClick={handleConfirmButtonClick}>
          확인
        </Modal.Button>
      </Modal>
    );
  }

  if (!list) {
    return null;
  }

  return (
    <>
      <Header
        title="리스트"
        left="back"
        right={<HeaderRight isCollaborator={isCollaborator} />}
        leftClick={() => router.back()}
      />
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
      <ListDetailInner data={list} listId={params && params?.listId} />
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
              <span>{timeDiff(String(list?.createdDate))}</span>
              <span>{list?.isPublic ? '공개' : '비공개'}</span>
            </div>
          </div>
        </div>
        <div className={styles.collaboratorWrapper}>
          <Collaborators collaborators={filteredCollaboratorsList} />
        </div>
      </div>
      <Comments />
    </>
  );
}

export default ListInformation;
