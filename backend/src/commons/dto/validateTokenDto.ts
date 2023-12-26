import { ValidateTokenRequest } from '../requests/validateTokenRequest';

export default class ValidateTokenDto {
  email: string;
  token: string;

  constructor(data: ValidateTokenRequest) {
    this.email = data.email;
    this.token = data.token;
  }
}
