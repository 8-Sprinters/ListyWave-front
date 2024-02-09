'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';

import * as styles from './UsersRecommendation.css';
import { recommendationUsersMockdata } from '../_mockdata/mockdata';
import { UsersRecommendationType } from '../_mockdata/mockdataType';
import CloseButton from '/public/icons/close_x_gray.svg';

function UsersRecommendation() {
  const [recommendUsersList, setRecommendUserList] = useState<UsersRecommendationType[]>(recommendationUsersMockdata);
  const wrapperRef = useRef<HTMLUListElement>(null);

  const handleRemoveUser = (id: number) => {
    if (!recommendUsersList) {
      return null;
    }
    const list = recommendUsersList.filter((listItem) => listItem?.id !== id);
    setRecommendUserList([...list]);
  };

  const handleScrollToRight = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTo({
        left: wrapperRef.current.scrollLeft + 234,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      {recommendUsersList?.length !== 0 && (
        <>
          <div className={styles.userRecommendationTitle}>사용자 추천</div>
          <ul className={styles.recommendUsersListWrapper} ref={wrapperRef}>
            {recommendUsersList?.map((item: UsersRecommendationType, index: number) => {
              return (
                <li key={item.id}>
                  <UserRecommendListItem
                    data={item}
                    handleRemoveUser={handleRemoveUser}
                    handleScrollToRight={handleScrollToRight}
                  />
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}

export default UsersRecommendation;

interface UserRecommendListItemProps {
  data: UsersRecommendationType;
  handleRemoveUser: (id: number) => null | undefined;
  handleScrollToRight: () => void;
}

function UserRecommendListItem({ data, handleRemoveUser, handleScrollToRight }: UserRecommendListItemProps) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowingState = () => {
    setIsFollowing((prev) => !prev);
  };

  const handleFollowButtonClick = () => {
    handleFollowingState();
    handleScrollToRight();
  };

  return (
    <>
      <div className={styles.recommendUserWrapper}>
        <button onClick={() => handleRemoveUser(data.id)}>
          <CloseButton width={24} height={24} alt="닫기 버튼" className={styles.closeButton} />
        </button>
        <div className={styles.imageWrapper}>
          <Image
            src={data.profileImageUrl}
            alt="추천 사용자 프로필 이미지"
            fill
            sizes="100vw 100vh"
            className={styles.recommendUserProfileImage}
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <h6 className={styles.recommendUserNickname}>{data.nickname}</h6>
        <p className={styles.recommendUserDescription}>최근 활동한 사용자입니다.</p>
        <button
          className={`${styles.followButtonDefault} ${isFollowing === true ? styles.followButtonFollowing : ''}`}
          onClick={handleFollowButtonClick}
        >
          <span>{isFollowing ? '팔로잉' : '팔로우'}</span>
        </button>
      </div>
    </>
  );
}
