import logger from '@mindpath/logger';
import HttpStatus from 'http-status-codes';
import { PaymentRepository } from '../repositories/paymentRepository';
import { PaymentIntentResponse } from '../commons/responses/paymentIntentResponse';
import PaymentIntentDto from '../commons/dto/paymentIntentDto';
import PaymentIntentConfirmDto from '../commons/dto/paymentIntentConfirmDto';
import { paymentIntentConfirmResponse } from '../commons/responses/paymentIntentConfirmResponse';
import constants from '../commons/constants';
import { ExpressError } from '../commons/helper/errorHandler/ExpressError';
import { GetTransactionHistoryResponse } from '../commons/responses/getTransactionHistoryResponse';
import UpdateTransactionDto from '../commons/dto/updateTransactionDto';
import { TransactionResponse } from '../commons/responses/transactionResponse';
import { UpdateTransactionResponse } from '../commons/responses/updateTransactionResponse';
import TransactionDto from '../commons/dto/transactionDto';

export default class PaymentService {
  private _PaymentRepository: PaymentRepository;

  constructor() {
    this._PaymentRepository = new PaymentRepository();
  }
  public async addCustomer(email: string): Promise<string> {
    try {
      const customerId = await this._PaymentRepository.addCustomer(email);
      return customerId;
    } catch (error) {
      logger.error('Error in add payment service', error);
      throw error;
    }
  }

  public async paymentIntent(paymentIntentDto: PaymentIntentDto): Promise<PaymentIntentResponse> {
    const paymentResponse = await this._PaymentRepository.paymentIntent(paymentIntentDto);
    const clientSecret = paymentResponse.client_secret;
    const paymentIntentId = paymentResponse.id;
    return { clientSecret, paymentIntentId };
  }

  public async paymentIntentConfirm(
    paymentIntentConfirmDto: PaymentIntentConfirmDto
  ): Promise<paymentIntentConfirmResponse> {
    const paymentResponse = await this._PaymentRepository.paymentIntentConfirm(paymentIntentConfirmDto);
    return paymentResponse;
  }

  public async storeTransactionHistory(TransactionDto: TransactionDto): Promise<TransactionResponse> {
    return await this._PaymentRepository.storeTransactionHistory(TransactionDto);
  }

  public async updateTransactionHistory(
    updateTransactionDto: UpdateTransactionDto
  ): Promise<UpdateTransactionResponse> {
    await this._PaymentRepository.updateTransactionHistory(updateTransactionDto);
    return <UpdateTransactionResponse>{ message: constants.SERVICE_MESSAGE.UPDATE_TRANSACTION_HISTORY };
  }

  public async getTransactionHistory(formId: string): Promise<GetTransactionHistoryResponse> {
    const transaction = await this._PaymentRepository.getTransactionHistory(formId);
    if (!transaction) {
      throw new ExpressError(HttpStatus.NOT_FOUND, constants.SERVICE_MESSAGE.TRANSACTION_DOES_NOT_EXIST);
    }
    return transaction;
  }
}
