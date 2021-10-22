import { BookingRequest } from '../../interface/BookingRequest';
import { FetchOptions } from '../../interface/FetchOptions';

export const requestList = async (): Promise<{ requests: BookingRequest[] }> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`/request/`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export const requestCreate = async (sitterId: string, start: Date, end: Date): Promise<{ request: BookingRequest }> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sitterId, start, end }),
    credentials: 'include',
  };
  return await fetch(`/request/`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export const requestUpdate = async (id: string, status: string): Promise<{ request: BookingRequest }> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
    credentials: 'include',
  };
  return await fetch(`/request/${id}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};
