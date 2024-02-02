export interface RepliesType {
  id: number;
  userId: number;
  userNickName: string;
  userProfileImageUrl: string;
  createdDate: string;
  content: string;
}

export interface ReplyType {
  userNickName: string;
  userProfileImageUrl: string;
  createdDate: string;
  content: string;
}

export interface Comment {
  id: number;
  userId: number;
  userName: string;
  userProfileImageUrl: string;
  createdDate: string;
  content: string;
  replies: RepliesType[] | null;
}
