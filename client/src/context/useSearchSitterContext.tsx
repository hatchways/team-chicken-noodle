import { useReducer, createContext, ReactNode } from 'react';
import { IProfile } from '../interface/Profile';
import { SitterSearchAction, reducer } from '../reducer/searchReducer';

export interface SitterSearchResult {
  result: IProfile[];
}
export interface SitterSearchParams {
  location: string;
  dropIn: Date;
  dropOut: Date;
}

export interface ISearchSitter {
  location: string;
  dropIn: Date;
  dropOut: Date;
  result: IProfile[];
}

const searchInitialState: ISearchSitter = {
  location: 'Toronto',
  dropIn: new Date(),
  dropOut: new Date(),
  result: [],
};

interface SitterSearchContext extends ISearchSitter {
  dispatch: React.Dispatch<SitterSearchAction>;
}

export const SearchContext = createContext<SitterSearchContext>({} as SitterSearchContext);

export const SitterSearchProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [searchState, dispatch] = useReducer(reducer, searchInitialState);
  return <SearchContext.Provider value={{ ...searchState, dispatch }}>{children}</SearchContext.Provider>;
};
