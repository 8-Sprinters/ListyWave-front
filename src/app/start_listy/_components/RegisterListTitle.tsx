import { useFormContext } from 'react-hook-form';

import * as styles from './CreateNicknameStep.css';
import * as stylesCategory from './CategoryButton.css';
import * as stylesList from './ListPreview.css';

import { CategoryType } from '@/lib/types/categoriesType';
import { ListCreateType } from '@/lib/types/listType';

interface ListTitleStepProps {
  selectedCategory: Omit<CategoryType, 'codeValue'>;
}

const onBoardlistTitleRules = {
  required: '제목을 입력해주세요',
  maxLength: {
    value: 30,
    message: '리스트 제목은 최대 30자까지 입력할 수 있어요.',
  },
};

export default function RegisterListTitle({ selectedCategory }: ListTitleStepProps) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<ListCreateType>();

  const watchForm = watch('title');

  return (
    <>
      <label className={styles.title}>리스트의 제목을 지어주세요.</label>
      <div className={styles.inputWrapper}>
        <input
          {...register('title', onBoardlistTitleRules)}
          autoComplete="off"
          autoFocus
          className={styles.input}
          // onChange={(e) => setTitle(e.target.value)} // TODO 렌더링 최소화 하는 방법으로 리팩토링 하기(watch or ref)
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
