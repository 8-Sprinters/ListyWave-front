import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import Modal from '@/components/Modal/Modal';
import BottomSheet from '../../_components/BottomSheet/BottomSheet';
import Kebab from '/public/icons/vertical_kebab_button.svg';
import Crown from '/public/icons/crown.svg';
import Private from '/public/icons/lock_alt.svg';
import ArrowDown from '/public/icons/chevron_down_sm.svg';

import { useUser } from '@/store/useUser';
import useBooleanOutput from '@/hooks/useBooleanOutput';
import toggleHistoryPublic from '@/app/_api/history/toggleHistoryPulblic';
import timeDiff from '@/lib/utils/time-diff';
import { HistoryType } from '@/lib/types/historyType';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

import * as styles from './HistoryVersions.css';
import deleteHistory from '@/app/_api/history/deleteHistory';
import NoDataComponent from '@/components/NoData/NoDataComponent';

interface VersionHistoryProps {
  histories: HistoryType[];
  listId: string | undefined;
  listOwnerId: number | undefined;
}

function HistoryVersions({ histories, listId, listOwnerId }: VersionHistoryProps) {
  const [selectedHistory, setSelectedHistory] = useState<HistoryType>(histories[histories.length - 1] || {});
  const { user } = useUser();
  const queryClient = useQueryClient();

  const { isOn: isControlOpen, handleSetOff: closeControl, handleSetOn: openControl } = useBooleanOutput();
  const {
    isOn: isHistorySelectionOpen,
    handleSetOff: closeHistorySelection,
    handleSetOn: openHistorySelection,
  } = useBooleanOutput();
  const { isOn: isModalOn, handleSetOff: closeModal, handleSetOn: openModal } = useBooleanOutput();

  const { mutate: togglePublicMutation } = useMutation({
    mutationFn: toggleHistoryPublic,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.getHistories, listId],
      });
      setSelectedHistory(selectedHistory);
    },
  });

  const { mutate: deleteMutation } = useMutation({
    mutationFn: deleteHistory,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.getHistories, listId],
      });
      setSelectedHistory(histories[histories.length - 1]);
      // TODO: 삭제 토스트 띄우기
    },
  });

  const historyControlBottomsheetOption = [
    {
      key: 'setHistoryPrivate',
      title: '히스토리 비공개하기',
      onClick: () => {
        handleTogglePublic();
      },
    },
    {
      key: 'deleteHistory',
      title: '히스토리 삭제하기',
      onClick: () => {
        openModal();
      },
    },
  ];

  const historySelectOption = histories
    .map((history) => {
      return {
        key: String(history.id),
        title: timeDiff(String(history.createdDate)),
        onClick: () => {
          setSelectedHistory(history);
        },
      };
    })
    .reverse();

  const handleTogglePublic = () => {
    togglePublicMutation({ historyId: selectedHistory.id });
  };

  const handleDeleteHistory = () => {
    deleteMutation({ historyId: selectedHistory.id });
    closeModal();
  };

  return (
    <>
      <div className={styles.container}>
        {histories.length !== 0 && (
          <>
            <button className={styles.dateDropdown} onClick={openHistorySelection}>
              {timeDiff(String(selectedHistory.createdDate))}
              <ArrowDown alt="날짜 드롭다운" />
            </button>
            {user.id === listOwnerId ? (
              <button className={styles.kebabButton} onClick={openControl}>
                <Kebab className={styles.kebabIcon} alt="더보기 버튼" />
              </button>
            ) : null}
          </>
        )}

        {histories.length === 0 ? (
          <div className={styles.noDataImage}>
            <NoDataComponent message="히스토리가 없어요" />
          </div>
        ) : (
          <>
            {user.id === listOwnerId || selectedHistory.isPublic ? (
              <>
                <div className={styles.date}>
                  {selectedHistory.isPublic ? null : <Private />}
                  {timeDiff(String(selectedHistory?.createdDate))}
                </div>
                <div className={styles.itemsContainer}>
                  {selectedHistory?.items.map((item) => <Item key={item.id} rank={item.rank} title={item.title} />)}
                </div>
              </>
            ) : (
              <div>비공개 히스토리에요.</div>
            )}
          </>
        )}
      </div>

      {isControlOpen && (
        <BottomSheet onClose={closeControl} optionList={historyControlBottomsheetOption} isActive={isControlOpen} />
      )}

      {isHistorySelectionOpen && (
        <BottomSheet
          onClose={closeHistorySelection}
          optionList={historySelectOption}
          isActive={isHistorySelectionOpen}
        />
      )}

      {isModalOn && (
        <Modal handleModalClose={closeModal}>
          <Modal.Title>정말 이 히스토리를 삭제하시나요?</Modal.Title>
          <Modal.Button onCancel={closeModal} onClick={handleDeleteHistory}>
            확인
          </Modal.Button>
        </Modal>
      )}
    </>
  );
}

interface ItemProp {
  rank: number;
  title: string;
}
function Item({ rank, title }: ItemProp) {
  return (
    <div className={styles.itemContainer}>
      {rank === 1 ? <Crown className={styles.crown} alt="1위 아이템" /> : <div className={styles.itemRank}>{rank}</div>}
      <div className={styles.itemTitle}>{title}</div>
    </div>
  );
}

export { HistoryVersions as Version };
