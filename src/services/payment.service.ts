import { AxiosResponse } from 'axios';

import { ApiHelper, StringHelper } from '../helper';

import {
  IApiResponseWithBody,
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

/**
 * Payment Page Service
 */
export class PaymentService {
  /**
   * Get payment intent data
   * @param {IPaymentIntentRequest} payload
   * @return {promises<IApiResponseWithBody<IPaymentIntentResponse>>}
   */
  static async getPaymentIntentData(
    payload: IPaymentIntentRequest,
  ): Promise<IPaymentIntentResponse> {
    const response: AxiosResponse = await ApiHelper.PaymentAsync<
      IApiResponseWithBody<IPaymentIntentResponse>
    >({
      url: `/api/payment/paymentIntent`,
      method: 'POST',
      data: payload,
    });

    return response.data;
  }

  /**
   * Confirm payment intent data
   * @param {IPaymentIntentConfirmRequest} payload
   * @return {promises<IPaymentIntentConfirmResponse>}
   */
  static async confirmPaymentIntent(
    payload: IPaymentIntentConfirmRequest,
  ): Promise<IPaymentIntentConfirmResponse> {
    const response: AxiosResponse = await ApiHelper.PaymentAsync<
      IApiResponseWithBody<IPaymentIntentConfirmResponse>
    >({
      url: `/api/payment/confirmPaymentIntent`,
      method: 'POST',
      data: payload,
    });
    return response.data;
  }

  /**
   * Store transaction history
   * @param {ITransactionRequest} payload
   * @return {Promise<void>}
   */
  public static async storeTransactionHistory(
    payload: ITransactionRequest,
  ): Promise<void> {
    const response: AxiosResponse<IApiResponseWithBody<void>> =
      await ApiHelper.send<IApiResponseWithBody<void>>({
        url: StringHelper.translationHelper(
          '/api/payment/store/transactionHistory',
        ),
        method: 'POST',
        data: payload,
      });
    return response.data.body;
  }

  /**
   * Update transaction history
   * @param {IUpdateTransactionRequest} payload
   * @return {Promise<IUpdateTransactionResponse>}
   */
  public static async updateTransactionHistory(
    payload: IUpdateTransactionRequest,
  ): Promise<IUpdateTransactionResponse> {
    const response: AxiosResponse<
      IApiResponseWithBody<IUpdateTransactionResponse>
    > = await ApiHelper.send<IApiResponseWithBody<IUpdateTransactionResponse>>({
      url: StringHelper.translationHelper('/api/payment/transactionHistory'),
      method: 'PUT',
      data: payload,
    });
    return response.data.body;
  }

  /**
   * Get payment history data
   * @param {IGetTransactionRequest} payload
   * @return {promises<IApiResponseWithBody<IGetTransactionResponse>>}
   */
  static async getTransactionHistory(
    payload: IGetTransactionRequest,
  ): Promise<IGetTransactionResponse> {
    const response: AxiosResponse = await ApiHelper.PaymentAsync<
      IApiResponseWithBody<IGetTransactionResponse>
    >({
      url: `/api/payment/transactionHistory/${payload.formId}`,
      method: 'GET',
    });

    return response.data.body;
  }
}
