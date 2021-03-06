import { UploadImageApi } from '../../interface/UploadImageApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const uploadImage = async (file: File): Promise<UploadImageApi> => {
  const formData = new FormData();
  formData.append('image', file);
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
