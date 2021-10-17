import { useReducer, createContext, ReactNode } from 'react';
import { SitterSearchAction, reducer } from '../reducer/searchReducer';

interface Address {
  city: string;
  province: string;
  country: string;
}

interface Availability {
  days: {
    Monday: boolean;
    Tuesday: boolean;
    Wednesday: boolean;
    Thursday: boolean;
    Friday: boolean;
    Saturday: boolean;
    Sunday: boolean;
  };
  hours: {
    end: string;
    start: string;
  };
}

interface IProfile {
  sitterId: string;
  firstName: string;
  lastName: string;
  isAvailable: boolean;
  profilePhoto?: string;
  description?: string;
  gender?: string;
  birthDate?: Date;
  shortDescription?: string;
  phoneNumber?: number;
  address?: Address;
  bioImage?: [string];
  availability?: Availability;
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
