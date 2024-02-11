import { useForm } from 'react-hook-form';

import MockProfileImage from '/public/images/mock_profile.png';
import Camera from '/public/icons/camera.svg';

import ProfileImage from './_components/ProfileImage';
import * as styles from './styles.css';

/** 
 TODO
- [ ] 리액트 훅폼
- [ ] submit할때 여러 api 호출 필요
- [ ] isTouched 등 변화 감지 필요. 수정사항  있을때만 저장버튼 활성화
 */

const MockBackground = ['기본배경A', '기본배경B', '기본배경C', '기본배경D', '기본배경E', '기본배경F', '기본배경G'];
const MockProfile = ['A', 'B', 'C', 'D', 'E'];

export default function ProfilePage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <section className={styles.backgroundPreview}>
          <div className={styles.profilePreview}>
            <ProfileImage profileImageUrl={MockProfileImage} />
          </div>
        </section>
        <form className={styles.form}>
          <section className={styles.inputContainer}>
            <label className={styles.label}>닉네임</label>
            <input className={styles.inputText} />
          </section>
          <section className={styles.inputContainer}>
            <label className={styles.label}>소개</label>
            <textarea className={styles.textarea} />
          </section>
          <section className={styles.backgroundOptionContainer}>
            <label className={`${styles.backgroundOption} ${styles.inputFileLabel}`} htmlFor="backgroundImage">
              <Camera />
            </label>
            <input type="file" id="backgroundImage" className={styles.inputFile} accept=".jpg, .jpeg, .png" />
            {MockBackground.map((image) => (
              <button type="button" className={styles.backgroundOption}>
                {image}
              </button>
            ))}
          </section>
          <section className={styles.profileOptionContainer}>
            <label className={`${styles.profileOption} ${styles.inputFileLabel}`} htmlFor="profileImage">
              <Camera />
            </label>
            <input type="file" id="profileImage" className={styles.inputFile} accept=".jpg, .jpeg, .png" />
            {MockProfile.map((image) => (
              <button type="button" className={styles.profileOption}>
                {image}
              </button>
            ))}
          </section>
        </form>
      </div>
    </div>
  );
}
