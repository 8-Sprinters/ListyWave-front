import { useState } from 'react';
import * as styles from './LanguageDropdown.css';
import useBooleanOutput from '@/hooks/useBooleanOutput';
import useOnClickOutside from '@/hooks/useOnClickOutside';

export default function LanguageDropdown() {
  const { isOn, toggle, handleSetOff } = useBooleanOutput();
  const { ref } = useOnClickOutside(() => {
    handleSetOff();
  });
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');
  return (
    <div className={styles.container}>
      <div className={styles.triggerDiv} onClick={toggle}>
        {language === 'ko' ? '한국어' : 'English'}
      </div>
      {isOn && (
        <div ref={ref} className={styles.menuDiv}>
          <div
            className={`${styles.listDiv} ${language === 'ko' && styles.selected}`}
            onClick={() => {
              setLanguage('ko');
              handleSetOff();
            }}
          >
            한국어
          </div>
          <div
            className={`${styles.listDiv} ${language === 'en' && styles.selected}`}
            onClick={() => {
              setLanguage('en');
              handleSetOff();
            }}
          >
            English
          </div>
        </div>
      )}
    </div>
  );
}
