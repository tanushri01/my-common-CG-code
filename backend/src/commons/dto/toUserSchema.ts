import SignupDto from './signupDto';
import UserModel, { IUser } from '../../database/user';
import LoginDto from './loginDto';
import ForgetPasswordDto from './forgetPasswordDto';
import cipher from '../helper/password/cipher';
import { LoginTypeEnum } from '../enum/loginType';

export default async function toUserSchema(data: SignupDto | LoginDto | ForgetPasswordDto): Promise<IUser> {
  if (data instanceof SignupDto) {
    return createUserDtoToUserSchema(data);
  } else if (data instanceof LoginDto) {
    return logInAccountDtoUserSchema(data);
  } else if (data instanceof ForgetPasswordDto) {
    return forgetPasswordDtoToUserSchema(data);
  } else {
    throw new Error();
  }
}

async function createUserDtoToUserSchema(data: SignupDto): Promise<IUser> {
  const user = new UserModel();
  user.userId = data.userId;
  user.email = data.email.toLowerCase();
  if (data.loginType !== LoginTypeEnum.GOOGLE) {
    user.password = cipher.encrypt(data.password);
  }
  user.loginType = data.loginType;
  return user;
}

function logInAccountDtoUserSchema(data: LoginDto): IUser {
  const user = new UserModel();
  user.email = data.email.toLowerCase();
  user.password = data.password;
  user.loginType = data.loginType;
  return user;
}

function forgetPasswordDtoToUserSchema(data: ForgetPasswordDto): IUser {
  const user = new UserModel();
  user.email = data.email.toLowerCase();
  user.loginType = LoginTypeEnum.NORMAL;
  return user;
}
