import HttpStatus from 'http-status-codes';

import constants from '../../constants/index';
import { ErrorResponseBody } from './APIErrorResponseBody';

export interface IEmptyObject {
  [key: string]: void;
}

export class APIResponse<T = IEmptyObject> {
  public status: number = HttpStatus.BAD_REQUEST;
  public message = '';
  public body: T = <T>{};
}

export function getDefaultErrorResponse(): APIResponse<ErrorResponseBody> {
  const errorResponse = new APIResponse<ErrorResponseBody>();
  errorResponse.status = HttpStatus.INTERNAL_SERVER_ERROR;
  errorResponse.message = constants.VALIDATION_MESSAGE.INTERNAL_SERVER_ERROR;
  errorResponse.body = {
    errors: [{}],
  };
  return errorResponse;
}
