import { ChangeEvent } from 'react';
import * as styles from '@/components/ListDetailInner/Header/style.css';

interface HeaderProps {
  handleChangeListType?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

function Header({ handleChangeListType }: HeaderProps) {
  return (
    <div className={styles.container}>
      <select onChange={handleChangeListType}>
        <option value="simple">간단히</option>
        <option value="detail">자세히</option>
      </select>
    </div>
  );
}

export default Header;
