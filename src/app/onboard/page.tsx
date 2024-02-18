'use client';

// 최초 로그인한 사용자가 보는 페이지

import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';

import { useUser } from '@/store/useUser';

import { UserProfileEditType, UserType } from '@/lib/types/userProfileType';
import { nicknameDuplicateRules, nicknameRules } from '@/lib/constants/formInputValidationRules';
import { QUERY_KEYS } from '@/lib/constants/queryKeys';

import checkNicknameDuplication from '../_api/user/checkNicknameDuplication';
import updateProfile from '../_api/user/updateProfile';
import getUserOne from '../_api/user/getUserOne';
import getCategories from '../_api/category/getCategories';
import { CategoryType } from '@/lib/types/categoriesType';
import { MouseEvent, useState } from 'react';

export default function OnbsoardPage() {
  const { user } = useUser(); // TODO url 변경시, params에서 id 가져오기
  const [selectedCategory, setSelectedCategory] = useState({
    nameValue: '',
    korNameValue: '',
  });

  const { data: userData } = useQuery<UserType>({
    // TODO patch method로 변경시, 쿼리요청 불필요
    queryKey: [QUERY_KEYS.userOne, user.id],
    queryFn: () => getUserOne(user.id as number),
    enabled: !!user.id,
  });

  const { data } = useQuery<CategoryType[]>({
    queryKey: [QUERY_KEYS.getCategories],
    queryFn: getCategories,
  });

  const categories = data ? data?.filter((category) => category.korNameValue !== '전체') : [];

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<UserProfileEditType>({
    mode: 'onChange',
  });

  const onSubmit = async (data: UserProfileEditType) => {
    console.log(data.nickname); // 삭제 예정
    console.log(user.id); // 삭제 예정

    if (!user.id) {
      alert('로그인이 필요해요.');
      return;
    }

    const isDuplitedNickname = await checkNicknameDuplication(data.nickname);
    // isDuplitedNickname이 true면, return + 에러메세지
    if (isDuplitedNickname) {
      setError('nickname', nicknameDuplicateRules);
      return;
    }

    // isDuplitedNickname이 false면, 프로필 업데이트
    await updateProfile({
      userId: user.id as number,
      data: {
        nickname: data.nickname,
        description: userData?.description, // TODO patch method로 변경시, 다른 필드 제거
        backgroundImageUrl: userData?.backgroundImageUrl,
        profileImageUrl: userData?.profileImageUrl,
        newBackgroundFileList: null,
        newProfileFileList: null,
      },
    });

    // 변경 성공시 next step
  };

  const handleChangeCategory = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      return;
    }

    const targetId = (e.target as HTMLButtonElement).id;
    const category = data?.find((category) => category.nameValue === targetId);

    console.log(category); // 삭제 예정

    if (category) {
      setSelectedCategory({
        nameValue: category.nameValue,
        korNameValue: category.korNameValue,
      });
    } else {
      console.log('선택한 카테고리를 찾을 수 없어요.');

      setSelectedCategory({
        nameValue: '',
        korNameValue: '',
      });
    }
  };

  console.log(selectedCategory);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>닉네임을 만들어주세요.</label>
        <input {...register('nickname', nicknameRules)} placeholder="닉네임을 만들어주세요." />
        <p>{errors.nickname?.message}</p>
        <button type="submit">다음으로</button>
      </form>
      <br />
      <form>
        <label>닉네임님만의 리스트를 만들어 보아요.</label>
        <p>무엇에 대한 리스트인가요?</p>
        <div onClick={handleChangeCategory}>
          {categories.map((category) => (
            <button key={category.codeValue} id={category.nameValue} type="button">
              {category.korNameValue}
            </button>
          ))}
        </div>
        {/* <button type="submit">다음으로</button> */}
        <br />
        <p>리스트의 제목을 지어주세요.</p>
        <input {...register('nickname', nicknameRules)} placeholder="리스트의 제목을 지어주세요." />
        <p>{errors.nickname?.message}</p>
        <div>
          <span>{selectedCategory.korNameValue}</span>
          <p></p>
        </div>
        {/* <button type="submit">다음으로</button> */}
      </form>
    </>
  );
}
