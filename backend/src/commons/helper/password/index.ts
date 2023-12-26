import { isEqual } from 'lodash';
import HttpStatus from 'http-status-codes';
import { ExpressError } from '../errorHandler/ExpressError';
import constants from '../../constants';
import Cipher from '../password/cipher';

export async function verifyPassword(password: string, hash: string): Promise<void> {
  const dbPassword = Cipher.decrypt(hash);
  const isValid = isEqual(password, dbPassword);
  if (!isValid) {
    throw new ExpressError(HttpStatus.UNAUTHORIZED, constants.VALIDATION_MESSAGE.INVALID_PASSWORD);
  }
}
