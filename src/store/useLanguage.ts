import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type LanguageType = 'ko' | 'en';

interface LanguageStateType {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
}

const initialValue: LanguageType = 'ko';

const useLanguageStore = create<LanguageStateType>()(
  devtools(
    persist(
      (set) => ({
        language: initialValue,
        setLanguage: (language) =>
          set(() => ({
            language: language,
          })),
      }),
      {
        name: 'language-storage', // localStorage에 저장될 이름
      }
    ),
    {
      name: 'language-store', // Devtools에서 사용될 스토어 이름
    }
  )
);

export const useLanguage = useLanguageStore;
