export interface IApiResponseWithBody<T> {
  status: number;
  message: string;
  body: T;
}

export interface IApiResponse {
  status: number;
  message: string;
}
