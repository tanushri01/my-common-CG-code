import { v4 as uuidv4 } from 'uuid';

import { SignupRequest } from '../requests/signupRequest';
import { LoginTypeEnum } from '../enum/loginType';

export default class SignupDto {
  userId: string;
  email: string;
  password: string;
  loginType: LoginTypeEnum;

  constructor(data: SignupRequest) {
    this.userId = uuidv4();
    this.email = data.email;
    this.password = data.password;
    this.loginType = data.loginType ?? LoginTypeEnum.NORMAL;
  }
}
