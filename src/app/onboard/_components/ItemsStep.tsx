import { useFormContext } from 'react-hook-form';

import { itemTitleRules } from '@/lib/constants/formInputValidationRules';
import { CategoryType } from '@/lib/types/categoriesType';

interface ItemsStepProps {
  selectedCategory: Omit<CategoryType, 'codeValue'>;
  title: string;
}

export default function ItemsStep({ selectedCategory, title }: ItemsStepProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <label>
        리스트에 넣을 1, 2, 3위 <br /> 아이템을 적어주세요.
      </label>
      <div>
        <span>{selectedCategory.korNameValue}</span>
        <p>{title}</p>
        <div>
          {new Array(3).fill(0).map((_, index) => (
            <div key={index}>
              <input
                {...register(`items.${index}.title`, itemTitleRules)}
                placeholder={`${index + 1}위 아이템을 입력해주세요.`}
                autoComplete="off"
              />
              {/* <p>{errors.items?.[index]?.title?.message}</p> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
