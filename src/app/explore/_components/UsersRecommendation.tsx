'use client';
import { useState } from 'react';
import Image from 'next/image';

import * as styles from './UsersRecommendation.css';
import { recommendationUsersMockdata } from '../_mockdata/mockdata';
import { UsersRecommendationType } from '../_mockdata/mockdataType';
import CloseButton from '/public/icons/close_x_gray.svg';

function UsersRecommendation() {
  const [recommendUsersList, setRecommendUserList] = useState<UsersRecommendationType[]>(recommendationUsersMockdata);

  const handleRemoveUser = (id: number) => {
    if (!recommendUsersList) {
      return null;
    }
    const list = recommendUsersList.filter((listItem) => listItem?.id !== id);
    setRecommendUserList([...list]);
  };

  return (
    <>
      {recommendUsersList?.length !== 0 && (
        <>
          <div className={styles.userRecommendationTitle}>사용자 추천</div>
          <ul className={styles.recommendUsersListWrapper}>
            {recommendUsersList?.map((item: UsersRecommendationType) => {
              return (
                <li key={item.id} className={styles.recommendUserWrapper}>
                  <button onClick={() => handleRemoveUser(item.id)}>
                    <CloseButton width={24} height={24} alt="닫기 버튼" className={styles.closeButton} />
                  </button>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={item.profileImageUrl}
                      alt="추천 사용자 프로필 이미지"
                      fill
                      sizes="100vw 100vh"
                      className={styles.recommendUserProfileImage}
                      style={{
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <h6 className={styles.recommendUserNickname}>{item.nickname}</h6>
                  <p className={styles.recommendUserDescription}>최근 활동한 사용자입니다.</p>
                  <button className={styles.followButton}>
                    <span className={styles.followText}>팔로우</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}

export default UsersRecommendation;
