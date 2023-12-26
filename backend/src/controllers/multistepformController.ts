import HttpStatus from 'http-status-codes';
import logger from '@mindpath/logger';
import { NextFunction, Response } from 'express';
import constants from '../commons/constants';
import { APIResponse, IEmptyObject } from '../commons/helper/api-response/APIResponse';
import { ExpressError } from '../commons/helper/errorHandler/ExpressError';
import CustomRequest from '../commons/helper/requestType/CustomRequest';
import AddMultistepFormDto from '../commons/dto/addMultistepFormDto';
import { MultistepFormService } from '../services/multistepFormService';
import { AddMultistepFormRequest } from '../commons/requests/addMultistepFormRequest';
import {
  AddMultistepFormParams,
  GetFormForUSCourtFormParams,
  GetMultistepFormParams,
  GetSingleFormParams,
  ReportParams,
} from '../commons/requests/params';
import { AddMultistepFormResponse } from '../commons/responses/addMultistepFormResponse';
import { GetMultistepFormResponse } from '../commons/responses/getMultistepFormResponse';
import { SendReportResponse } from '../commons/responses/report';
import { GetSingleFormResponse } from '../commons/responses/getSingleFormResponse';
import ReportDto from '../commons/dto/reportDto';
import { GetUserFormsLimitResponse } from '../commons/responses/getUserFormsLimitResponse';

export default class MultistepFormController {
  private _multistepFormService: MultistepFormService;

  constructor() {
    this._multistepFormService = new MultistepFormService();
  }

  public async addMultistepForm(
    req: CustomRequest<AddMultistepFormParams, AddMultistepFormResponse, AddMultistepFormRequest>,
    res: Response<APIResponse<AddMultistepFormResponse>>,
    next: NextFunction
  ): Promise<void> {
    const response = new APIResponse<AddMultistepFormResponse>();
    try {
      const addMultistepFormDto = new AddMultistepFormDto(req.body, req.params);
      const responseFromService = await this._multistepFormService.addMultistepForm(addMultistepFormDto);
      response.status = HttpStatus.CREATED;
      response.message = constants.CONTROLLER_MESSAGE.SUCCESS;
      response.body = responseFromService;
      res.status(response.status).send(response);
    } catch (error) {
      logger.error(`Error in multistepFormController method addMultistepForm ${JSON.stringify(error)}`);
      next(new ExpressError(<number>error.status, <string>error.message));
    }
  }

  public async getMultistepForm(
    req: CustomRequest<GetMultistepFormParams, GetMultistepFormResponse>,
    res: Response<APIResponse<GetMultistepFormResponse>>,
    next: NextFunction
  ): Promise<void> {
    const response = new APIResponse<GetMultistepFormResponse>();
    try {
      const userId = req.params.userId;
      const responseFromService = await this._multistepFormService.getMultistepForm(userId);
      response.status = HttpStatus.OK;
      response.message = constants.CONTROLLER_MESSAGE.SUCCESS;
      response.body = responseFromService;
      res.status(response.status).send(response);
    } catch (error) {
      logger.error(`Error in multistepFormController method getMultistepForm ${JSON.stringify(error)}`);
      next(new ExpressError(<number>error.status, <string>error.message));
    }
  }

  public async createReport(
    req: CustomRequest<ReportParams, SendReportResponse>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const reportDto = new ReportDto(req.params);
      const responseFromService = await this._multistepFormService.createReport(reportDto);
      res.status(HttpStatus.OK).attachment('report.pdf').contentType('application/pdf').send(responseFromService);
    } catch (error) {
      logger.error(`Error in multistepFormController method createReport ${JSON.stringify(error)}`);
      next(new ExpressError(<number>error.status, <string>error.message));
    }
  }

  public async sendReport(
    req: CustomRequest<ReportParams, IEmptyObject>,
    res: Response<APIResponse<SendReportResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<SendReportResponse>();
      const reportDto = new ReportDto(req.params);
      const serviceMessage = await this._multistepFormService.sendReport(reportDto);
      response.status = HttpStatus.OK;
      response.message = constants.CONTROLLER_MESSAGE.SUCCESS;
      response.body = serviceMessage;
      res.status(response.status).send(response);
    } catch (error) {
      logger.error(`Error in multistepFormController method sendReport ${JSON.stringify(error)}`);
      next(new ExpressError(<number>error.status, <string>error.message));
    }
  }

  public async getFormByFormId(
    req: CustomRequest<GetSingleFormParams, GetSingleFormResponse>,
    res: Response<APIResponse<GetSingleFormResponse>>,
    next: NextFunction
  ): Promise<void> {
    const response = new APIResponse<GetSingleFormResponse>();
    try {
      const responseFromService = await this._multistepFormService.getFormByFormId(req.params);
      response.status = HttpStatus.OK;
      response.message = constants.CONTROLLER_MESSAGE.SUCCESS;
      response.body = responseFromService;
      res.status(response.status).send(response);
    } catch (error) {
      logger.error(`Error in multistepFormController method getFormByFormId ${JSON.stringify(error)}`);
      next(new ExpressError(<number>error.status, <string>error.message));
    }
  }

  public async getFormForUSCourtForm(
    req: CustomRequest<GetFormForUSCourtFormParams, GetSingleFormResponse>,
    res: Response<APIResponse<GetSingleFormResponse>>,
    next: NextFunction
  ): Promise<void> {
    const response = new APIResponse<GetSingleFormResponse>();
    try {
      const responseFromService = await this._multistepFormService.getFormForUSCourtForm(req.params);
      response.status = HttpStatus.OK;
      response.message = constants.CONTROLLER_MESSAGE.SUCCESS;
      response.body = responseFromService;
      res.status(response.status).send(response);
    } catch (error) {
      logger.error(`Error in multistepFormController method getFormForUSCourtForm ${JSON.stringify(error)}`);
      next(new ExpressError(<number>error.status, <string>error.message));
    }
  }

  public async getUserFormsLimit(
    req: CustomRequest<GetFormForUSCourtFormParams, GetUserFormsLimitResponse>,
    res: Response<APIResponse<GetUserFormsLimitResponse>>,
    next: NextFunction
  ): Promise<void> {
    const response = new APIResponse<GetUserFormsLimitResponse>();
    try {
      const responseFromService = await this._multistepFormService.getUserFormsLimit(req.params);
      response.status = HttpStatus.OK;
      response.message = constants.CONTROLLER_MESSAGE.SUCCESS;
      response.body = responseFromService;
      res.status(response.status).send(response);
    } catch (error) {
      logger.error(`Error in multistepFormController method getUserFormsLimit ${JSON.stringify(error)}`);
      next(new ExpressError(<number>error.status, <string>error.message));
    }
  }
}
