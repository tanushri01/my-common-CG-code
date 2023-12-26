import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthService } from '@/services';
import { IApiResponseWithBody } from '@/interface';
import {
  ISignInRequest,
  ISignInResponse,
  ISignUpRequest,
  ISignUpResponse,
} from '@/pages/auth/interface';
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
 * Authentication Thunk
 */
export class AuthenticationThunk {
  /**
   * @function {signIn} - Method for sign In
   * @param {ISignInRequest} payload
   * @return {Promise<IApiResponseWithBody<ISignInResponse>>}
   */
  public static signIn = createAsyncThunk(
    'auth/signin',
    async (
      payload: ISignInRequest,
    ): Promise<IApiResponseWithBody<ISignInResponse>> => {
      const response = await AuthService.SignIn(payload);
      return response;
    },
  );

  /**
   * @function {signUp} - Method for  sign Up
   * @param {ISignUpRequest} payload
   * @return {Promise<IApiResponseWithBody<ISignUpResponse>>}
   */
  public static signUp = createAsyncThunk(
    'auth/signup',
    async (
      payload: ISignUpRequest,
    ): Promise<IApiResponseWithBody<ISignUpResponse>> => {
      const response = await AuthService.SignUp(payload);
      return response;
    },
  );

  /**
   * @function {resetPassword} - Method for Reset Password
   * @param {IResetPasswordRequest} payload
   * @return {Promise<IResetPasswordResponse>}
   */
  public static resetPassword = createAsyncThunk(
    'auth/resetPassword',
    async (payload: IResetPasswordRequest): Promise<IResetPasswordResponse> => {
      const response = await AuthService.resetPassword(payload);
      return response;
    },
  );

  /**
   * @function {forgetPassword} - Method for Forget Password
   * @param {IForgotPasswordRequest} payload
   * @return {Promise<IForgotPasswordResponse>}
   */
  public static forgetPassword = createAsyncThunk(
    'auth/forgotPassword',
    async (
      payload: IForgotPasswordRequest,
    ): Promise<IForgotPasswordResponse> => {
      const response = await AuthService.forgotPassword(payload);
      return response;
    },
  );

  /**
   * @function {validateResetPasswordtoken} - Method for validate Reset Password token
   * @param {IValidateTokenRequest} payload
   * @return {Promise<IValidateTokenResponse>}
   */
  public static validateResetPasswordToken = createAsyncThunk(
    'auth/validateResetToken',
    async (payload: IValidateTokenRequest): Promise<IValidateTokenResponse> => {
      const response = await AuthService.resetPasswordValidateToken(payload);
      return response;
    },
  );

  /**
   * @function {logout} - Method for Logout
   */
  public static logout = createAsyncThunk('auth/logout', async () => {
    const response = await AuthService.logout();
    return response;
  });
}
