import { LoginTypeEnum } from '../enum/loginType';

export type SignupRequest = {
  email: string;
  password: string;
  loginType: LoginTypeEnum;
};
