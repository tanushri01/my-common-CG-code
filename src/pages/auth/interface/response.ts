export interface ISignInResponse {
  userId: string;
  token: string;
  customerId: string;
}

export interface ISignUpResponse extends ISignInResponse {}
