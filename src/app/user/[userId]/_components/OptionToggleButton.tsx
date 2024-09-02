import { MouseEvent } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import * as styles from './OptionToggleButton.css';

import OptionMenuIcon from '/public/icons/popup_menu.svg';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import useBooleanOutput from '@/hooks/useBooleanOutput';

import deleteList from '@/app/_api/list/deleteList';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

interface OptionToggleButton {
  listId: string;
  userId: number;
  isPublicCurrent: boolean;
}

// memoization
export default function OptionToggleButton({ listId, userId, isPublicCurrent }: OptionToggleButton) {
  const queryClient = useQueryClient();
  const { isOn: isPopupOpen, toggle: popupToggle, handleSetOff: handlePopupOff } = useBooleanOutput();
  const { ref: popupRef } = useOnClickOutside(handlePopupOff);

  const publicAction = isPublicCurrent ? '비공개' : '공개';

  const deleteListMutation = useMutation({
    mutationFn: () => deleteList(listId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.getAllList, userId] });
    },
    onError: () => {
      // TODO 에러핸들링 - 토스트메세지
    },
  });

  const handleOpenMenu = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    popupToggle();
  };

  const handleClickOption = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    console.log((e.target as HTMLButtonElement).id);

    deleteListMutation.mutate();
  };

  // 리스트 공개, 비공개 기능
  // const handleToggleVisibilityList = (e: MouseEvent<HTMLDivElement>) => {
  //   e.stopPropagation();
  // };

  return (
    <div ref={popupRef} className={styles.labelOption} onClick={handleOpenMenu}>
      <OptionMenuIcon alt="리스트 공개, 비공개 옵션" />
      {isPopupOpen && (
        <div className={styles.optionMenu} onClick={handleClickOption}>
          <button id="visibility" className={styles.optionTop}>
            {publicAction}
          </button>
          <button id="delete" className={styles.optionBottom}>
            삭제하기
          </button>
        </div>
      )}
    </div>
  );
}
