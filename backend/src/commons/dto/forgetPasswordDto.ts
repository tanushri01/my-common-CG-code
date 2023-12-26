import { getCryptoToken } from '../helper';
import { ForgetPasswordRequest } from '../../commons/requests/ForgetPasswordRequest';

export default class ForgetPasswordDto {
  email: string;
  token: string;

  constructor(data: ForgetPasswordRequest) {
    this.email = data.email;
    this.token = getCryptoToken();
  }
}
