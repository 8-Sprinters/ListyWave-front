import { useFormContext } from 'react-hook-form';

import * as styles from './CreateNicknameStep.css';
import * as stylesCategory from './CategoryButton.css';
import * as stylesList from './ListPreview.css';

import { itemTitleRules } from '@/lib/constants/formInputValidationRules';
import { CategoryType } from '@/lib/types/categoriesType';
import { ListCreateType } from '@/lib/types/listType';
import { useLanguage } from '@/store/useLanguage';

interface ItemsStepProps {
  selectedCategory: Omit<CategoryType, 'codeValue'>;
}

export default function RegisterItems({ selectedCategory }: ItemsStepProps) {
  const { language } = useLanguage();
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext<ListCreateType>();

  return (
    <>
      <label className={styles.title}>
        {language === 'ko' ? '리스트에 넣을 1, 2, 3위' : 'Please write down the 1st, 2nd, and 3rd'}
        <br />
        {language === 'ko' ? '아이템을 적어주세요.' : 'items to be included in the list'}
      </label>
      <div className={stylesList.container}>
        <button className={stylesCategory.variants[`${selectedCategory.nameValue}Button`]}>
          {selectedCategory.korNameValue}
        </button>
        <p className={stylesList.title}>{getValues('title')}</p>
        <div className={stylesList.items}>
          {new Array(3).fill(0).map((_, index) => (
            <div key={index} className={stylesList.item}>
              <div className={stylesList.inputBox}>
                <div>
                  {index + 1}
                  {'. '}
                </div>
                <input
                  {...register(`items.${index}.title`, itemTitleRules)}
                  autoComplete="off"
                  className={stylesList.input}
                  autoFocus={index === 0}
                />
              </div>
              <p className={stylesList.errorMessage}>{errors.items?.[index]?.title?.message}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
