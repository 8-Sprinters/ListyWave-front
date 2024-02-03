'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useFormContext, useWatch } from 'react-hook-form';

import '@/styles/globalStyles.css';
import * as styles from './CreateList.css';

import CloseButton from '/public/icons/close_button.svg';
import EraseButton from '/public/icons/x_circle_fill.svg';
import SearchIcon from '/public/icons/search.svg';
import DefaultProfile from '/public/icons/default_profile.svg';

import mockdata from '../CreateListMock';
import Image from 'next/image';

interface UserProfileType {
  id: number;
  profileImageUrl: string;
  nickname: string;
}

function CreateList() {
  const { register, getValues, setValue, setError, control, formState } = useFormContext();
  const { errors, isValid } = formState;

  const category = useWatch({ control, name: 'category' });
  const labels = useWatch({ control, name: 'labels' });
  const colaboIDs = useWatch({ control, name: 'collaboratorIds' });
  const backgroundColor = useWatch({ control, name: 'backgroundColor' });
  const isPublic = useWatch({ control, name: 'isPublic' });

  const [labelInput, setLabelInput] = useState('');
  const [colaboInput, setColaboInput] = useState('');
  const [colaboList, setColabolist] = useState<UserProfileType[]>([]);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const colaboInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeDropdown = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        colaboInputRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !colaboInputRef.current.contains(event.target as Node)
      ) {
        setIsDropDownOpen(false);
      }
    };
    document.addEventListener('click', closeDropdown);

    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <div>
      {/* 헤더 */}
      <div className={styles.header}>
        <CloseButton width={'24'} height={'24'} />
        <h1 className={styles.headerTitle}>리스트 생성</h1>
        <Link href="/" className={styles.headerNextButton}>
          다음
        </Link>
      </div>

      <div className={styles.body}>
        {/* 제목 */}
        <div>
          <div className={styles.title}>
            타이틀 <span className={styles.required}>*</span>
          </div>
          <div className={styles.content}>
            <div className={styles.listTitleContainer}>
              <input
                className={styles.titleInputBox}
                type="text"
                placeholder="리스트 제목을 적어주세요."
                {...register('title', {
                  required: '제목을 입력해주세요.',
                  maxLength: { value: 30, message: '리스트 제목은 최대 30자까지 입력할 수 있어요.' },
                })}
              />
              <EraseButton
                className={styles.clearButton}
                onClick={() => {
                  setValue('title', '');
                }}
              />
              {errors.title && <div className={styles.error}>{errors.title.message?.toString()}</div>}
            </div>
          </div>
        </div>

        {/* 한 줄 소개 */}
        <div>
          <div className={styles.title}>소개</div>
          <div className={styles.content}>
            <div className={styles.listDescriptionContainer}>
              <textarea
                className={styles.descriptionInputBox}
                placeholder="리스트에 대한 간단한 소개를 작성해주세요."
                {...register('description', {
                  maxLength: { value: 200, message: '리스트 소개는 최대 200자까지 입력할 수 있어요.' },
                })}
              />
              {errors.description && <div className={styles.error}>{errors.description.message?.toString()}</div>}
            </div>
          </div>
        </div>

        {/* 카테고리 */}
        <div>
          <div className={styles.title}>
            카테고리 <span className={styles.required}>*</span>
          </div>
          <div className={styles.content}>
            <div className={styles.categoryContainer}>
              <input className={styles.categoryInputBox} />
              <button
                className={`${styles.categoryButton} ${category === '문화' ? styles.categoryButtonActive : ''}`}
                onClick={() => {
                  setValue('category', '문화');
                }}
              >
                문화
              </button>
              <button
                className={`${styles.categoryButton} ${category === '일상/생활' ? styles.categoryButtonActive : ''}`}
                onClick={() => {
                  setValue('category', '일상/생활');
                }}
              >
                일상/생활
              </button>
              <button
                className={`${styles.categoryButton} ${category === '장소' ? styles.categoryButtonActive : ''}`}
                onClick={() => setValue('category', '장소')}
              >
                장소
              </button>
              <button
                className={`${styles.categoryButton} ${category === '음악' ? styles.categoryButtonActive : ''}`}
                onClick={() => setValue('category', '음악')}
              >
                음악
              </button>
              <button
                className={`${styles.categoryButton} ${category === '영화/드라마' ? styles.categoryButtonActive : ''}`}
                onClick={() => setValue('category', '영화/드라마')}
              >
                영화/드라마
              </button>
              <button
                className={`${styles.categoryButton} ${category === '도서' ? styles.categoryButtonActive : ''}`}
                onClick={() => setValue('category', '도서')}
              >
                도서
              </button>
              <button
                className={`${styles.categoryButton} ${category === '동식물' ? styles.categoryButtonActive : ''}`}
                onClick={() => setValue('category', '동식물')}
              >
                동식물
              </button>
              <button
                className={`${styles.categoryButton} ${category === '기타' ? styles.categoryButtonActive : ''}`}
                onClick={() => setValue('category', '기타')}
              >
                기타
              </button>
            </div>
          </div>
        </div>

        {/* 라벨 */}
        <div>
          <div className={styles.title}>라벨</div>
          <div className={styles.content}>
            <div className="labelContainer">
              <input
                className={styles.labelInputBox}
                type="text"
                value={labelInput}
                placeholder="라벨 입력 후 Enter를 눌러주세요. (최대 3개)"
                onKeyDown={(e) => {
                  if (e.nativeEvent.isComposing) {
                    return;
                  }
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    if (labelInput.length >= 10) {
                      setError('labels', {
                        type: 'manual',
                        message: '라벨은 최대 10자까지 입력할 수 있어요.',
                      });
                      return;
                    }
                    if (labels.includes(labelInput)) {
                      setError('labels', {
                        type: 'manual',
                        message: '같은 라벨을 2개 이상 등록할 수 없어요.',
                      });
                      return;
                    }
                    if (labels.length >= 3) {
                      setError('labels', {
                        type: 'manual',
                        message: '라벨은 최대 3개까지 입력할 수 있어요.',
                      });
                      return;
                    }
                    setValue('labels', [...labels, labelInput]);
                    setLabelInput('');
                  }
                }}
                onChange={(e) => {
                  setError('labels', {});
                  setLabelInput(e.target.value);
                }}
              />
              {errors.labels && <div className={styles.error}>{errors.labels.message?.toString()}</div>}
              <div className={styles.labels}>
                {labels.map((label: string) => (
                  <div key={label} className={styles.label}>
                    {label}
                    <CloseButton
                      width={'10'}
                      height={'10'}
                      fill={'#8E8E93'}
                      className={styles.labelDeleteButton}
                      onClick={() => {
                        setValue(
                          'labels',
                          labels.filter((l: string) => l !== label)
                        );
                        setError('labels', {});
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 콜라보레이터 */}
        <div>
          <div className={styles.title}>콜라보레이터 추가</div>
          <div className={styles.content}>
            <div className={styles.colaboContainer}>
              <input
                ref={colaboInputRef}
                className={styles.colaboInputBox}
                type={'text'}
                placeholder="닉네임 또는 이메일을 입력해주세요."
                onClick={() => {
                  if (!isDropDownOpen) {
                    setIsDropDownOpen(true);
                  }
                }}
                onChange={(e) => {
                  setColaboInput(e.target.value);
                }}
              />
              <SearchIcon className={styles.searchIcon} />
              {isDropDownOpen && (
                <div className={styles.colaboDropdown} ref={dropdownRef}>
                  {mockdata
                    .filter((user) => user.nickname.toLocaleLowerCase().includes(colaboInput.toLocaleLowerCase()))
                    .map((user) => (
                      <div
                        key={user.id}
                        className={styles.colaboProfileContainer}
                        onClick={(e) => {
                          if (!colaboList.find((colaboUser: UserProfileType) => colaboUser.id === user.id)) {
                            setColabolist([...colaboList, user]);
                            setValue('collaboratorIds', [...colaboIDs, user.id]);
                          }
                        }}
                      >
                        {user.profileImageUrl ? (
                          <Image
                            className={styles.colaboProfileImage}
                            src={user.profileImageUrl}
                            width={'30'}
                            height={'30'}
                            alt={'프로필 이미지'}
                          ></Image>
                        ) : (
                          <DefaultProfile width={'30'} height={'30'} />
                        )}
                        {user.nickname}
                        {colaboList.find((colaboUser: UserProfileType) => colaboUser.id === user.id) && (
                          <span className={styles.checkedIcon}>✓</span>
                        )}
                      </div>
                    ))}
                </div>
              )}
              <div className={styles.colaboList}>
                {colaboList.map((colaboUser) => (
                  <div key={colaboUser.id} className={styles.colaboItem}>
                    <div className={styles.colaboProfileContainer}>
                      {colaboUser.profileImageUrl ? (
                        <Image
                          className={styles.colaboProfileImage}
                          src={colaboUser.profileImageUrl}
                          width={'30'}
                          height={'30'}
                          alt={'프로필 이미지'}
                        ></Image>
                      ) : (
                        <DefaultProfile width={'30'} height={'30'} />
                      )}{' '}
                      {colaboUser.nickname}
                    </div>
                    <EraseButton
                      onClick={() => {
                        setColabolist(colaboList.filter((user) => user.id !== colaboUser.id));
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 배경 색상 */}
        <div>
          <div className={styles.title}>
            배경 색상 <span className={styles.required}>*</span>
          </div>
          <div className={styles.content}>
            <div className={styles.backgroundContainer}>
              <input
                className={`${styles.colorCircle} ${styles.white} ${backgroundColor === '#FFFFFF' && styles.checkedColor}`}
                type="checkbox"
                checked={backgroundColor === '#FFFFFF'}
                readOnly
                onClick={() => setValue('backgroundColor', '#FFFFFF')}
              />
              <input
                className={`${styles.colorCircle} ${styles.yellow} ${backgroundColor === '#FFF6A5' && styles.checkedColor}`}
                type="checkbox"
                checked={backgroundColor === '#FFF6A5'}
                readOnly
                onClick={() => setValue('backgroundColor', '#FFF6A5')}
              />
              <input
                className={`${styles.colorCircle} ${styles.orange} ${backgroundColor === '#FFDCB2' && styles.checkedColor}`}
                type="checkbox"
                checked={backgroundColor === '#FFDCB2'}
                readOnly
                onClick={() => setValue('backgroundColor', '#FFDCB2')}
              />
              <input
                className={`${styles.colorCircle} ${styles.green} ${backgroundColor === '#D0FF89' && styles.checkedColor}`}
                type="checkbox"
                checked={backgroundColor === '#D0FF89'}
                readOnly
                onClick={() => setValue('backgroundColor', '#D0FF89')}
              />
              <input
                className={`${styles.colorCircle} ${styles.blue} ${backgroundColor === '#B7EEFF' && styles.checkedColor}`}
                type="checkbox"
                checked={backgroundColor === '#B7EEFF'}
                readOnly
                onClick={() => setValue('backgroundColor', '#B7EEFF')}
              />
              <input
                className={`${styles.colorCircle} ${styles.purple} ${backgroundColor === '#E6C6FF' && styles.checkedColor}`}
                type="checkbox"
                checked={backgroundColor === '#E6C6FF'}
                readOnly
                onClick={() => setValue('backgroundColor', '#E6C6FF')}
              />
            </div>
          </div>
        </div>

        {/* 공개 설정 */}
        <div>
          <div className={styles.title}>
            공개 설정 <span className={styles.required}>*</span>
          </div>
          <div className={styles.content}>
            <div className={styles.publicContainer}>
              <label>
                <input
                  type="radio"
                  checked={isPublic}
                  readOnly
                  onClick={() => {
                    setValue('isPublic', true);
                  }}
                />
                공개
              </label>

              <label>
                <input
                  type="radio"
                  checked={!isPublic}
                  readOnly
                  onClick={() => {
                    setValue('isPublic', false);
                  }}
                />
                비공개
              </label>
            </div>
            <div className={styles.publicMessage}>
              {isPublic ? '모든 사람이 이 리스트를 볼 수 있어요.' : '이 리스트는 나만 볼 수 있어요.'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateList;
