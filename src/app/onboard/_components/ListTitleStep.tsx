import { CategoryType } from '@/lib/types/categoriesType';
import { useFormContext } from 'react-hook-form';
import { FormErrors } from '../page';

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

export default function ListTitleStep({ selectedCategory }: ListTitleStepProps) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  // const formErrors: FieldErrors = errors;

  const watchForm = watch('title');

  return (
    <>
      <label>리스트의 제목을 지어주세요.</label>
      <input
        {...register('title', onBoardlistTitleRules)}
        placeholder="리스트의 제목을 지어주세요."
        autoComplete="off"
        // onChange={(e) => setTitle(e.target.value)} // TODO 렌더링 최소화 하는 방법으로 리팩토링 하기(watch or ref)
      />
      {/* <p>{errors.title?.message}</p> */}
      <div>
        <span>{selectedCategory.korNameValue}</span>
        <p>{watchForm}</p>
      </div>
    </>
  );
}
