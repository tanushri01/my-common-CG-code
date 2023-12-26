import HttpStatus from 'http-status-codes';
import { Response, NextFunction } from 'express';
import logger from '@mindpath/logger';
import { AuthTokenRequest } from './authTokenRequest';
import { ExpressError } from '../errorHandler/ExpressError';
import * as jwtHelper from '../../helper/jwt/createToken';
import CustomRequest from '../requestType/CustomRequest';
import constants from '../../constants';

export async function checkToken(req: CustomRequest, _res: Response, next: NextFunction): Promise<void> {
  try {
    const authToken = req.headers.authorization;
    if (authToken) {
      const token = authToken.replace('Bearer ', '');
      const payload: AuthTokenRequest = await jwtHelper.verifyToken(token);
      if (!payload) {
        return next(new ExpressError(HttpStatus.UNAUTHORIZED, constants.VALIDATION_MESSAGE.UNAUTHORIZE));
      }
      next();
    } else {
      return next(new ExpressError(HttpStatus.UNAUTHORIZED, constants.VALIDATION_MESSAGE.TOKEN_MISSING));
    }
  } catch (error) {
    logger.error(error);
    return next(new ExpressError(HttpStatus.UNAUTHORIZED, constants.VALIDATION_MESSAGE.UNAUTHORIZE));
  }
}
