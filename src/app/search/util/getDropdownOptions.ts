import { searchLocale } from '@/app/search/locale';

export const getDropdownOptions = (hasKeyword: boolean, language: string) => {
  if (hasKeyword) {
    return [
      {
        value: 'new',
        label: searchLocale[language].new,
      },
      {
        value: 'old',
        label: searchLocale[language].old,
      },
      {
        value: 'related',
        label: searchLocale[language].related,
      },
      {
        value: 'collect',
        label: searchLocale[language].collect,
      },
    ];
  }
  return [
    {
      value: 'new',
      label: searchLocale[language].new,
    },
    {
      value: 'old',
      label: searchLocale[language].old,
    },
    {
      value: 'collect',
      label: searchLocale[language].collect,
    },
  ];
};
