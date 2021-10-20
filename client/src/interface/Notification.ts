export interface Notification {
  userId: string;
  from?: {
    name: string;
    profileImage: string;
  };
  type?: string;
  title?: string;
  description?: string;
  read: boolean;
  cratedAt: Date;
  updatedAt: Date;
  context?: string;
}

export interface NotificationApiData {
  error?: { message: string };
  success?: Notification;
}
