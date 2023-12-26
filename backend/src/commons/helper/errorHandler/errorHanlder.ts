import { Response } from 'express';
import HttpStatus from 'http-status-codes';

import logger from '@mindpath/logger';
import { ErrorItem, ErrorResponseBody } from '../api-response/APIErrorResponseBody';
import { APIResponse, getDefaultErrorResponse } from '../api-response/APIResponse';

export function ErrorHandler(
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
    logger.error(`Error from error Handler ${error.message}`);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(getDefaultErrorResponse());
  }
}
