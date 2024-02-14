import { useEffect, useState } from 'react';
import * as styles from './RadioInput.css';

interface RadioInputProps {
  messages: {
    trueMessage: string;
    falseMessage: string;
  };
  onClick: (value: boolean) => void;
  defaultValue?: boolean;
}

/**
 * RadioInput 컴포넌트:
 * 두 개의 radio input 중 하나를 선택할 수 있는 기능을 제공
 *
 * @param props.messages - radio input을 선택했을때 아래 표시될 메시지들
 * @param props.onClick - radio input을 클릭했을때 실행시킬 함수
 */
function RadioInput({ messages, onClick, defaultValue }: RadioInputProps) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  return (
    <>
      <div className={styles.container}>
        <label>
          <input
            type="radio"
            checked={value}
            readOnly
            onClick={() => {
              onClick(true);
              setValue(true);
            }}
          />
          공개
        </label>

        <label>
          <input
            type="radio"
            checked={!value}
            readOnly
            onClick={() => {
              onClick(false);
              setValue(false);
            }}
          />
          비공개
        </label>
      </div>
      <div className={styles.message}>{value ? messages.trueMessage : messages.falseMessage}</div>
    </>
  );
}

export default RadioInput;
