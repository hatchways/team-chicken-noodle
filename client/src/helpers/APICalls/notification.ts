import { FetchOptions } from '../../interface/FetchOptions';
import { NotificationApiData } from '../../interface/Notification';

export async function getAllNotification(): Promise<NotificationApiData> {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/notification`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
}

export async function getAllUnreadNotification(): Promise<NotificationApiData> {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    body: '',
    credentials: 'include',
  };
  return await fetch(`/notification/unread`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
}

export async function markAllNotificationRead(): Promise<NotificationApiData> {
  const fetchOptions: FetchOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ read: true }),
    credentials: 'include',
  };
  return await fetch(`/notification/`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
}
