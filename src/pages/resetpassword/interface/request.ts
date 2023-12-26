export interface IResetPasswordRequest {
  token: string;
  newPassword: string;
  confirmPassword: string;
}

export interface IValidateTokenRequest {
  email: string;
  token: string;
}
