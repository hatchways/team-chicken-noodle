import { User } from './User';

export interface AuthApiDataSuccess {
  message: string;
  user: User;
  token: string;
  key: string;
}

export interface AuthApiData {
  error?: { message: string };
  success?: AuthApiDataSuccess;
}
