import { Stripe, loadStripe } from '@stripe/stripe-js';

import { useAppSelector } from '@/redux';
import { IS_PAYMENT } from '@/redux/selectors/payment.selector';

interface IPaymentWrapperControllerResponse {
  getters: {
    stripePromise: Promise<Stripe | null> | undefined;
    isPayment: boolean;
  };
}

/**
 * @controller {usePaymentController}
 * @return {IPaymentWrapperControllerResponse}
 */
export const usePaymentWrapperController =
  (): IPaymentWrapperControllerResponse => {
    const isPayment = useAppSelector(IS_PAYMENT);
    let stripePromise;

    if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
      );
    }

    return {
      getters: {
        stripePromise,
        isPayment,
      },
    };
  };
