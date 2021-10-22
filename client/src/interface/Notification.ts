export interface Notification {
  userId: string;
  _id: string;
  type?: string;
  title?: string;
  description?: string;
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
  context?: {
    name: string;
    profileImage: string;
  };
}

export interface NotificationApiData {
  error?: { message: string };
  success?: Notification[];
}
