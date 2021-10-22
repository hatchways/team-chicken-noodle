import { useReducer, createContext, ReactNode } from 'react';
import { reducer, INotification, NotificationActions } from '../reducer/notificationReducer';

const NotificationIntitialState: INotification = {
  notification: [],
};

interface NotificationContext extends INotification {
  dispatch: React.Dispatch<NotificationActions>;
}

export const NotificationContext = createContext<NotificationContext>({} as NotificationContext);

export const NotificationProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [notificationState, dispatch] = useReducer(reducer, NotificationIntitialState);
  return (
    <NotificationContext.Provider value={{ ...notificationState, dispatch }}>{children}</NotificationContext.Provider>
  );
};
