import { useFormContext } from 'react-hook-form';

import { itemTitleRules } from '@/lib/constants/formInputValidationRules';
import { CategoryType } from '@/lib/types/categoriesType';
import { ListCreateType } from '@/lib/types/listType';

interface ItemsStepProps {
  selectedCategory: Omit<CategoryType, 'codeValue'>;
}

export default function RegisterItems({ selectedCategory }: ItemsStepProps) {
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext<ListCreateType>();

  return (
    <>
      <label>
        리스트에 넣을 1, 2, 3위 <br /> 아이템을 적어주세요.
      </label>
      <div>
        <span>{selectedCategory.korNameValue}</span>
        <p>{getValues('title')}</p>
        <div>
          {new Array(3).fill(0).map((_, index) => (
            <div key={index}>
              <input
                {...register(`items.${index}.title`, itemTitleRules)}
                placeholder={`${index + 1}위 아이템을 입력해주세요.`}
                autoComplete="off"
              />
              <p>{errors.items?.[index]?.title?.message}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
