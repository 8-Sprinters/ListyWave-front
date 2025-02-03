import axiosInstance from '@/lib/axios/axiosInstance';
import { ReactionType } from '@/lib/types/reactionType';

const reaction = async (listId: number, type: ReactionType) => {
  return await axiosInstance.post(`/lists/${listId}/reaction`, { reaction: type });
};

export default reaction;
