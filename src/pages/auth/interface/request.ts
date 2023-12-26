import { LoginTypeEnum } from '@/enum';

export interface ISignInRequest {
  email: string;
  password: string;
  loginType: LoginTypeEnum;
}

export interface ISignUpRequest extends ISignInRequest {}
