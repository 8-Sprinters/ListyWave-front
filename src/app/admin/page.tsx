import Link from 'next/link';

import * as styles from './layout.css';
import Image from 'next/image';

export default function AdminPage() {
  return (
    <div className={styles.page}>
      <Link href={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/admin`}>
        <Image alt="관리자페이지 로고" src="/icons/ver3/logo_ver3.0.png" width={200} height={170} />
      </Link>
    </div>
  );
}
