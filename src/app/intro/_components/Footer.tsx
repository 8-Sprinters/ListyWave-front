'use client';

import Link from 'next/link';

import Modal from '@/components/Modal/Modal';
import LoginModal from '@/components/login/LoginModal';
import useBooleanOutput from '@/hooks/useBooleanOutput';

import * as styles from './Footer.css';

function Footer() {
  const { isOn, handleSetOn, handleSetOff } = useBooleanOutput();

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
              <button className={styles.blueButton} onClick={handleSetOn}>
                시작하기
              </button>
              <Link href={'/'}>
                <button className={styles.skyBlueButton}>둘러보기</button>
              </Link>
            </div>
          </div>
          <div className={styles.policyWrapper}>
            <p>개인정보 취급방침</p>
            {/* <p>seoyoungiyo@gmail.com</p> */}
            <p>Copyright ©Listywave - All rights reserved</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
