import { useState } from 'react';
import * as styles from './LanguageDropdown.css';
import useBooleanOutput from '@/hooks/useBooleanOutput';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { useLanguage } from '@/store/useLanguage';
import { accountLocale } from '@/app/account/locale';

export default function LanguageDropdown() {
  const { isOn, toggle, handleSetOff } = useBooleanOutput();
  const { ref } = useOnClickOutside(handleSetOff);
  const { language, setLanguage } = useLanguage();

  const handleSelectLanguage = (language: 'ko' | 'en') => {
    setLanguage(language);
    handleSetOff();
  };

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.triggerDiv} onClick={toggle}>
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
