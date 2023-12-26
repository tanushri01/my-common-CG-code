import Joi from 'joi';
import { joiValidationRequest } from '../Joi/index';
import { AddMultistepFormRequest, MultistepFormRequest } from '../../requests/addMultistepFormRequest';
import {
  AddMultistepFormParams,
  GetFormForUSCourtFormParams,
  GetMultistepFormParams,
  GetSingleFormParams,
  GetUserFormsLimitParams,
  ReportParams,
} from '../../requests/params';

export = {
  0: joiValidationRequest<AddMultistepFormParams, AddMultistepFormRequest>({
    path: {
      userId: Joi.string().required(),
    },
    body: {
      formdata: Joi.array()
        .items(
          Joi.object<MultistepFormRequest>({
            formId: Joi.string().optional(),
            formName: Joi.string().required(),
            status: Joi.string().required(),
            question: Joi.string().required(),
            answer: Joi.any().required(),
            questionId: Joi.number().required(),
            activeStep: Joi.number().required(),
            subActiveStep: Joi.number().required(),
          })
        )
        .required(),
    },
  }),
  1: joiValidationRequest<GetMultistepFormParams>({
    path: {
      userId: Joi.string().required(),
    },
  }),
  2: joiValidationRequest<ReportParams>({
    path: {
      userId: Joi.string().required(),
      formId: Joi.string().required(),
    },
  }),
  3: joiValidationRequest<GetSingleFormParams>({
    path: {
      userId: Joi.string().required(),
      formId: Joi.string().required(),
    },
  }),
  4: joiValidationRequest<GetFormForUSCourtFormParams>({
    path: {
      userId: Joi.string().required(),
    },
  }),
  5: joiValidationRequest<GetUserFormsLimitParams>({
    path: {
      userId: Joi.string().required(),
    },
  }),
};
