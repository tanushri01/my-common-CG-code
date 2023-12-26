import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  IGetTransactionRequest,
  IGetTransactionResponse,
  IPaymentIntentConfirmRequest,
  IPaymentIntentConfirmResponse,
  IPaymentIntentRequest,
  IPaymentIntentResponse,
  ITransactionRequest,
  IUpdateTransactionRequest,
  IUpdateTransactionResponse,
} from '@/interface';
import { PaymentService } from '@/services';

/**
 * Payment Thunk
 */
export class PaymentThunk {
  /**
   * @function {storeTransactionHistory} - Method for storing payment transaction history
   * @return {Promise<void>}
   */
  public static storeTransactionHistory = createAsyncThunk(
    'payment/store/transaction',
    async (payload: ITransactionRequest): Promise<void> => {
      const response = await PaymentService.storeTransactionHistory(payload);
      return response;
    },
  );

  /**
   * @function {getTransactionHistory} - Method for fetching payment transaction history
   * @return {Promise<void>}
   */
  public static getTransactionHistory = createAsyncThunk(
    'payment/get/transaction',
    async (
      payload: IGetTransactionRequest,
    ): Promise<IGetTransactionResponse> => {
      const response = await PaymentService.getTransactionHistory(payload);
      return response;
    },
  );

  /**
   * @function {updateTransactionHistory} - Method for updating payment transaction history
   * @param {IUpdateTransactionRequest} payload
   * @return {Promise<IUpdateTransactionResponse>}
   */
  public static updateTransactionHistory = createAsyncThunk(
    'payment/store/update',
    async (
      payload: IUpdateTransactionRequest,
    ): Promise<IUpdateTransactionResponse> => {
      const response = await PaymentService.updateTransactionHistory(payload);
      return response;
    },
  );

  /**
   * @function {getPaymentIntent} - Method for fetcing payment intent
   * @param {IPaymentIntentRequest} payload
   * @return {Promise<IPaymentIntentResponse>}
   */
  public static getPaymentIntent = createAsyncThunk(
    'get/intent',
    async (payload: IPaymentIntentRequest): Promise<IPaymentIntentResponse> => {
      const response = await PaymentService.getPaymentIntentData(payload);
      return response;
    },
  );

  /**
   * @function {confirmPaymentIntent} - Method for fetcing confirmed payment intent
   * @param {IPaymentIntentConfirmRequest} payload
   * @return {Promise<IPaymentIntentConfirmResponse>}
   */
  public static confirmPaymentIntent = createAsyncThunk(
    'confirm/intent',
    async (
      payload: IPaymentIntentConfirmRequest,
    ): Promise<IPaymentIntentConfirmResponse> => {
      const response = await PaymentService.confirmPaymentIntent(payload);
      return response;
    },
  );
}
