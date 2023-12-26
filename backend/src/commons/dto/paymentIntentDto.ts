import { PaymentIntentRequest } from '../requests/paymentIntentRequest';

export default class PaymentIntentDto {
  paymentMethodType: Array<string>;
  amount: number;
  currency: string;
  description?: string;

  constructor(data: PaymentIntentRequest) {
    this.paymentMethodType = data.paymentMethodType;
    this.amount = data.amount;
    this.currency = data.currency;
    this.description = 'Software development services';
  }
}
