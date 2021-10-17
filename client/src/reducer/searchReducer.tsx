import { ISearchSitter } from '../context/useSearchSitterContext';

export type SitterSearchAction = {
  type: 'GET_SITTERS' | 'UPDATE_SEARCH_RESULT' | 'UPDATE_SEARCH_PARAMETERS';
  payload: ISearchSitter;
};

export const reducer = (state: ISearchSitter, action: SitterSearchAction): ISearchSitter => {
  switch (action.type) {
    case 'UPDATE_SEARCH_PARAMETERS':
      return {
        ...state,
        location: action.payload.location,
        dropIn: action.payload.dropIn,
        dropOut: action.payload.dropOut,
      };
    default:
      return state;
  }
};
