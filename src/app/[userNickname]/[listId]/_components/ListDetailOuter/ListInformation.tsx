import Label from '@/components/Label/Label';
import Collaborators from '@/app/[userNickname]/[listId]/_components/ListDetailOuter/Collaborators';
import timeDiff from '@/lib/utils/timeDiff';
import * as styles from './ListInformation.css';
import { MOCKDATA_LIST } from './mockdata';

const LIST = MOCKDATA_LIST[0];

function ListInformation() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.categoryWrapper}>
          <div className={styles.labelWrapper}>
            <Label colorType="skyblue">음악</Label>
          </div>
          {LIST.labels.map((item, idx) => {
            return (
              <div className={styles.labelWrapper} key={idx.toString()}>
                <Label colorType="blue">{`${item.name}`}</Label>
              </div>
            );
          })}
        </div>
        <div className={styles.listTitle}>{LIST.title}</div>
        <div className={styles.listDescription}>{LIST.description}</div>
      </div>
      <div className={styles.listComponentTemporary}>리스트 컴포넌트</div>
      <div className={styles.bottomWrapper}>
        <div className={styles.bottomLeftWrapper}>
          <img
            src={LIST.ownerProfileImageUrl}
            alt="유저프로필 이미지"
            width={36}
            height={36}
            className={styles.profileImage}
          ></img>
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
