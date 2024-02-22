import Modal from '@/components/Modal/Modal';
import BottomSheet from '../../_components/BottomSheet/BottomSheet';
import Kebab from '/public/icons/vertical_kebab_button.svg';
import Crown from '/public/icons/crown.svg';
import Private from '/public/icons/lock_alt.svg';
import ArrowDown from '/public/icons/chevron_down_sm.svg';

import useBooleanOutput from '@/hooks/useBooleanOutput';
import mock from '../mock.json';

import * as styles from './HistoryVersions.css';

// interface VersionHistoryProps {}
function HistoryVersions() {
  const { isOn: isBottonsheetOpen, handleSetOff: closeBottomsheet, handleSetOn: openBottomsheet } = useBooleanOutput();
  const { isOn: isModalOn, handleSetOff: closeModal, handleSetOn: openModal } = useBooleanOutput();

  const bottomSheetOptionList = [
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

  const handleTogglePublic = () => {
    // console.log('히스토리 공개/비공개 토글 API');
  };

  const handleDeleteHistory = () => {
    // console.log('히스토리 삭제 API');
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.dateDropdown}>
          02-21
          {false ? null : <ArrowDown alt="날짜 드롭다운" />}
        </div>
        {true ? (
          <button className={styles.kebabButton} onClick={openBottomsheet}>
            <Kebab className={styles.kebabIcon} alt="더보기 버튼" />
          </button>
        ) : null}

        <div className={styles.date}>
          {false ? null : <Private />}
          2024-02-20
        </div>
        <div className={styles.itemsContainer}>
          <Item rank={1} title={'니가가라 하와이'} />
          <Item rank={2} title={'얼마면 돼'} />
          <Item rank={3} title={'견우야~ 엄청 긴 아이템 타이틀 길이도 커버를 할 수 있어야 한다는게 어렵다'} />
        </div>
      </div>

      {isBottonsheetOpen && (
        <BottomSheet onClose={closeBottomsheet} optionList={bottomSheetOptionList} isActive={isBottonsheetOpen} />
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
