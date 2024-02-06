import Image from 'next/image';
import { SimpleList } from '@/app/[userNickname]/[listId]/_components/ListDetailInner/RankList';
import { ListRecommendationMockdata } from '../_mockdata/mockdata';
import { ListRecommendationType } from '../_mockdata/mockdataType';

function ListRecommendation() {
  const listdata = ListRecommendationMockdata;

  return (
    <ul>
      {listdata.map((item: ListRecommendationType) => {
        return (
          <li key={item.id}>
            <ul>
              {item.labels.map((label) => {
                return (
                  <li key={label.id}>
                    <span>{label.name}</span>
                  </li>
                );
              })}
            </ul>
            <div>{item.title}</div>
            <div>{item.description}</div>
            <div>
              <Image src={item.ownerProfileImage} alt="리스트 생성자 이미지" width={30} height={30} />
              <div>{item.ownerNickname}</div>
            </div>
            <div>
              <SimpleList listData={item.items} />
              <div>
                투명배경
                <button>
                  <span>더보기</span>
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ListRecommendation;
