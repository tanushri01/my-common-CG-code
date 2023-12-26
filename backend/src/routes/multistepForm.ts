import express from 'express';
import { doValidation } from '../commons/helper/Joi';
import MultistepForm from '../commons/helper/Joi/multistepForm';
import { PathParams, ResponseBody, RequestBody, QueryParams } from '../commons/helper/requestType/CustomRequest';
import MultistepFormController from '../controllers/multistepformController';
import { checkToken } from '../commons/helper/jwt/checkToken';
import { AddMultistepFormRequest } from '../commons/requests/addMultistepFormRequest';
import {
  AddMultistepFormParams,
  GetFormForUSCourtFormParams,
  GetMultistepFormParams,
  GetSingleFormParams,
  GetUserFormsLimitParams,
  ReportParams,
} from '../commons/requests/params';
import { AddMultistepFormResponse } from '../commons/responses/addMultistepFormResponse';
import { GetMultistepFormResponse } from '../commons/responses/getMultistepFormResponse';
import { SendReportResponse } from '../commons/responses/report';
import { GetSingleFormResponse } from '../commons/responses/getSingleFormResponse';
import { GetUserFormsLimitResponse } from '../commons/responses/getUserFormsLimitResponse';

const multistepFormController = new MultistepFormController();
const router = express.Router();

router.post<
  PathParams<AddMultistepFormParams>,
  ResponseBody<AddMultistepFormResponse>,
  RequestBody<AddMultistepFormRequest>,
  QueryParams
>('/multistepForm/:userId', checkToken, doValidation(MultistepForm[0]), (...args) =>
  multistepFormController.addMultistepForm(...args)
);

router.get<PathParams<GetMultistepFormParams>, ResponseBody<GetMultistepFormResponse>, RequestBody, QueryParams>(
  '/multistepForm/:userId',
  checkToken,
  doValidation(MultistepForm[1]),
  (...args) => multistepFormController.getMultistepForm(...args)
);

router.get<PathParams<ReportParams>, ResponseBody<SendReportResponse>, RequestBody, QueryParams>(
  '/createReport/:userId/:formId',
  doValidation(MultistepForm[2]),
  (...args) => multistepFormController.createReport(...args)
);

router.get<PathParams<ReportParams>, ResponseBody<SendReportResponse>, RequestBody, QueryParams>(
  '/sendReport/:userId/:formId',
  checkToken,
  doValidation(MultistepForm[2]),
  (...args) => multistepFormController.sendReport(...args)
);

router.get<PathParams<GetSingleFormParams>, ResponseBody<GetSingleFormResponse>, RequestBody, QueryParams>(
  '/multistepForm/:userId/:formId',
  checkToken,
  doValidation(MultistepForm[3]),
  (...args) => multistepFormController.getFormByFormId(...args)
);

router.get<PathParams<GetFormForUSCourtFormParams>, ResponseBody<GetSingleFormResponse>, RequestBody, QueryParams>(
  '/usCourtForm/userId/:userId',
  checkToken,
  doValidation(MultistepForm[4]),
  (...args) => multistepFormController.getFormForUSCourtForm(...args)
);

router.get<PathParams<GetUserFormsLimitParams>, ResponseBody<GetUserFormsLimitResponse>, RequestBody, QueryParams>(
  '/forms/limit/:userId',
  checkToken,
  doValidation(MultistepForm[5]),
  (...args) => multistepFormController.getUserFormsLimit(...args)
);

module.exports = { router, basePath: '/api' };
