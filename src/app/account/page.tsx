'use client';
import { useRouter } from 'next/navigation';
import useBooleanOutput from '@/hooks/useBooleanOutput';
import Header from '@/components/Header/Header';
import useMoveToPage from '@/hooks/useMoveToPage';

import UserIcon from '/public/icons/user.svg';
import GlobeIcon from '/public/icons/globe.svg';
import HelpIcon from '/public/icons/help_circle.svg';
import MessageIcon from '/public/icons/message_square.svg';
import LogoutIcon from '/public/icons/logout.svg';
import WithdrawIcon from '/public/icons/withdraw_x.svg';

import LogoutModal from './_components/LogoutModal';
import LanguageDropdown from './_components/LanguageDropdown';
import * as styles from './page.css';

export default function AccountPage() {
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();
  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput();

  const handleDivLinkClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <Header
        left="back"
        leftClick={() => {
          router.back();
        }}
        title="마이페이지"
        right={<div />} //TODO: 공용HEADER 수정후 DIV없애기
      />
      <section className={styles.container}>
        <div className={styles.buttonDiv} onClick={onClickMoveToPage('account/profile')} role="button">
          <div className={styles.titleDiv}>
            <UserIcon width={24} height={24} alt="프로필 설정" />
            프로필설정
          </div>
        </div>
        <div className={styles.baseDiv}>
          <div className={styles.titleDiv}>
            <GlobeIcon width={24} height={24} alt="언어변경" />
            언어
          </div>
          <LanguageDropdown />
        </div>
        <div
          className={styles.buttonDiv}
          onClick={() => {
            handleDivLinkClick('https://open.kakao.com/o/saz6DObg');
          }}
        >
          <div className={styles.titleDiv}>
            <HelpIcon width={24} height={24} alt="문의하기" />
            문의하기
          </div>
        </div>
        <div className={styles.buttonDiv}>
          <div className={styles.titleDiv}>
            <MessageIcon width={24} height={24} alt="의견 보내기" />
            의견 보내기
          </div>
        </div>
        <div className={styles.buttonDiv} onClick={handleSetOn} role="button">
          <div className={styles.titleDiv}>
            <LogoutIcon width={24} height={24} alt="로그아웃" />
            로그아웃
          </div>
        </div>
        {isOn && <LogoutModal handleSetOff={handleSetOff} />}
        <div className={styles.buttonDiv}>
          <div className={styles.titleDiv}>
            <WithdrawIcon width={24} height={24} alt="탈퇴" />
            회원탈퇴
          </div>
        </div>
      </section>
    </>
  );
}
