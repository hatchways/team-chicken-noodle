import { ISearchSitter, SitterSearchParams, SitterSearchResult } from '../context/useSearchSitterContext';
import { IProfile } from '../interface/Profile';

type SearchAction = {
  type: 'SET_SEARCH_PARAMS' | 'RESET_SEARCH_PARAMS';
  payload: SitterSearchParams;
};

type SearchResultAction = {
  type: 'UPDATE_SEARCH_RESULT';
  payload: IProfile[];
};

export type SitterSearchAction = SearchAction | SearchResultAction;

export const reducer = (state: ISearchSitter, action: SitterSearchAction): ISearchSitter => {
  switch (action.type) {
    case 'UPDATE_SEARCH_RESULT':
      return {
        ...state,
        result: action.payload,
      };
    case 'SET_SEARCH_PARAMS':
      return {
        ...state,
        location: action.payload.location,
        dropIn: action.payload.dropIn,
        dropOut: action.payload.dropOut,
      };
    case 'RESET_SEARCH_PARAMS':
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
