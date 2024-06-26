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
          <LoginModal id="introLoginBtn" />
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
            <Link
              className={styles.policyWrapper}
              href={'https://cypress-tv-724.notion.site/2118cc63884e4365b753cac553f3f7ed?pvs=4'}
            >
              {introLocale[language].privacy}
            </Link>
            <p>에잇(Eight)</p>
            <p>Makers : 에잇(Eight, listywave8@gmail.com)</p>
            <p>Copyright ©Listywave - All rights reserved</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
