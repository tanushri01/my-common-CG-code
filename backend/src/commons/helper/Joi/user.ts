import Joi from 'joi';

import { joiEnumValidation, joiValidationRequest } from '../Joi/index';
import { IEmptyObject } from '../api-response/APIResponse';
import { SignupRequest } from '../../requests/signupRequest';
import { LoginRequest } from '../../requests/loginRequest';
import { ForgetPasswordRequest } from '../../requests/ForgetPasswordRequest';
import { ResetPasswordRequest } from '../../requests/resetPasswordRequest';
import { ValidateTokenRequest } from '../../requests/validateTokenRequest';
import { GetUserDetails, UpdateUserParams } from '../../requests/params';
import { UpdateUserRequest } from '../../requests/updateUserRequest';
import { LoginTypeEnum } from '../../../commons/enum/loginType';

export = {
  0: joiValidationRequest<IEmptyObject, SignupRequest>({
    body: {
      email: Joi.string().required(),
      password: Joi.string().allow('').allow(null),
      loginType: Joi.string()
        .allow('')
        .allow(null)
        .valid(...joiEnumValidation(LoginTypeEnum))
        .default(LoginTypeEnum.NORMAL),
    },
  }),

  1: joiValidationRequest<IEmptyObject, LoginRequest>({
    body: {
      email: Joi.string().required(),
      password: Joi.string().allow('').allow(null),
      loginType: Joi.string()
        .allow('')
        .allow(null)
        .valid(...joiEnumValidation(LoginTypeEnum))
        .default(LoginTypeEnum.NORMAL),
    },
  }),

  2: joiValidationRequest<IEmptyObject, ForgetPasswordRequest>({
    body: {
      email: Joi.string().email().trim().required(),
    },
  }),

  3: joiValidationRequest<IEmptyObject, ResetPasswordRequest>({
    body: {
      token: Joi.string().required(),
      newPassword: Joi.string().required(),
      confirmPassword: Joi.string().required(),
    },
  }),
  4: joiValidationRequest<IEmptyObject, ValidateTokenRequest>({
    body: {
      email: Joi.string().email().trim().required(),
      token: Joi.string().required(),
    },
  }),
  5: joiValidationRequest<GetUserDetails>({
    path: {
      userId: Joi.string().required(),
    },
  }),
  6: joiValidationRequest<UpdateUserParams, UpdateUserRequest>({
    path: {
      userId: Joi.string().required(),
    },
    body: {
      email: Joi.string().required(),
      firstName: Joi.string().optional(),
      lastName: Joi.string().optional(),
      newPassword: Joi.string().optional(),
      confirmPassword: Joi.string().optional(),
    },
  }),
};
