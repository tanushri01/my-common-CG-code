import { LoginTypeEnum } from '../enum/loginType';
import { LoginRequest } from '../requests/loginRequest';

export default class LoginDto {
  email: string;
  password: string;
  loginType: LoginTypeEnum;

  constructor(data: LoginRequest) {
    this.email = data.email;
    this.password = data.password;
    this.loginType = data.loginType ?? LoginTypeEnum.NORMAL;
  }
}
