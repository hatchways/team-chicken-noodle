export interface Profile {
  userId: string;
  firstName?: string;
  lastName?: string;
  description?: string;
  gender?: string;
  birthDate?: Date;
  phoneNumber?: string;
  email?: string;
  hourlyRate?: number;
  address?: {
    city?: string;
    province?: string;
    country?: string;
  };
}
