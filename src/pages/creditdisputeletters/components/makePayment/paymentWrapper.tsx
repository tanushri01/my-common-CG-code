import React, {
  ForwardedRef,
  forwardRef,
  memo,
  useImperativeHandle,
} from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { Stripe } from '@stripe/stripe-js';

import Payment from './payment';
import { usePaymentWrapperController } from './paymentWrapper.controller';
import { ISubStepRef } from '@/interface';

/**
 * @page {PaymentWrapper} -  Payment wrapper for the payment component - for the form
 * @param {Record<string, never>} _props
 * @param {ForwardedRef<ISubStepRef>} ref
 * @return {JSX.Element}
 */
const PaymentWrapper = (
  _props: Record<string, never>,
  ref: ForwardedRef<ISubStepRef>,
) => {
  const { getters } = usePaymentWrapperController();
  const { stripePromise, isPayment } = getters;

  useImperativeHandle(ref, () => ({
    validate: () => {
      if (isPayment) {
        return true;
      }

      return false;
    },
  }));

  return (
    <Elements stripe={stripePromise as Promise<Stripe | null>}>
      <Payment />
    </Elements>
  );
};

export default memo(forwardRef<ISubStepRef>(PaymentWrapper));
