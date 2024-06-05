import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { UserOnLoginType } from '@/lib/types/user';

interface InitialUserType {
  id: null;
}

interface UserStateType {
  user: InitialUserType | Pick<UserOnLoginType, 'id'>;
  updateUser: (user: Pick<UserOnLoginType, 'id'>) => void;
  logoutUser: () => void;
}

const initialValue: InitialUserType = {
  id: null,
};

// 사용자 정보(id) 및 상태(로그인, 로그아웃)를 저장하는 store
const useUserStore = create<UserStateType>()(
  devtools(
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
        logoutUser: () =>
          set(() => ({
            user: initialValue,
          })),
      }),
      {
        name: 'user-storage', // localStorage에 저장될 이름
      }
    ),
    {
      name: 'user-store', // Devtools에서 사용될 스토어 이름
    }
  )
);

export const useUser = useUserStore;
