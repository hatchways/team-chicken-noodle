import { FetchOptions } from '../../interface/FetchOptions';
import { SearchSitterApiData, SitterSearchParams } from '../../interface/Profile';

export async function searchSitter(sitterSearchData: SitterSearchParams): Promise<SearchSitterApiData> {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(sitterSearchData),
    credentials: 'include',
  };
  return await fetch(`/profile/profiles`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
}
