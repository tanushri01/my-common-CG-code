import { RootState } from '@/redux';

export const IS_PAYMENT = (state: RootState) => state.payment.isPayment;
export const PAYMENT_HISTORY = (state: RootState) =>
  state.payment.paymentHistory;
