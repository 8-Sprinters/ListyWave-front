import { useFormContext } from 'react-hook-form';

import * as styles from './CreateNicknameStep.css';
import * as stylesCategory from './CategoryButton.css';
import * as stylesList from './ListPreview.css';
import SearchBar from '@/app/intro/_components/SearchBar';

import { CategoryType } from '@/lib/types/categoriesType';
import { ListCreateType } from '@/lib/types/listType';
import { startListyLocale } from '@/app/start-listy/locale';
import { useLanguage } from '@/store/useLanguage';

interface ListTitleStepProps {
  selectedCategory: Omit<CategoryType, 'codeValue'>;
}

export default function RegisterListTitle({ selectedCategory }: ListTitleStepProps) {
  const { language } = useLanguage();

  const onBoardlistTitleRules = {
    required: startListyLocale[language].enterTitle,
    maxLength: {
      value: 30,
      message: startListyLocale[language].maxTitleMessage,
    },
  };

  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<ListCreateType>();

  const watchForm = watch('title'); // TODO 렌더링 최소화 하는 방법으로 리팩토링 하기(ex. debounced)

  return (
    <>
      <label className={styles.title}>{startListyLocale[language].makeListTitle}</label>
      <SearchBar />
      <div className={styles.inputWrapper}>
        <input
          {...register('title', onBoardlistTitleRules)}
          autoComplete="off"
          autoFocus
          maxLength={31}
          className={styles.input}
        />
        <p className={styles.errorMessage}>{errors.title?.message}</p>
      </div>
      <div className={stylesList.container}>
        <button className={stylesCategory.variants[`${selectedCategory.nameValue}Button`]}>
          {selectedCategory.korNameValue}
        </button>
        <p className={stylesList.title}>{watchForm}</p>
      </div>
    </>
  );
}
