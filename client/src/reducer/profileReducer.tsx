import { IProfilePhoto } from '../context/useProfileContext';

export type ProfileAction = {
  type: 'UPDATE_PROFILE_IMAGE' | 'DELETE_PROFILE_IMAGE';
  payload: string;
};

export const reducer = (state: IProfilePhoto, action: ProfileAction): IProfilePhoto => {
  switch (action.type) {
    case 'UPDATE_PROFILE_IMAGE':
      return { ...state, id: action.payload, url: `images/${action.payload}` };
    default:
      return state;
  }
};
