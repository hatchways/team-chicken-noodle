export interface UploadImageSuccess {
  key: string;
}

export interface UploadImageApi {
  error?: { message: string };
  success?: UploadImageSuccess;
}
