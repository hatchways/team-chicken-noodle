import { AuthApiData } from '../../interface/AuthApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const uploadImage = async (file: File): Promise<AuthApiData> => {
  const formData = new FormData();
  formData.append('image', file);
  console.log(typeof formData);
  const fetchOptions: FetchOptions = {
    method: 'POST',
    body: formData,
    credentials: 'include',
  };
  return await fetch(`/images`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default uploadImage;