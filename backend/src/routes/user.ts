import express from 'express';

import { PathParams, QueryParams, RequestBody, ResponseBody } from '../commons/helper/requestType/CustomRequest';
import { SignupRequest } from '../commons/requests/signupRequest';
import { SignupResponse } from '../commons/responses/signupResponse';
import UserSchema = require('../commons/helper/Joi/user');
import { doValidation } from '../commons/helper/Joi';
import UserController from '../controllers/userController';
import { checkToken } from '../commons/helper/jwt/checkToken';
import { LoginRequest } from '../commons/requests/loginRequest';
import { LoginResponse } from '../commons/responses/loginResponse';
import { ForgetPasswordRequest } from '../commons/requests/ForgetPasswordRequest';
import { ForgetPasswordResponse } from '../commons/responses/forgetPasswordResponse';
import { ResetPasswordRequest } from '../commons/requests/resetPasswordRequest';
import { ValidateTokenResponse } from '../commons/responses/validateTokenResponse';
import { ValidateTokenRequest } from '../commons/requests/validateTokenRequest';
import { GetUserDetails, UpdateUserParams } from '../commons/requests/params';
import { GetUserDetailsResponse } from '../commons/responses/getUserDetailsResponse';
import { UpdateUserRequest } from '../commons/requests/updateUserRequest';
import { UpdateUserResponse } from '../commons/responses/updateUserResponse';

const userController = new UserController();
const router = express.Router();

router.post<PathParams, ResponseBody<SignupResponse>, RequestBody<SignupRequest>, QueryParams>(
  '/signup',
  doValidation(UserSchema[0]),
  (...args) => userController.signUp(...args)
);

router.post<PathParams, ResponseBody<LoginResponse>, RequestBody<LoginRequest>, QueryParams>(
  '/login',
  doValidation(UserSchema[1]),
  (...args) => userController.login(...args)
);

router.get<PathParams, ResponseBody<string>, RequestBody, QueryParams>('/logout', checkToken, (...args) =>
  userController.logout(...args)
);

router.post<PathParams, ResponseBody<ForgetPasswordResponse>, RequestBody<ForgetPasswordRequest>, QueryParams>(
  '/forgetPassword',
  doValidation(UserSchema[2]),
  (...args) => userController.forgetPassword(...args)
);

router.post<PathParams, ResponseBody, RequestBody<ResetPasswordRequest>, QueryParams>(
  '/resetPassword',
  doValidation(UserSchema[3]),
  (...args) => userController.resetPassword(...args)
);

router.post<PathParams, ResponseBody<ValidateTokenResponse>, RequestBody<ValidateTokenRequest>, QueryParams>(
  '/validateToken',
  doValidation(UserSchema[4]),
  (...args) => userController.validateToken(...args)
);

router.get<PathParams<GetUserDetails>, ResponseBody<GetUserDetailsResponse>, RequestBody, QueryParams>(
  '/userDetails/:userId',
  checkToken,
  doValidation(UserSchema[5]),
  (...args) => userController.getUserDetails(...args)
);

router.put<PathParams<UpdateUserParams>, ResponseBody<UpdateUserResponse>, RequestBody<UpdateUserRequest>, QueryParams>(
  '/updateUser/:userId',
  checkToken,
  doValidation(UserSchema[6]),
  (...args) => userController.updateUser(...args)
);

module.exports = { router, basePath: '/api/user' };
