import { create } from 'zustand';
import { UserType } from '@/lib/types/userType';
// import { devtools } from 'zustand/middleware'; // 추후 devtools 연동해서 디버깅 예정

interface UserStateType {
  user: Pick<UserType, 'id' | 'nickname'>;
  updateUser: (user: Pick<UserType, 'id' | 'nickname'>) => void;
}

const initialValue = {
  id: 0,
  nickname: '',
};

const useUserStore = create<UserStateType>()((set) => ({
  user: initialValue,
  updateUser: (user) => set((state) => ({ user: { ...state.user, ...user } })),
}));

export const useUser = useUserStore;
