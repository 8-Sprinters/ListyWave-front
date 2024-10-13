import { ChangeEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

import * as styles from './BottomSheet.css';
import createCollectionFolder from '@/app/_api/folder/createFolder';
import toasting from '@/lib/utils/toasting';
import toastMessage from '@/lib/constants/toastMessage';
import { useLanguage } from '@/store/useLanguage';
import Modal from '@/components/Modal/Modal';
import LoginModal from '@/components/login/LoginModal';
import useBooleanOutput from '@/hooks/useBooleanOutput';

interface BottomSheetProps {
  isOn: boolean;
  onClose: () => void;
}

export default function BottomSheet({ isOn, onClose }: BottomSheetProps) {
  const { language } = useLanguage();
  const { isOn: isLoginModalOn, handleSetOn: loginModalOn, handleSetOff: loginModalOff } = useBooleanOutput();

  const [value, setValue] = useState('');

  const createFolderMutation = useMutation({
    mutationFn: createCollectionFolder,
    onSuccess: (data) => {
      // TODO update folder list
      setValue('');
      onClose();
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        const errorData = error.response?.data;
        if (errorData.error === 'UNAUTHORIZED') {
          loginModalOn();
          return;
        }
        if (errorData.code.split('_')[0] === 'DUPLICATE') {
          toasting({ type: 'error', txt: toastMessage[language].duplicatedFolderName });
          return;
        }
      }
      toasting({ type: 'error', txt: toastMessage[language].failedFolder });
    },
  });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleCreateFolder = () => {
    if (!value.trim()) {
      toasting({ type: 'warning', txt: toastMessage[language].emptyFolderName });
      return;
    }
    createFolderMutation.mutate({
      folderName: value,
    });
  };

  return (
    <>
      <div className={isOn ? styles.container.open : styles.container.close}>
        <div className={styles.contents}>
          <h2 className={styles.contentTitle}>새로운 폴더</h2>
          <input
            autoFocus
            placeholder="폴더명을 작성해 주세요"
            value={value}
            onChange={handleChangeInput}
            className={styles.contentInput}
          />
          <div className={styles.optionButtons}>
            <button onClick={onClose} className={styles.variantButton.default}>
              취소
            </button>
            <button className={styles.variantButton.active} onClick={handleCreateFolder}>
              만들기
            </button>
          </div>
        </div>
      </div>

      {isLoginModalOn && (
        <Modal handleModalClose={loginModalOff} size="large">
          <LoginModal id="followLoginBtn" />
        </Modal>
      )}
    </>
  );
}
