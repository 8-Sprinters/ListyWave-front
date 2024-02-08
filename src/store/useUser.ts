import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserOnLoginType } from '@/lib/types/user';
// import { devtools } from 'zustand/middleware'; // 추후 devtools 연동해서 디버깅 예정

interface UserStateType {
  user: Pick<UserOnLoginType, 'id' | 'accessToken'>;
  updateUser: (user: Pick<UserOnLoginType, 'id' | 'accessToken'>) => void;
}

const initialValue = {
  id: 0,
  accessToken: '',
};

// 사용자 정보(id) 및 상태(로그인, 로그아웃)를 저장하는 store
const useUserStore = create<UserStateType>()(
  persist(
    (set) => ({
      user: initialValue,
      updateUser: (user) =>
        set((state) => ({
          user: {
            ...state.user,
            ...user,
          },
        })),
    }),
    {
      name: 'user',
    }
  )
);

export const useUser = useUserStore;
