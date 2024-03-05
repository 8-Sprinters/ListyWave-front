export interface HistoryType {
  id: number;
  createdDate: Date;
  isPublic: boolean;
  items: [
    {
      id: number;
      rank: number;
      title: string;
    },
  ];
}
