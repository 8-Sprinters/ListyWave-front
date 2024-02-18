'use client';
import { useRouter, useParams } from 'next/navigation';
import BackButton from '/public/icons/back.svg';
import * as styles from './Header.css';

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  const router = useRouter();
  const param = useParams<{ userId: string }>();

  const handleBackButtonClick = () => {
    router.push(`/user/${param?.userId}/mylist`);
  };

  return (
    <div className={styles.header}>
      <BackButton width={'24'} height={'24'} alt="뒤로가기" onClick={handleBackButtonClick} />
      <h1 className={styles.headerTitle}>{title}</h1>
    </div>
  );
}

export default Header;
