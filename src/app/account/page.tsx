'use client';

import useBooleanOutput from '@/hooks/useBooleanOutput';
import useMoveToPage from '@/hooks/useMoveToPage';
import Header from '@/components/Header/Header';
import LogoutModal from './_components/LogoutModal';

import UserIcon from '/public/icons/user.svg';
import SettingIcon from '/public/icons/settings.svg';
import GlobeIcon from '/public/icons/globe.svg';
import HelpIcon from '/public/icons/help_circle.svg';
import MessageIcon from '/public/icons/message_square.svg';
import LogoutIcon from '/public/icons/logout.svg';
import WithdrawIcon from '/public/icons/withdraw_x.svg';
import * as styles from './style.css';
import LanguageDropdown from './_components/LanguageDropdown';
import { useUser } from '@/store/useUser';

export default function AccountPage() {
  const { user } = useUser();
  const userId = user.id;
  const { onClickMoveToPage } = useMoveToPage();
  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput();

  return (
    <>
      <Header
        left="back"
        leftClick={onClickMoveToPage(`/user/${userId}/mylist`)}
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
        <div className={styles.buttonDiv}>
          <div className={styles.titleDiv}>
            <SettingIcon width={24} height={24} alt="리스트 관리" />
            리스트 관리
          </div>
        </div>
        <div className={styles.baseDiv}>
          <div className={styles.titleDiv}>
            <GlobeIcon width={24} height={24} alt="언어변경" />
            언어
          </div>
          <LanguageDropdown />
        </div>
        <div className={styles.buttonDiv}>
          <div className={styles.titleDiv}>
            <HelpIcon width={24} height={24} alt="FAQ" />
            FAQ
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
