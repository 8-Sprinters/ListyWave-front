import * as styles from './Header.css';
import SelectComponent from '@/components/SelectComponent/SelectComponent';
import EyeIcon from '/public/icons/eye_on.svg';
import { useUser } from '@/store/useUser';
import { useParams } from 'next/navigation';

interface OptionsProps {
  value: string;
  label: string;
}

interface HeaderProps {
  handleChangeListType: (target: OptionsProps) => void | undefined;
  data: { viewCount: number };
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
function Header({ data, handleChangeListType }: HeaderProps) {
  const params = useParams<{ userId: string; listId: string }>();
  const { user: loginUser } = useUser();

  const writerId = parseInt(params?.userId ?? '0');
  return (
    <div className={styles.container}>
      <div className={styles.viewCountWrapper}>
        {loginUser.id === writerId && (
          <>
            <EyeIcon />
            {data.viewCount ?? 0}
          </>
        )}
      </div>
      <SelectComponent name="listType" options={dropdownOptions} isSearchable={false} onChange={handleChangeListType} />
    </div>
  );
}

export default Header;
