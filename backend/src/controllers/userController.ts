import HttpStatus from 'http-status-codes';
import logger from '@mindpath/logger';
import { NextFunction, Response } from 'express';
import constants from '../commons/constants';
import SignupDto from '../commons/dto/signupDto';
import { APIResponse, IEmptyObject } from '../commons/helper/api-response/APIResponse';
import { ExpressError } from '../commons/helper/errorHandler/ExpressError';
import CustomRequest from '../commons/helper/requestType/CustomRequest';
import { SignupRequest } from '../commons/requests/signupRequest';
import { SignupResponse } from '../commons/responses/signupResponse';
import UserService from '../services/userService';
import { LoginResponse } from '../commons/responses/loginResponse';
import { LoginRequest } from '../commons/requests/loginRequest';
import LoginDto from '../commons/dto/loginDto';
import ForgetPasswordDto from '../commons/dto/forgetPasswordDto';
import { ForgetPasswordRequest } from '../commons/requests/ForgetPasswordRequest';
import { ForgetPasswordResponse } from '../commons/responses/forgetPasswordResponse';
import { ResetPasswordRequest } from '../commons/requests/resetPasswordRequest';
import ResetPasswordDto from '../commons/dto/resetPasswordDto';
import { ValidateTokenRequest } from '../commons/requests/validateTokenRequest';
import { ValidateTokenResponse } from '../commons/responses/validateTokenResponse';
import ValidateTokenDto from '../commons/dto/validateTokenDto';
import { GetUserDetails, UpdateUserParams } from '../commons/requests/params';
import { GetUserDetailsResponse } from '../commons/responses/getUserDetailsResponse';
import { UpdateUserRequest } from '../commons/requests/updateUserRequest';
import { UpdateUserResponse } from '../commons/responses/updateUserResponse';
import UpdateUserDto from '../commons/dto/updateUserDto';

export default class UserController {
  private _userService: UserService;

  constructor() {
    this._userService = new UserService();
  }

  public async signUp(
    req: CustomRequest<IEmptyObject, SignupResponse, SignupRequest>,
    res: Response<APIResponse<SignupResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<SignupResponse>();
      const signupDto = new SignupDto(req.body);
      const signupResponse = await this._userService.signUp(signupDto);
      response.status = HttpStatus.CREATED;
      response.message = constants.CONTROLLER_MESSAGE.SUCCESS;
      response.body = signupResponse;
      res.status(response.status).send(response);
    } catch (error) {
      logger.error(`Error in UserController method signUp ${error}`);
      return next(new ExpressError(<number>error.status, <string>error.message));
    }
  }

  public async login(
    req: CustomRequest<IEmptyObject, LoginResponse, LoginRequest>,
    res: Response<APIResponse<LoginResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<LoginResponse>();
      const loginDto = new LoginDto(req.body);
      const serviceResponse = await this._userService.login(loginDto);
      response.status = HttpStatus.OK;
      response.message = constants.CONTROLLER_MESSAGE.SUCCESS;
      response.body = serviceResponse;
      res.status(response.status).send(response);
    } catch (error) {
      logger.error(`Error in UserController method login ${error}`);
      return next(new ExpressError(<number>error.status, <string>error.message));
    }
  }

  public async logout(
    _req: CustomRequest<IEmptyObject, string, IEmptyObject>,
    res: Response<APIResponse<string>>,
    next: NextFunction
  ): Promise<void> {
    const response = new APIResponse<string>();
    try {
      response.status = HttpStatus.OK;
      response.message = constants.CONTROLLER_MESSAGE.SUCCESS;
      res.status(response.status).send(response);
    } catch (error) {
      logger.error(`Error in UserController method logout ${JSON.stringify(error)}`);
      return next(new ExpressError(<number>error.statusCode, <string>error.message));
    }
  }

  public async forgetPassword(
    req: CustomRequest<IEmptyObject, ForgetPasswordResponse, ForgetPasswordRequest>,
    res: Response<APIResponse<ForgetPasswordResponse>>,
    next: NextFunction
  ): Promise<void> {
    const response = new APIResponse<ForgetPasswordResponse>();
    const forgetPasswordDto = new ForgetPasswordDto(req.body);
    try {
      const serviceResponse = await this._userService.userEmailCheck(forgetPasswordDto);
      response.status = HttpStatus.OK;
      response.message = constants.CONTROLLER_MESSAGE.SUCCESS;
      response.body = { message: serviceResponse };
      res.status(response.status).send(response);
    } catch (error) {
      logger.error(`Error in UserController method forget password ${JSON.stringify(error)}`);
      next(new ExpressError(<number>error.status, <string>error.message));
    }
  }

  public async resetPassword(
    req: CustomRequest<IEmptyObject, IEmptyObject, ResetPasswordRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    const response = new APIResponse<IEmptyObject>();
    const resetPasswordDto = new ResetPasswordDto(req.body);
    try {
      await this._userService.resetPassword(resetPasswordDto);
      response.status = HttpStatus.CREATED;
      response.message = constants.CONTROLLER_MESSAGE.SUCCESS;
      response.body = {};
      res.status(response.status).send(response);
    } catch (error) {
      logger.error(`Error in UserController method resetPassword ${JSON.stringify(error)}`);
      next(new ExpressError(<number>error.status, <string>error.message));
    }
  }

  public async validateToken(
    req: CustomRequest<IEmptyObject, ValidateTokenResponse, ValidateTokenRequest>,
    res: Response<APIResponse<ValidateTokenResponse>>,
    next: NextFunction
  ): Promise<void> {
    const response = new APIResponse<ValidateTokenResponse>();
    const validateTokenDto = new ValidateTokenDto(req.body);
    try {
      const responseFromService = await this._userService.validateToken(validateTokenDto);
      response.status = HttpStatus.OK;
      response.message = constants.CONTROLLER_MESSAGE.SUCCESS;
      response.body = responseFromService;
      res.status(response.status).send(response);
    } catch (error) {
      logger.error(`Error in UserController method validateToken ${JSON.stringify(error)}`);
      next(new ExpressError(<number>error.status, <string>error.message));
    }
  }

  public async getUserDetails(
    req: CustomRequest<GetUserDetails, GetUserDetailsResponse>,
    res: Response<APIResponse<GetUserDetailsResponse>>,
    next: NextFunction
  ): Promise<void> {
    const response = new APIResponse<GetUserDetailsResponse>();
    try {
      const serviceResponse = await this._userService.getUserDetails(req.params.userId);
      response.status = HttpStatus.OK;
      response.message = constants.CONTROLLER_MESSAGE.SUCCESS;
      response.body = serviceResponse;
      res.status(response.status).send(response);
    } catch (error) {
      logger.error(`Error in UserController method getUserDetails ${JSON.stringify(error)}`);
      next(new ExpressError(<number>error.status, <string>error.message));
    }
  }

  public async updateUser(
    req: CustomRequest<UpdateUserParams, UpdateUserResponse, UpdateUserRequest>,
    res: Response<APIResponse<UpdateUserResponse>>,
    next: NextFunction
  ): Promise<void> {
    const response = new APIResponse<UpdateUserResponse>();
    try {
      const updateUserDto = new UpdateUserDto(req.body, req.params);
      const serviceResponse = await this._userService.updateUser(updateUserDto);
      response.status = HttpStatus.OK;
      response.message = constants.CONTROLLER_MESSAGE.SUCCESS;
      response.body = serviceResponse;
      res.status(response.status).send(response);
    } catch (error) {
      logger.error(`Error in UserController method updateUser ${JSON.stringify(error)}`);
      next(new ExpressError(<number>error.status, <string>error.message));
    }
  }
}
