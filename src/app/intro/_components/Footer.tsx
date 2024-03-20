'use client';

import Link from 'next/link';

import { useUser } from '@/store/useUser';
import Modal from '@/components/Modal/Modal';
import LoginModal from '@/components/login/LoginModal';
import useBooleanOutput from '@/hooks/useBooleanOutput';

import * as styles from './Footer.css';
import { introLocale } from '@/app/intro/locale';
import { useLanguage } from '@/store/useLanguage';

function Footer() {
  const { language } = useLanguage();
  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput();
  const { user } = useUser();
  const userId = user?.id;

  return (
    <>
      {isOn && (
        <Modal handleModalClose={handleSetOff} size="large">
          <LoginModal />
        </Modal>
      )}
      <section className={styles.background}>
        <div className={styles.wrapper}>
          <div className={styles.buttonsWrapper}>
            <div className={styles.buttonContainer}>
              {userId === null && (
                <button className={styles.blueButton} onClick={handleSetOn}>
                  {introLocale[language].start}
                </button>
              )}
              <Link href={'/'}>
                <button className={styles.skyBlueButton}>{introLocale[language].tour}</button>
              </Link>
            </div>
          </div>
          <div className={styles.policyWrapper}>
            <p>{introLocale[language].privacy}</p>
            <p>에잇(Eight)</p>
            <p>listywave8@gmail.com</p>
            <p>Copyright ©Listywave - All rights reserved</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
