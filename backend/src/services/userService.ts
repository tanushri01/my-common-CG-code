import HttpStatus from 'http-status-codes';

import constants from '../commons/constants';
import UserRepository from '../repositories/userRepository';
import SignupDto from '../commons/dto/signupDto';
import { SignupResponse } from '../commons/responses/signupResponse';
import toUserSchema from '../commons/dto/toUserSchema';
import LoginDto from '../commons/dto/loginDto';
import { LoginResponse } from '../commons/responses/loginResponse';
import { ExpressError } from '../commons/helper/errorHandler/ExpressError';
import * as passwordHelper from '../commons/helper/password/index';
import * as jwtHelper from '../commons/helper/jwt/createToken';
import { AuthTokenRequest } from '../commons/helper/jwt/authTokenRequest';
import ForgetPasswordDto from '../commons/dto/forgetPasswordDto';
import EmailHelper from '../commons/helper/email/emailHelper';
import ResetPasswordDto from '../commons/dto/resetPasswordDto';
import { ValidateTokenResponse } from '../commons/responses/validateTokenResponse';
import ValidateTokenDto from '../commons/dto/validateTokenDto';
import { GetUserDetailsResponse } from '../commons/responses/getUserDetailsResponse';
import Cipher from '../commons/helper/password/cipher';
import UpdateUserDto from '../commons/dto/updateUserDto';
import { UpdateUserResponse } from '../commons/responses/updateUserResponse';
import PaymentService from './paymentService';
import { LoginTypeEnum } from '../commons/enum/loginType';

export default class UserService {
  private _userRepository: UserRepository;
  private _emailHelper: EmailHelper;
  private _paymentService: PaymentService;

  constructor() {
    this._userRepository = new UserRepository();
    this._emailHelper = new EmailHelper();
    this._paymentService = new PaymentService();
  }

  public async signUp(data: SignupDto): Promise<SignupResponse> {
    const userId = data.userId;
    await this._userRepository.checkIfUserMailAlreadyExists(data.email, data.loginType);
    const token = jwtHelper.generateToken(<AuthTokenRequest>{
      email: data.email,
      userId: userId,
    });
    if (data.loginType !== LoginTypeEnum.GOOGLE && !data.password) {
      throw new ExpressError(HttpStatus.BAD_REQUEST, constants.VALIDATION_MESSAGE.INVALID_PASSWORD);
    }
    const customerId = await this._paymentService.addCustomer(data.email);
    await this._userRepository.createUser(await toUserSchema(data));
    await this._userRepository.updateCustomerId(data.userId, customerId);
    return <SignupResponse>{ userId, customerId, token };
  }

  public async login(data: LoginDto): Promise<LoginResponse> {
    const loginUser = await toUserSchema(data);
    const userRecord = await this._userRepository.findUserByEmail(loginUser);
    if (!userRecord) {
      throw new ExpressError(HttpStatus.BAD_REQUEST, constants.VALIDATION_MESSAGE.INVALID_EMAIL);
    }
    const userId = userRecord.userId;
    const customerId = userRecord.customerId;
    if (userRecord.loginType !== LoginTypeEnum.GOOGLE) {
      await passwordHelper.verifyPassword(data.password, userRecord.password ?? '');
    }
    const token = jwtHelper.generateToken(<AuthTokenRequest>{
      email: data.email,
      userId: userId,
    });
    return {
      userId,
      token,
      customerId,
    };
  }

  public async userEmailCheck(data: ForgetPasswordDto): Promise<string> {
    const user = await this._userRepository.findUserByEmail(await toUserSchema(data));
    const newUpdateUserDetailObject = {
      userId: user.userId,
      resetPasswordToken: data.token,
    };
    await this._userRepository.updateUserDetail(newUpdateUserDetailObject);
    await this._emailHelper.forgetPasswordMail(user.email, data.token);
    return constants.SERVICE_MESSAGE.RESETPASSWORD_EMAIL;
  }

  public async resetPassword(data: ResetPasswordDto): Promise<void> {
    data.newPassword = await this.passwordMatch(data.newPassword, data.confirmPassword);
    await this._userRepository.updateUserPassword({
      password: data.newPassword,
      resetPasswordToken: data.token,
    });
  }

  public async passwordMatch(newPassword: string, confirmPassword: string): Promise<string> {
    if (newPassword === confirmPassword) {
      const password = Cipher.encrypt(newPassword);
      return password;
    }
    throw new ExpressError(HttpStatus.UNAUTHORIZED, constants.VALIDATION_MESSAGE.PASSWORD_CONFIRM_PASSWORD_MISMATCH);
  }

  public async validateToken(data: ValidateTokenDto): Promise<ValidateTokenResponse> {
    const userFound = await this._userRepository.findUserDetails(data);
    if (!userFound) {
      return { isTokenValid: false };
    }
    return { isTokenValid: true };
  }

  public async getUserDetails(userId: string): Promise<GetUserDetailsResponse> {
    const userRecord = await this._userRepository.getUserDetails(userId);
    if (!userRecord) {
      throw new ExpressError(HttpStatus.NOT_FOUND, constants.VALIDATION_MESSAGE.INVALID_USER_ID);
    }
    const firstName = userRecord.firstName;
    const lastName = userRecord.lastName;
    const email = userRecord.email;
    const password = Cipher.decrypt(userRecord.password);
    return <GetUserDetailsResponse>{ email, password, firstName, lastName };
  }

  public async updateUser(data: UpdateUserDto): Promise<UpdateUserResponse> {
    if (data.newPassword && data.confirmPassword) {
      data.newPassword = await this.passwordMatch(data.newPassword, data.confirmPassword);
    }
    await this._userRepository.updateUser(data);
    return { message: constants.SERVICE_MESSAGE.SUCCESSFULLY_UPDATED_USER };
  }
}
