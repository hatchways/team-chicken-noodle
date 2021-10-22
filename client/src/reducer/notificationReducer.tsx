import { Notification } from '../interface/Notification';

export interface INotification {
  notification: Notification[];
}
type setNotification = {
  type: 'SET_NOTIFICATION' | 'RESET_NOTIFICATION';
  payload: Notification[];
};

type markAllNotificationRead = {
  type: 'MARK_ALL_NOTIFICATION_READ';
};

export type NotificationActions = setNotification | markAllNotificationRead;

export const reducer = (state: INotification, action: NotificationActions): INotification => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return { ...state, notification: action.payload };
    case 'MARK_ALL_NOTIFICATION_READ':
      return { ...state };
    case 'RESET_NOTIFICATION':
      return { ...state, notification: action.payload };
    default:
      return state;
  }
};
