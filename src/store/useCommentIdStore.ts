import { create } from 'zustand';

interface CommentStoreType {
  commentIds: number[];
  addCommentId: (commentId: number) => void;
}

const useCommentIdStore = create<CommentStoreType>((set) => ({
  commentIds: [],
  addCommentId: (commentId) => set((state) => ({ commentIds: [...state.commentIds, commentId] })),
}));

export default useCommentIdStore;
