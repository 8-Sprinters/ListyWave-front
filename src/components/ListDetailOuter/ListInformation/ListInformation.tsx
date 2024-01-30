import Collaborators from '../Collaborators/Collaborators';
import { MOCKDATA_LIST } from '../mockdata';
import * as styles from './ListInformation.css';
import timeDiff from '@/lib/utils/timeDiff';

const LIST = MOCKDATA_LIST[0];

function ListInformation() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.categoryWrapper}>
          <div className={styles.categoryContainer}>
            <h3 className={styles.category}>{LIST.category}</h3>
          </div>
          <ul className={styles.labelWrapper}>
            {LIST.labels.map((item, idx) => {
              return (
                <li key={idx.toString()} className={styles.labelContainer}>
                  <h6 className={styles.label}>{`${item.name}`}</h6>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.listTitle}>{LIST.title}</div>
        <div className={styles.listDescription}>{LIST.description}</div>
      </div>
      <div className={styles.listComponentTemporary}>리스트 컴포넌트</div>
      <div className={styles.bottomWrapper}>
        <div className={styles.bottomLeftWrapper}>
          <img src={LIST.ownerProfileImageUrl} className={styles.profileImage}></img>
          <div className={styles.informationWrapper}>
            <div className={styles.listOwnerNickname}>{LIST.ownerNickname}</div>
            <div className={styles.infoDetailWrapper}>
              <span>{timeDiff(LIST.createdDate)}</span>
              <span>{LIST.isPublic ? '공개' : '비공개'}</span>
            </div>
          </div>
        </div>
        <div className={styles.collaboratorWrapper}>
          <Collaborators collaborators={LIST.collaborators} />
        </div>
      </div>
    </>
  );
}

export default ListInformation;
