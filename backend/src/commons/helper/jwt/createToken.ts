import jwt from 'jsonwebtoken';

import { AuthTokenRequest } from './authTokenRequest';
import { serverConfig } from '../../config';
import constants from '../../constants';

export function generateToken(payload: AuthTokenRequest, expiresIn = constants.TOKEN_EXPIRY.LOGIN_TOKEN): string {
  const secretKey = serverConfig.JWT_SECRET_KEY;
  const token = jwt.sign(payload, secretKey, { expiresIn: expiresIn });
  return token;
}

export function verifyToken(token: string): AuthTokenRequest {
  const secretKey = serverConfig.JWT_SECRET_KEY;
  const payload = jwt.verify(token, secretKey);
  return payload as AuthTokenRequest;
}
