'use client';
import { useRouter, useParams } from 'next/navigation';
import BackButton from '/public/icons/back.svg';
import * as styles from './Header.css';
import { useUser } from '@/store/useUser';

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  const router = useRouter();
  const param = useParams<{ userId: string }>();
  const { user } = useUser();

  const handleBackButtonClick = () => {
    router.push(`/user/${user.id}/mylist`);
  };

  return (
    <div className={styles.header}>
      <BackButton width={'8'} height={'14'} alt="뒤로가기" onClick={handleBackButtonClick} />
      <h1 className={styles.headerTitle}>{title}</h1>
    </div>
  );
}

export default Header;
