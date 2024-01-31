import * as styles from './DefaultProfile.css';
import bg from '/public/icons/default_avatar.svg';

interface DefaultProfileProps {
  width?: number;
  height?: number;
  className?: string;
}

function DefaultProfile({ width, height }: DefaultProfileProps) {
  return (
    <>
      <img src={bg} className={styles.defaultProfile}></img>
    </>
  );
}

export default DefaultProfile;
