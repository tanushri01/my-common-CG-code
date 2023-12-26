import { AxiosResponse } from 'axios';

import { ApiHelper, StorageHelper } from '../helper';

import {
  ISignInRequest,
  ISignInResponse,
  ISignUpRequest,
  ISignUpResponse,
} from '@/pages/auth/interface';
import { IApiResponse, IApiResponseWithBody } from '@/interface';
import { LocalStorageEnum } from '@/enum';
import {
  IResetPasswordRequest,
  IResetPasswordResponse,
  IValidateTokenRequest,
  IValidateTokenResponse,
} from '@/pages/resetpassword/interface';
import {
  IForgotPasswordRequest,
  IForgotPasswordResponse,
} from '@/pages/password/interface';

/**
 * Authentication Service
 */
export class AuthService {
  /**
   * @functions {SignIn} - For  Sign In
   * @param {ISignInRequest} payload
   * @return {Promise<ISignInResponse>}
   */
  public static async SignIn(
    payload: ISignInRequest,
  ): Promise<IApiResponseWithBody<ISignInResponse>> {
    const res: AxiosResponse<IApiResponseWithBody<ISignInResponse>> =
      await ApiHelper.send<IApiResponseWithBody<ISignInResponse>>({
        url: '/api/user/login',
        method: 'POST',
        data: payload,
      });
    const { token, userId, customerId } = res.data.body;

    StorageHelper.setLocalStorage(LocalStorageEnum.TOKEN, token);
    StorageHelper.setLocalStorage(LocalStorageEnum.USER_ID, userId);
    StorageHelper.setLocalStorage(LocalStorageEnum.CUSTOMER_ID, customerId);
    return res.data;
  }

  /**
   * @functions {SignUp} - For  Sign Up
   * @param {ISignUpRequest} payload
   * @return {Promise<ISignUpResponse>}
   */
  public static async SignUp(
    payload: ISignUpRequest,
  ): Promise<IApiResponseWithBody<ISignUpResponse>> {
    const res: AxiosResponse<IApiResponseWithBody<ISignUpResponse>> =
      await ApiHelper.send<IApiResponseWithBody<ISignUpResponse>>({
        url: '/api/user/signup',
        method: 'POST',
        data: payload,
      });
    const { token, userId, customerId } = res.data.body;
    StorageHelper.setLocalStorage(LocalStorageEnum.TOKEN, token);
    StorageHelper.setLocalStorage(LocalStorageEnum.USER_ID, userId);
    StorageHelper.setLocalStorage(LocalStorageEnum.CUSTOMER_ID, customerId);
    return res.data;
  }

  /**
   * @functions {resetPassword} - For Reset Password
   * @param {IResetPasswordRequest} payload
   * @return {IResetPasswordResponse}
   */
  public static async resetPassword(
    payload: IResetPasswordRequest,
  ): Promise<IResetPasswordResponse> {
    const res: AxiosResponse<IApiResponseWithBody<IResetPasswordResponse>> =
      await ApiHelper.send<IApiResponseWithBody<IResetPasswordResponse>>({
        url: '/api/user/resetPassword',
        method: 'POST',
        data: payload,
      });
    return res.data.body;
  }

  /**
   * @functions {forgotPassword} - Submit email for forgot password
   * @param {IForgotPasswordRequest} payload
   * @return {Promise<IForgotPasswordResponse>}
   */
  public static async forgotPassword(
    payload: IForgotPasswordRequest,
  ): Promise<IForgotPasswordResponse> {
    const res: AxiosResponse<IApiResponseWithBody<IForgotPasswordResponse>> =
      await ApiHelper.send<IApiResponseWithBody<IForgotPasswordResponse>>({
        url: '/api/user/forgetPassword',
        method: 'POST',
        data: payload,
      });
    return res.data.body;
  }

  /**
   * @functions {resetPasswordValidateToken} - validate token for reset password
   * @param {IValidateTokenRequest} payload
   * @return {Promise<IValidateTokenResponse> }
   */
  public static async resetPasswordValidateToken(
    payload: IValidateTokenRequest,
  ): Promise<IValidateTokenResponse> {
    const res: AxiosResponse<IApiResponseWithBody<IValidateTokenResponse>> =
      await ApiHelper.send<IApiResponseWithBody<IValidateTokenResponse>>({
        url: '/api/user/validateToken',
        method: 'POST',
        data: payload,
      });
    return res.data.body;
  }

  /**
   * @functions {logout} - For Logout
   * @return {Promise<IApiResponse>}
   */
  public static async logout(): Promise<IApiResponse> {
    const res: AxiosResponse<IApiResponseWithBody<IApiResponse>> =
      await ApiHelper.send<IApiResponseWithBody<IApiResponse>>({
        url: '/api/user/logout',
        method: 'GET',
      });

    StorageHelper.clearLocalStorage();
    return res.data.body;
  }
}
