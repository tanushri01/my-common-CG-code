import { LoginTypeEnum } from '../enum/loginType';

export type LoginRequest = {
  email: string;
  password: string;
  loginType: LoginTypeEnum;
};
