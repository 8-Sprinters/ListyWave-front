import * as styles from './Header.css';
import SelectComponent from '@/components/SelectComponent/SelectComponent';
import { listLocale } from '@/app/list/[listId]/locale';
import { useLanguage } from '@/store/useLanguage';

interface OptionsProps {
  value: string;
  label: string;
}

interface HeaderProps {
  handleChangeListType: (target: OptionsProps) => void | undefined;
}

function Header({ handleChangeListType }: HeaderProps) {
  const { language } = useLanguage();

  const dropdownOptions = [
    {
      value: 'simple',
      label: listLocale[language].simple,
    },
    {
      value: 'detail',
      label: listLocale[language].detail,
    },
  ];

  return (
    <div className={styles.container}>
      <SelectComponent
        defaultValue={dropdownOptions[1]}
        name="listType"
        options={dropdownOptions}
        isSearchable={false}
        onChange={handleChangeListType}
      />
    </div>
  );
}

export default Header;
