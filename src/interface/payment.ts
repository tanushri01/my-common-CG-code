import Stripe from 'stripe';

// Store Tranasaction History
export interface ITransactionRequest {
  userId: string;
  transactionId: string;
  customerId: string;
  amount: string;
  status: string;
  formId: string;
}

export interface ITransactionResponse extends ITransactionRequest {}

// Get Tranasaction History
export interface IGetTransactionRequest {
  formId: string;
}

export interface IGetTransactionResponse extends ITransactionRequest {}

// Payment Intent
export interface IPaymentIntentRequest {
  paymentMethodType: Array<string>;
  amount: number;
  currency: string;
  description?: string;
}

export interface IPaymentIntentResponse {
  body: {
    clientSecret: string;
    paymentIntentId: string;
  };
}

// Confirm Payment
export interface IPaymentIntentConfirmRequest {
  paymentIntent: string;
  returnUrl: string;
}

export interface IPaymentIntentConfirmResponse extends Stripe.PaymentIntent {}

// Update Transaction History
export interface IUpdateTransactionRequest {
  transactionId: string;
  status: string;
}

export interface IUpdateTransactionResponse {
  message: string;
}
