export interface NotificationType {
  id: number;
  createdDate: string;
  checked: boolean;
  type: 'FOLLOW' | 'COLLECT' | 'COMMENT' | 'REPLY' | 'MENTION' | 'NOTICE';
  sendUser: User;
  list?: List;
  comment?: Comment;
  reply?: Reply;
  notice?: Notice;
}

// export interface NotificationsType {
//   alarmList: NotificationType[];
// }

export type User = {
  id: number;
  nickname: string;
  profileImageUrl: string;
};

export type List = {
  id: number;
  title: string;
};

export type Comment = {
  id: number;
  content: string;
  mentions?: Mentions;
};

export type Mentions = {
  targetUserId: number;
  targetUserNickname: string;
};

export type Reply = {
  id: number;
  content: string;
  mentions?: Mentions;
};

export type Notice = {
  id: number;
  categoryCode: string;
  // categoryKorName: string;
  categoryViewName: string;
  title: string;
  description: string;
  createDate: string;
  content: string;
};
