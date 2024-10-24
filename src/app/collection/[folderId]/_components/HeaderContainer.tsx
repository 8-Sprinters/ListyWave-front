'use client';

import BottomSheet from '@/components/BottomSheet/BottomSheet';
import Header from '@/components/Header/Header';

import useBooleanOutput from '@/hooks/useBooleanOutput';

export default function HeaderContainer() {
  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput();

  const bottomSheetOptionList = [
    {
      key: 'editFolder',
      title: '폴더 이름 바꾸기',
      onClick: () => {},
    },
    {
      key: 'deleteFolder',
      title: '폴더 삭제하기',
      onClick: () => {},
    },
  ];

  const RightButton = () => {
    const handleClickOption = () => {
      handleSetOn();
    };
    return <button onClick={handleClickOption}>수정</button>;
  };

  return (
    <>
      <Header title="콜렉션" left="back" right={<RightButton />} leftClick={() => history.back()} />
      {isOn && <BottomSheet onClose={handleSetOff} optionList={bottomSheetOptionList} isActive />}
    </>
  );
}
