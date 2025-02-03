import * as styles from './Header.css';
import SelectComponent from '@/components/SelectComponent/SelectComponent';
import { listLocale } from '@/app/list/[listId]/locale';
import { useLanguage } from '@/store/useLanguage';
import formatDateTime from '@/lib/utils/dateTimeFormat';
import LockIcon from '*.svg';
import { vars } from '@/styles/__theme.css';

interface OptionsProps {
  value: string;
  label: string;
}

interface HeaderProps {
  handleChangeListType: (target: OptionsProps) => void | undefined;
  headerData: {
    updateCount: number;
    lastUpdatedDate: Date;
  };
}

function Header({ handleChangeListType, headerData }: HeaderProps) {
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
      <div className={styles.infoDetailWrapper}>
        <span>{formatDateTime(String(headerData.lastUpdatedDate))}</span>
        <span>{headerData.updateCount === 0 ? '첫 업로드!' : `업데이트 ${headerData.updateCount}회째`}</span>
        {/*{list?.isPublic === false && <LockIcon width={12} height={12} fill={vars.color.gray5} />}*/}
      </div>
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
