export interface RepliesType {
  id: number;
  userId: number;
  userNickName: string;
  userProfileImageUrl: string;
  createdDate: string;
  content: string;
}

export interface ReplyType {
  id: number;
  userId: number;
  userNickName: string;
  userProfileImageUrl: string;
  createdDate: string;
  content: string;
}

export interface CommentType {
  id: number;
  userId: number;
  userName: string;
  userProfileImageUrl: string;
  createdDate: string;
  content: string;
  replies: RepliesType[] | null;
}

export interface CollaboratorType {
  id?: number;
  nickname: string;
  profileImageUrl: string | null;
}
