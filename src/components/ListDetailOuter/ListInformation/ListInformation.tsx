import Collaborators from '../Collaborators/Collaborators';
import { MOCKDATA_LIST } from '../mockdata';
import * as styles from './ListInformation.css';
import timeDiff from '@/lib/utils/timeDiff';

const LIST = MOCKDATA_LIST[0];

function ListInformation() {
  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.CategoryWrapper}>
          <div>{LIST.category}</div>
          <div>{`>`}</div>
          <ul className={styles.LabelWrapper}>
            {LIST.labels.map((item, idx) => {
              return <li key={idx.toString()} className={styles.Label}>{`[${item.name}]`}</li>;
            })}
          </ul>
        </div>
        <div className={styles.ListTitle}>{LIST.title}</div>
        <div className={styles.ListDescription}>{LIST.description}</div>
      </div>
      <div className={styles.ListComponentTemporary}>리스트 컴포넌트</div>
      <div className={styles.BottomWrapper}>
        <div className={styles.BottomLeftWrapper}>
          <div className={styles.ProfileImage}></div>
          <div>
            <div className={styles.ListOwnerNickname}>{LIST.ownerNickname}</div>
            <div className={styles.ListCreatedTimeWrapper}>
              <span>{timeDiff(LIST.createdDate)}</span>
              <span>비공개</span>
            </div>
          </div>
        </div>
        <div className={styles.CollaboratorWrapper}>
          <span className={styles.CollaboratorTitle}>콜라보레이터</span>
          <Collaborators collaborators={LIST.collaborators} />
        </div>
      </div>
    </>
  );
}

export default ListInformation;
