import { useFormContext } from 'react-hook-form';
import ClearButton from '/public/icons/x_circle_fill.svg';
import * as styles from './SimpleInput.css';

interface SimpleInputProps {
  type: 'short' | 'long';
  name: string;
  placeholder: string;
  rules: {
    required?: {
      errorMessage: string;
    };
    maxLength?: {
      length: number;
      errorMessage: string;
    };
  };
}

/**
 * SimpleInput 컴포넌트: 
 * 텍스트를 입력받는 컴포넌트
 *
 * @param props.type - 인풋의 길이에 따른 타입
 * @param props.name - 인풋을 관리할 리액트훅폼 프로퍼티 이름
 * @param props.placeholder - 입력란에 들어갈 placeholder 
 * @param props.rules - 길이제한, 개수제한, 요구, 중복허용 등 입력 제한과 오류메시지를 위한 룰

 */
function SimpleInput({ type, name, placeholder, rules }: SimpleInputProps) {
  const { register, setValue, formState } = useFormContext();
  const { errors } = formState;

  return (
    <div className={styles.container}>
      {type === 'long' ? (
        <textarea
          className={styles.textareaBox}
          placeholder={placeholder}
          {...register(name, {
            required: rules.required && rules.required.errorMessage,
            maxLength: rules.maxLength && {
              value: rules.maxLength.length,
              message: rules.maxLength.errorMessage,
            },
          })}
        />
      ) : (
        <>
          <input
            className={styles.inputBox}
            type="text"
            placeholder={placeholder}
            {...register(name, {
              required: rules.required && rules.required.errorMessage,
              maxLength: rules.maxLength && {
                value: rules.maxLength.length,
                message: rules.maxLength.errorMessage,
              },
            })}
          />
          <ClearButton
            className={styles.clearButton}
            onClick={() => {
              setValue(name, '');
            }}
          />
        </>
      )}
      {errors[name] && <div className={styles.error}>{errors[name]?.message?.toString()}</div>}
    </div>
  );
}

export default SimpleInput;
