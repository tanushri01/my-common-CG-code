import Joi from 'joi';
import { joiValidationRequest } from '../Joi/index';
import { PaymentIntentRequest } from '../../requests/paymentIntentRequest';
import { IEmptyObject } from '../api-response/APIResponse';
import { PaymentIntentConfirmRequest } from '../../requests/paymentIntentConfirmRequest';
import { TransactionRequest } from '../../requests/transactionRequest';
import { UpdateTransactionRequest } from '../../requests/updateTransationRequest';
import { GetTransactionHistoryParams } from '../../requests/params';

export = {
  0: joiValidationRequest<IEmptyObject, PaymentIntentRequest>({
    body: {
      paymentMethodType: Joi.array(),
      amount: Joi.number().required(),
      currency: Joi.string().required(),
      description: Joi.string().optional(),
    },
  }),
  1: joiValidationRequest<IEmptyObject, PaymentIntentConfirmRequest>({
    body: {
      paymentIntent: Joi.string().optional(),
      returnUrl: Joi.string().optional(),
    },
  }),
  2: joiValidationRequest<IEmptyObject, TransactionRequest>({
    body: {
      userId: Joi.string().required(),
      transactionId: Joi.string().required(),
      customerId: Joi.string().required(),
      amount: Joi.string().required(),
      status: Joi.string().required(),
      formId: Joi.string().required(),
    },
  }),

  3: joiValidationRequest<IEmptyObject, UpdateTransactionRequest>({
    body: {
      transactionId: Joi.string().required(),
      status: Joi.string().required(),
    },
  }),

  4: joiValidationRequest<GetTransactionHistoryParams>({
    path: {
      formId: Joi.string().required(),
    },
  }),
};
