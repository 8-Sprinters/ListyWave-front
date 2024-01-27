import { MOCKDATA_LIST } from '../mockdata';
import * as S from './ListInformation.css';
import timeDiff from '@/lib/utils/timeDiff';

const LIST = MOCKDATA_LIST[0];

function ListInformation() {
  return (
    <>
      <div className={S.Wrapper}>
        <div className={S.CategoryWrapper}>
          <div>{LIST.category}</div>
          <div>{`>`}</div>
          <ul className={S.LabelWrapper}>
            {LIST.labels.map((item, idx) => {
              return <li key={idx.toString()} className={S.Label}>{`[${item.name}]`}</li>;
            })}
          </ul>
        </div>
        <div className={S.ListTitle}>{LIST.title}</div>
        <div className={S.ListDescription}>{LIST.description}</div>
      </div>
      <div className={S.ListComponentTemporary}>리스트 컴포넌트</div>
      <div className={S.BottomWrapper}>
        <div className={S.BottomLeftWrapper}>
          <div className={S.ProfileImage}></div>
          <div>
            <div className={S.ListOwnerNickname}>{LIST.ownerNickname}</div>
            <div className={S.ListCreatedTimeWrapper}>
              <span>{timeDiff(LIST.createdDate)}</span>
              <span>비공개</span>
            </div>
          </div>
        </div>
        <div className={S.CollaboratorWrapper}>
          <span className={S.CollaboratorTitle}>콜라보레이터</span>
          <div className={S.CollaboratorComponent}></div>
        </div>
      </div>
    </>
  );
}

export default ListInformation;
