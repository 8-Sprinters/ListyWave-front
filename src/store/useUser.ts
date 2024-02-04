import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { UserType } from '@/lib/types/userType';

interface UserStateType {
  user: Pick<UserType, 'id' | 'nickname'>;
  updateUser: (user: Pick<UserType, 'id' | 'nickname'>) => void;
}

const initialValue = {
  id: 0,
  nickname: '',
};

const useUser = create<UserStateType>()((set) => ({
  user: initialValue,
  updateUser: (user) => set(() => ({ user: user })),
}));

export const useStore = create(devtools(useUser));
