export interface Address {
  city: string;
  province: string;
  country: string;
}

export interface Availability {
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
export interface SitterSearchParams {
  location: string;
  dropIn: Date;
  dropOut: Date;
}

export interface IProfile {
  _id?: string;
  userId?: string;
  firstName: string;
  lastName: string;
  isAvailable?: boolean;
  profilePhoto?: string;
  description?: string;
  gender?: string;
  birthDate?: Date;
  shortDescription?: string;
  phoneNumber?: number;
  hourlyRate?: number;
  address?: Address;
  bioImage?: [string];
  availability?: Availability;
}

export interface SearchSitterApiData {
  success?: IProfile[];
  error?: { message: string };
}
