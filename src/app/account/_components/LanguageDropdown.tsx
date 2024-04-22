import { useCallback, useEffect, useRef } from 'react';

import * as styles from './LanguageDropdown.css';

import { useLanguage } from '@/store/useLanguage';
import { accountLocale } from '@/app/account/locale';
import useBooleanOutput from '@/hooks/useBooleanOutput';

export default function LanguageDropdown() {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const { isOn, handleSetOff, toggle } = useBooleanOutput();
  const { language, setLanguage } = useLanguage();

  const handleSelectLanguage = (language: 'ko' | 'en') => {
    setLanguage(language);
    handleSetOff();
  };

  const handleClickOutside = useCallback(
    (e: Event) => {
      if (dropDownRef.current !== null && !dropDownRef.current.contains(e.target as Node)) {
        handleSetOff();
      }
    },
    [handleSetOff]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchend', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchend', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className={styles.container} ref={dropDownRef}>
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
