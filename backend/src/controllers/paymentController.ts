import { NextFunction, Response } from 'express';
import HttpStatus from 'http-status-codes';
import logger from '@mindpath/logger';
import { APIResponse, IEmptyObject } from '../commons/helper/api-response/APIResponse';
import CustomRequest from '../commons/helper/requestType/CustomRequest';
import { PaymentIntentRequest } from '../commons/requests/paymentIntentRequest';
import PaymentService from '../services/paymentService';
import { ExpressError } from '../commons/helper/errorHandler/ExpressError';
import constants from '../commons/constants';
import { PaymentIntentResponse } from '../commons/responses/paymentIntentResponse';
import PaymentIntentDto from '../commons/dto/paymentIntentDto';
import { PaymentIntentConfirmRequest } from '../commons/requests/paymentIntentConfirmRequest';
import PaymentIntentConfirmDto from '../commons/dto/paymentIntentConfirmDto';
import { paymentIntentConfirmResponse } from '../commons/responses/paymentIntentConfirmResponse';
import { TransactionRequest } from '../commons/requests/transactionRequest';
import TransactionDto from '../commons/dto/transactionDto';
import { TransactionResponse } from '../commons/responses/transactionResponse';
import { UpdateTransactionRequest } from '../commons/requests/updateTransationRequest';
import UpdateTransactionDto from '../commons/dto/updateTransactionDto';
import { GetTransactionHistoryResponse } from '../commons/responses/getTransactionHistoryResponse';
import { GetTransactionHistoryParams } from '../commons/requests/params';
import { UpdateTransactionResponse } from '../commons/responses/updateTransactionResponse';

export default class PaymentController {
  private _paymentService: PaymentService;

  constructor() {
    this._paymentService = new PaymentService();
  }
  public async paymentIntent(
    req: CustomRequest<IEmptyObject, PaymentIntentResponse, PaymentIntentRequest>,
    res: Response<APIResponse<PaymentIntentResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<PaymentIntentResponse>();
      const paymentIntentDto = new PaymentIntentDto(req.body);
      const serviceResponse = await this._paymentService.paymentIntent(paymentIntentDto);
      response.status = HttpStatus.CREATED;
      response.message = constants.CONTROLLER_MESSAGE.SUCCESS;
      response.body = serviceResponse;
      res.status(response.status).send(response);
    } catch (error) {
      logger.error(`Error in paymentController method paymentIntent ${error}`);
      return next(new ExpressError(<number>error.status, <string>error.message));
    }
  }

  public async paymentIntentConfirm(
    req: CustomRequest<IEmptyObject, paymentIntentConfirmResponse, PaymentIntentConfirmRequest>,
    res: Response<APIResponse<paymentIntentConfirmResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<paymentIntentConfirmResponse>();
      const paymentIntentConfirmDto = new PaymentIntentConfirmDto(req.body);
      const serviceResponse = await this._paymentService.paymentIntentConfirm(paymentIntentConfirmDto);
      response.status = HttpStatus.CREATED;
      response.message = constants.CONTROLLER_MESSAGE.SUCCESS;
      response.body = serviceResponse;
      res.status(response.status).send(response);
    } catch (error) {
      logger.error(`Error in paymentController method paymentIntentConfirm ${error}`);
      return next(new ExpressError(<number>error.status, <string>error.message));
    }
  }

  public async storeTransactionHistory(
    req: CustomRequest<IEmptyObject, TransactionResponse, TransactionRequest>,
    res: Response<APIResponse<TransactionResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<TransactionResponse>();
      const transactionDto = new TransactionDto(req.body);
      const serviceResponse = await this._paymentService.storeTransactionHistory(transactionDto);
      response.status = HttpStatus.OK;
      response.message = constants.CONTROLLER_MESSAGE.SUCCESS;
      response.body = serviceResponse;
      res.status(response.status).send(response);
    } catch (error) {
      logger.error(`Error in paymentController method storeTransactionHistory ${error}`);
      return next(new ExpressError(<number>error.status, <string>error.message));
    }
  }

  public async updateTransactionHistory(
    req: CustomRequest<IEmptyObject, UpdateTransactionResponse, UpdateTransactionRequest>,
    res: Response<APIResponse<UpdateTransactionResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<UpdateTransactionResponse>();
      const updateTransactionDto = new UpdateTransactionDto(req.body);
      const serviceResponse = await this._paymentService.updateTransactionHistory(updateTransactionDto);
      response.status = HttpStatus.OK;
      response.message = constants.CONTROLLER_MESSAGE.SUCCESS;
      response.body = serviceResponse;
      res.status(response.status).send(response);
    } catch (error) {
      logger.error(`Error in paymentController method updateTransactionHistory ${error}`);
      return next(new ExpressError(<number>error.status, <string>error.message));
    }
  }

  public async getTransactionHistory(
    req: CustomRequest<GetTransactionHistoryParams, GetTransactionHistoryResponse>,
    res: Response<APIResponse<GetTransactionHistoryResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetTransactionHistoryResponse>();
      const formId = req.params.formId;
      const serviceResponse = await this._paymentService.getTransactionHistory(formId);
      response.status = HttpStatus.OK;
      response.message = constants.CONTROLLER_MESSAGE.SUCCESS;
      response.body = serviceResponse;
      res.status(response.status).send(response);
    } catch (error) {
      logger.error(`Error in paymentController method getTransactionHistory ${error}`);
      return next(new ExpressError(<number>error.status, <string>error.message));
    }
  }
}
