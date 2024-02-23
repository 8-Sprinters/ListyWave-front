import { create } from 'zustand';

interface ModalStateType {
  isOn: boolean;
  toggle: () => void;
  handleSetOn: () => void;
  handleSetOff: () => void;
}

const useModalState = create<ModalStateType>((set) => ({
  isOn: false,
  toggle: () => set((state) => ({ isOn: !state.isOn })),
  handleSetOn: () => set({ isOn: true }),
  handleSetOff: () => set({ isOn: false }),
}));

export default useModalState;
