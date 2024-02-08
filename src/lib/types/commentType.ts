// 댓글 관련 타입
export interface ReplyType {
  commentId: number;
  content: string;
  id: number;
  userId: number;
  userNickname: string;
  userProfileImageUrl: string;
  createdDate: string;
  updatedDate: string;
}

export interface CommentType {
  id: number;
  userId: number;
  userNickname: string;
  userProfileImageUrl: string;
  createdDate: string;
  updatedDate: string;
  content: string;
  replies: ReplyType[] | null;
  isDeleted: boolean;
}

export interface CollaboratorType {
  id?: number;
  nickname: string;
  profileImageUrl: string | null;
}
