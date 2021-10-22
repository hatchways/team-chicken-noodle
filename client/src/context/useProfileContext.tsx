import { useReducer, createContext, ReactNode } from 'react';
import { ProfileAction, reducer } from '../reducer/profileReducer';

export interface IProfilePhoto {
  id: string;
  url: string;
}

const ProfileInitialState: IProfilePhoto = {
  id: '',
  url: '',
};

interface ProfilePhotoContext extends IProfilePhoto {
  dispatch: React.Dispatch<ProfileAction>;
}

export const ProfileContext = createContext<ProfilePhotoContext>({} as ProfilePhotoContext);

export const ProfileProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [profileState, dispatch] = useReducer(reducer, ProfileInitialState);
  return <ProfileContext.Provider value={{ ...profileState, dispatch }}>{children}</ProfileContext.Provider>;
};
