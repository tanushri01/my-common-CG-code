export type PaymentIntentRequest = {
  paymentMethodType: Array<string>;
  amount: number;
  currency: string;
  description?: string;
};
