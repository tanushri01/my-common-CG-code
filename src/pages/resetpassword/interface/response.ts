export interface IResetPasswordResponse {
  isTokenValid: boolean;
}

export interface IValidateTokenResponse extends IResetPasswordResponse {}
