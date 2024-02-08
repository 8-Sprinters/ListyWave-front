import { useState } from 'react';
import * as styles from './ColorSelector.css';

interface ColorSelectorProps {
  defaultColor: string;
  colors: string[];
  onClick: (color: string) => void;
}

/**
 * ColorSelector 컴포넌트:
 * 동그란 모양의 컬러팔레트로 구성된
 * 사용자의 클릭으로 색상을 선택할 수 있는 컴포넌트
 *
 * @param defaultColor - 기본 선택되는 색상 (#포함 6자리 hex코드 ("#ffffff"))
 * @param colors - #포함 6자리 hex코드 리스트 (["#ffffff",])
 * @param onClick - 색상 원을 클릭했을때 동작시킬 함수
 */
function ColorSelector({ defaultColor, colors, onClick }: ColorSelectorProps) {
  const [selectedColor, setSelectedColor] = useState(defaultColor);

  return (
    <div className={styles.backgroundContainer}>
      {colors.map((color) => (
        <button
          key={color}
          className={`${styles.colorCircle} ${selectedColor === color && styles.selectedColor}`}
          style={{ backgroundColor: color }}
          onClick={() => {
            onClick(color);
            setSelectedColor(color);
          }}
        />
      ))}
    </div>
  );
}

export default ColorSelector;
