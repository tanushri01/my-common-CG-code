import { PaymentIntentConfirmRequest } from '../requests/paymentIntentConfirmRequest';

export default class PaymentIntentConfirmDto {
  paymentIntent: string;
  returnUrl: string;

  constructor(data: PaymentIntentConfirmRequest) {
    this.paymentIntent = data.paymentIntent;
    this.returnUrl = data.returnUrl;
  }
}
