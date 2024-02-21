export interface NotificationType {
  id: number;
  sendUserId: number;
  nickname: string;
  profileImageUrl: string;
  listId: number | null;
  commentId: number | null;
  listTitle: string | null;
  type: 'FOLLOW' | 'COLLECT' | 'COMMENT' | 'REPLY';
  createdDate: string;
  checked: boolean;
}

export type NotificationsType = NotificationType[];

export interface NotificationListType {
  alarmList: NotificationsType;
}
