'use client';
import { useEffect, useRef, useState } from 'react';

import UserProfileImage from '@/components/UserProfileImage/UserProfileImage';
import SearchIcon from '/public/icons/search.svg';
import EraseButton from '/public/icons/x_circle_fill.svg';

import * as styles from './MemberSelector.css';

import { UserProfileType } from '@/lib/types/userProfileType';

interface MemberSelectorProps {
  placeholder: string;
  members: UserProfileType[];
  fetchData: () => Promise<void>;
  onClickAdd: (userId: number) => void;
  onClickDelete: (userId: number) => void;
  rules?: {
    required?: {
      errorMessage: string;
    };
    maxNum?: {
      value: number;
      errorMessage: string;
    };
  };
  defaultValue?: UserProfileType[];
}

/**
 * MemberSelector 컴포넌트:
 * 사용자의 프로필 목록을 보여주고, 검색을 통해 사용자를 선택하는 기능 제공
 *
 * @param placeholder - 검색 입력란에 보여질 placeholder
 * @param members - 드롭다운 보여질 사용자 프로필 목록
 * @param fetchData - 검색어가 입력됨에따라 보여질 멤버 목록을 업데이트할 함수
 * @param onClickAdd - 선택한 멤버를 추가하는 함수
 * @param onClickDelete - 사용자를 선택 취소하는 함수
 */
function MemberSelector({
  placeholder,
  members = [],
  fetchData,
  onClickAdd,
  onClickDelete,
  rules,
  defaultValue,
}: MemberSelectorProps) {
  const [input, setInput] = useState('');
  const [selectedList, setSelectedList] = useState<UserProfileType[]>(defaultValue || []);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeDropdown = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        inputRef.current &&
        listRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !inputRef.current.contains(event.target as Node) &&
        !listRef.current.contains(event.target as Node)
      ) {
        setIsDropDownOpen(false);
      }
    };
    document.addEventListener('click', closeDropdown);

    fetchData();

    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  useEffect(() => {
    if (defaultValue) {
      setSelectedList(defaultValue);
    }
  }, [defaultValue]);

  return (
    <div className={styles.container}>
      {/* 멤버 검색 인풋박스 */}
      <input
        ref={inputRef}
        className={styles.inputBox}
        type={'text'}
        placeholder={placeholder}
        onClick={() => {
          setIsDropDownOpen(true);
        }}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <SearchIcon className={styles.searchIcon} />

      {/* 멤버 검색 드롭다운 */}
      {isDropDownOpen && (
        <div className={styles.dropdown} ref={dropdownRef} style={{ height: isDropDownOpen ? '152px' : '0' }}>
          {members
            .filter((user) => user.nickname.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
            .map((user) => (
              <div
                key={user.id}
                className={styles.profileContainer}
                onClick={() => {
                  if (rules?.maxNum && selectedList.length >= rules.maxNum.value) {
                    return;
                  }
                  if (!selectedList.find((selectedUser: UserProfileType) => selectedUser.id === user.id)) {
                    setSelectedList([...selectedList, user]);
                    onClickAdd(user.id);
                  }
                }}
              >
                <UserProfileImage src={user.profileImageUrl} size={30} />
                {user.nickname}
                {selectedList.find((collaboUser: UserProfileType) => collaboUser.id === user.id) && (
                  <span className={styles.checkedIcon}>✓</span>
                )}
              </div>
            ))}
          {members.filter((user) => user.nickname.toLocaleLowerCase().includes(input.toLocaleLowerCase())).length ===
            0 && <div className={styles.noResultMessage}>검색결과가 없어요.</div>}
        </div>
      )}
      {rules?.maxNum && selectedList.length >= rules.maxNum.value && (
        <div className={styles.error}>{rules?.maxNum?.errorMessage}</div>
      )}

      {/* 선택한 멤버 리스트 */}
      <div ref={listRef} className={styles.list}>
        {selectedList.map((selectedUser) => (
          <div key={selectedUser.id} className={styles.item}>
            <div className={styles.profileContainer}>
              <UserProfileImage src={selectedUser.profileImageUrl} size={30} />
              {selectedUser.nickname}
            </div>
            <EraseButton
              onClick={() => {
                setSelectedList(selectedList.filter((user) => user.id !== selectedUser.id));
                onClickDelete(selectedUser.id);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemberSelector;
