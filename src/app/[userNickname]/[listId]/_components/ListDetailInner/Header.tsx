import * as styles from './Header.css';
import SelectComponent from '@/components/SelectComponent/SelectComponent';

interface OptionsProps {
  value: string;
  label: string;
}

interface HeaderProps {
  handleChangeListType: (target: OptionsProps) => void | undefined;
}

const dropdownOptions = [
  {
    value: 'simple',
    label: '간단히',
  },
  {
    value: 'detail',
    label: '자세히',
  },
];
function Header({ handleChangeListType }: HeaderProps) {
  return (
    <div className={styles.container}>
      <SelectComponent name="listType" options={dropdownOptions} isSearchable={false} onChange={handleChangeListType} />
    </div>
  );
}

export default Header;
