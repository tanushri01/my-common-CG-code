import { ResetPasswordRequest } from '../requests/resetPasswordRequest';

export default class ResetPasswordDto {
  newPassword: string;
  confirmPassword: string;
  token: string;

  constructor(data: ResetPasswordRequest) {
    this.newPassword = data.newPassword;
    this.confirmPassword = data.confirmPassword;
    this.token = data.token;
  }
}
