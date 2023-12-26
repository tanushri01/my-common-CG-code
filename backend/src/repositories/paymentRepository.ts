import Stripe from 'stripe';
import HttpStatus from 'http-status-codes';
import { FilterQuery } from 'mongoose';
import { serverConfig } from '../commons/config';
import PaymentIntentDto from '../commons/dto/paymentIntentDto';
import PaymentIntentConfirmDto from '../commons/dto/paymentIntentConfirmDto';
import TransactionDto from '../commons/dto/transactionDto';
import TransactionModel, { ITransaction } from '../database/transactionHistory';
import UpdateTransactionDto from '../commons/dto/updateTransactionDto';
import { ExpressError } from '../commons/helper/errorHandler/ExpressError';
import constants from '../commons/constants';

const stripe = new Stripe(serverConfig.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
});

export class PaymentRepository {
  public async addCustomer(email: string): Promise<string> {
    const customer = await stripe.customers.create({
      email: email,
    });
    return customer.id;
  }

  public async paymentIntent(paymentIntentDto: PaymentIntentDto): Promise<Stripe.PaymentIntent> {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: paymentIntentDto.amount * 100,
      currency: paymentIntentDto.currency,
      payment_method_types: paymentIntentDto.paymentMethodType,
      description: paymentIntentDto.description,
    });
    return paymentIntent;
  }

  public async paymentIntentConfirm(paymentIntentConfirmDto: PaymentIntentConfirmDto): Promise<Stripe.PaymentIntent> {
    const confirmPaymentIntent = await stripe.paymentIntents.confirm(paymentIntentConfirmDto.paymentIntent, {
      return_url: paymentIntentConfirmDto.returnUrl,
    });
    return confirmPaymentIntent;
  }

  public async storeTransactionHistory(transactionDto: TransactionDto): Promise<ITransaction> {
    const transaction = new TransactionModel(transactionDto);
    const record = await transaction.save();
    return record;
  }

  public async updateTransactionHistory(updateTransactionDto: UpdateTransactionDto): Promise<void> {
    const filter: FilterQuery<ITransaction> = {
      transactionId: updateTransactionDto.transactionId,
    };
    const update: Partial<ITransaction> = {};
    update.status = updateTransactionDto.status;
    const userRecord = await TransactionModel.findOneAndUpdate(filter, { $set: update }).lean<ITransaction>();
    if (!userRecord) {
      throw new ExpressError(HttpStatus.NOT_FOUND, constants.VALIDATION_MESSAGE.INVALID_TRANSACTION_ID);
    }
  }

  public async getTransactionHistory(formId: string): Promise<ITransaction | null> {
    const filter: FilterQuery<ITransaction> = {
      formId: formId,
    };

    return await TransactionModel.findOne(filter);
  }
}
