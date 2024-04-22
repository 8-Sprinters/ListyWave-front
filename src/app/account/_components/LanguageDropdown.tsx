import { useRef, useState } from 'react';
import * as styles from './LanguageDropdown.css';
import { useLanguage } from '@/store/useLanguage';
import { accountLocale } from '@/app/account/locale';

export default function LanguageDropdown() {
  const [isOn, setIsOn] = useState(false);
  const dropDownRef = useRef(null);
  const { language, setLanguage } = useLanguage();

  const handleSelectLanguage = (language: 'ko' | 'en') => {
    setLanguage(language);
    setIsOn(false);
  };

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div ref={dropDownRef} className={styles.container}>
      <div className={styles.triggerDiv} onClick={handleToggle}>
        {language === 'ko' ? accountLocale[language].korean : accountLocale[language].english}
      </div>
      {isOn && (
        <div className={styles.menuDiv}>
          <div
            className={`${styles.listDiv} ${language === 'ko' && styles.selected}`}
            onClick={() => {
              handleSelectLanguage('ko');
            }}
          >
            {accountLocale[language].korean}
          </div>
          <div
            className={`${styles.listDiv} ${language === 'en' && styles.selected}`}
            onClick={() => {
              handleSelectLanguage('en');
            }}
          >
            {accountLocale[language].english}
          </div>
        </div>
      )}
    </div>
  );
}
