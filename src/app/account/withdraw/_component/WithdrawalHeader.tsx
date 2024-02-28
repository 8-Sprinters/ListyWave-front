'use client';
import Header from '@/components/Header/Header';
import useMoveToPage from '@/hooks/useMoveToPage';
import { accountLocale } from '@/app/account/locale';
import { useLanguage } from '@/store/useLanguage';

export default function WithdrawalHeader() {
  const { language } = useLanguage();
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <Header
      title={accountLocale[language].withdrawal}
      left="back"
      leftClick={onClickMoveToPage('/account')}
      right={<div />}
    />
  );
}
