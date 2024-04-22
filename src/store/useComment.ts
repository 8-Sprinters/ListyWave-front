import { create } from 'zustand';

interface CommentIdStoreType {
  commentId: null | number;
  setCommentId: (commentId: number) => void;
  deleteCommentId: () => void;
}

export const useCommentId = create<CommentIdStoreType>((set) => ({
  commentId: null,
  setCommentId: (commentId) => set({ commentId }),
  deleteCommentId: () => set({ commentId: null }),
}));

interface ReplyIdStoreType {
  replyId: null | number;
  setReplyId: (replyId: number) => void;
  deleteReplyId: () => void;
}

export const useReplyId = create<ReplyIdStoreType>((set) => ({
  replyId: null,
  setReplyId: (replyId) => set({ replyId }),
  deleteReplyId: () => set({ replyId: null }),
}));

interface CommentStoreType {
  commentIds: number[];
  addCommentId: (commentId: number) => void;
}

export const useCommentIdStore = create<CommentStoreType>((set) => ({
  commentIds: [],
  addCommentId: (commentId) => set((state) => ({ commentIds: [...state.commentIds, commentId] })),
}));

interface UseIsEditingType {
  isEditing: boolean;
  setIsEditing: () => void;
  setIsNotEditing: () => void;
  setToggleEditing: (state: boolean) => void;
}

export const useIsEditing = create<UseIsEditingType>((set) => ({
  isEditing: false,
  setIsEditing: () => set({ isEditing: true }),
  setIsNotEditing: () => set({ isEditing: false }),
  setToggleEditing: (state) => set({ isEditing: !state }),
}));

interface useCommentStatusType {
  status: null | 'edit' | 'createReply';
  setStatusEdit: () => void;
  setStatusCreateReply: () => void;
  resetStatus: () => void;
}

export const useCommentStatus = create<useCommentStatusType>((set) => ({
  status: null,
  setStatusEdit: () => set({ status: 'edit' }),
  setStatusCreateReply: () => set({ status: 'createReply' }),
  resetStatus: () => set({ status: null }),
}));
