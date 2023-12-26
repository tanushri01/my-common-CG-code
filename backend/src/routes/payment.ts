import express from 'express';
import PaymentSchema from '../commons/helper/Joi/payment';
import { doValidation } from '../commons/helper/Joi';
import { PathParams, ResponseBody, RequestBody, QueryParams } from '../commons/helper/requestType/CustomRequest';
import { PaymentIntentResponse } from '../commons/responses/paymentIntentResponse';
import PaymentController from '../controllers/paymentController';
import { checkToken } from '../commons/helper/jwt/checkToken';
import { PaymentIntentRequest } from '../commons/requests/paymentIntentRequest';
import { PaymentIntentConfirmRequest } from '../commons/requests/paymentIntentConfirmRequest';
import { paymentIntentConfirmResponse } from '../commons/responses/paymentIntentConfirmResponse';
import { TransactionRequest } from '../commons/requests/transactionRequest';
import { TransactionResponse } from '../commons/responses/transactionResponse';
import { UpdateTransactionResponse } from '../commons/responses/updateTransactionResponse';
import { UpdateTransactionRequest } from '../commons/requests/updateTransationRequest';
import { GetTransactionHistoryResponse } from '../commons/responses/getTransactionHistoryResponse';
import { GetTransactionHistoryParams } from '../commons/requests/params';

const router = express.Router();
const paymentController = new PaymentController();
router.post<PathParams, ResponseBody<PaymentIntentResponse>, RequestBody<PaymentIntentRequest>, QueryParams>(
  '/paymentIntent',
  checkToken,
  doValidation(PaymentSchema[0]),
  (...args) => paymentController.paymentIntent(...args)
);

router.post<
  PathParams,
  ResponseBody<paymentIntentConfirmResponse>,
  RequestBody<PaymentIntentConfirmRequest>,
  QueryParams
>('/confirmPaymentIntent', checkToken, doValidation(PaymentSchema[1]), (...args) =>
  paymentController.paymentIntentConfirm(...args)
);

router.post<PathParams, ResponseBody<TransactionResponse>, RequestBody<TransactionRequest>, QueryParams>(
  '/store/transactionHistory',
  checkToken,
  doValidation(PaymentSchema[2]),
  (...args) => paymentController.storeTransactionHistory(...args)
);

router.put<PathParams, ResponseBody<UpdateTransactionResponse>, RequestBody<UpdateTransactionRequest>, QueryParams>(
  '/transactionHistory',
  checkToken,
  doValidation(PaymentSchema[3]),
  (...args) => paymentController.updateTransactionHistory(...args)
);

router.get<
  PathParams<GetTransactionHistoryParams>,
  ResponseBody<GetTransactionHistoryResponse>,
  RequestBody,
  QueryParams
>('/transactionHistory/:formId', checkToken, doValidation(PaymentSchema[4]), (...args) =>
  paymentController.getTransactionHistory(...args)
);

module.exports = { router, basePath: '/api/payment' };
