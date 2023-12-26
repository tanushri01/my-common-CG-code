import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import constants from '../../constants/index';
import { ErrorItem, ErrorResponseBody } from '../api-response/APIErrorResponseBody';
import { APIResponse, getDefaultErrorResponse } from '../api-response/APIResponse';

export class ExpressError extends Error {
  public statusText: string = constants.VALIDATION_MESSAGE.INTERNAL_SERVER_ERROR;
  public errors: Array<ErrorItem> = new Array<ErrorItem>();
  public status: number = StatusCodes.INTERNAL_SERVER_ERROR;

  constructor(status?: number, statusText?: string, errors?: Array<ErrorItem>) {
    super(statusText);
    if (status) {
      this.status = status;
    }

    if (statusText) {
      this.statusText = statusText;
    }

    if (errors) {
      this.errors = errors;
    }
  }

  public static errorHandler(
    status: number,
    message: string,
    errors: Array<ErrorItem>,
    res: Response<APIResponse<ErrorResponseBody>>
  ): void {
    try {
      const response = new APIResponse<ErrorResponseBody>();
      response.status = status;
      response.message = message;
      response.body = <ErrorResponseBody>{ errors };
      res.status(response.status).send(response);
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(getDefaultErrorResponse());
    }
  }
}
