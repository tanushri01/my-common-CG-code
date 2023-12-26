import {
  Dispatch,
  FormEvent,
  FormEventHandler,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import {
  Stripe,
  StripeCardElement,
  StripeElements,
  loadStripe,
} from '@stripe/stripe-js';
import { Theme, useTheme } from '@mui/material';
import { LocalStorageEnum, PaymentEnum, SnackbarTypeEnum } from '@/enum';
import {
  CITY,
  CURRENT_FORM_DATA,
  FORM_ID,
  FULL_NAME,
  IS_PAYMENT,
  PaymentThunk,
  SELECTED_PLAN,
  STATE,
  STREET,
  ZIP_CODE,
  form1Actions,
  paymentActions,
  useAppDispatch,
  useAppSelector,
} from '@/redux';
import { StorageHelper } from '@/helper';
import { useAppSnackbar } from '@/hooks';
import {
  IMultistepFormResponse,
  IPaymentIntentRequest,
  ITransactionRequest,
} from '@/interface';

interface IPaymentControllerResponse {
  getters: {
    stripe: Stripe | null;
    elements: StripeElements | null;
    stripePromise: Promise<Stripe | null> | undefined;
    theme: Theme;
    errorMessage: string;
    payment: {
      status: string;
    };
    disable: boolean;
    cardCompleted: boolean;
    selectedPlan: string;
    isPayment: boolean;
  };
  handlers: {
    handleSubmit: FormEventHandler<HTMLFormElement>;
    paymentStatus: (status: string) => string;
    setPayment: Dispatch<
      SetStateAction<{
        status: string;
      }>
    >;
    setErrorMessage: Dispatch<SetStateAction<string>>;
    setCardCompleStatus: Dispatch<SetStateAction<boolean>>;
  };
}

/**
 * @controller {usePaymentController}
 * @return {IPaymentControllerResponse}
 */
export const usePaymentController = (): IPaymentControllerResponse => {
  // Stripe Hooks
  const stripe = useStripe();
  const elements = useElements();

  // React Hooks
  const theme = useTheme();

  // Custom Hooks
  const { enqueueSnackbar } = useAppSnackbar();

  // Redux States
  const dispatch = useAppDispatch();
  const selectedPlan = useAppSelector(SELECTED_PLAN);
  const name = useAppSelector(FULL_NAME);
  const city = useAppSelector(CITY);
  const street = useAppSelector(STREET);
  const state = useAppSelector(STATE);
  const zipCode = useAppSelector(ZIP_CODE);
  const currentFormData = useAppSelector(CURRENT_FORM_DATA);
  const formIdRedux = useAppSelector(FORM_ID);
  const isPayment = useAppSelector(IS_PAYMENT);
  let country: string;
  let formId = formIdRedux;

  if (typeof window !== 'undefined') {
    country = StorageHelper.getLocalStorage(LocalStorageEnum.COUNTRY);
  }

  if (typeof window !== 'undefined') {
    formId = StorageHelper.getLocalStorage(LocalStorageEnum.FORM_ID);
  }

  useEffect(() => {
    const forms = currentFormData.filter(
      (currentForms: IMultistepFormResponse) =>
        currentForms.formId === formIdRedux || formId,
    );

    if (!forms) return;

    dispatch(form1Actions.setFormData(forms));
  }, [currentFormData, dispatch, formId, formIdRedux]);

  // React States
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [payment, setPayment] = useState({
    status: PaymentEnum.INITIAL as string,
  });
  const [cardCompleted, setCardCompleStatus] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(false);
  let userId: string;
  let customerId: string;

  if (typeof window !== 'undefined') {
    userId = StorageHelper.getLocalStorage(LocalStorageEnum.USER_ID);
    customerId = StorageHelper.getLocalStorage(LocalStorageEnum.CUSTOMER_ID);
  }

  let stripePromise;

  if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }

  /**
   * For set status of payment process
   * @function paymentStatus
   * @param {string} status
   * @return {string}
   */
  const paymentStatus = (status: string): string => {
    switch (status) {
      case PaymentEnum.PROCESSING:
      case PaymentEnum.REQUIRED_PAYMENT_METHOD:
      case PaymentEnum.REQUIRED_CONFIRMATION:
        return 'Payment is in under process';
      case PaymentEnum.REQUIRED_ACTION:
        return 'Authenticating payment';
      case PaymentEnum.SUCCEEDED:
        return 'Payment successfull';
      case PaymentEnum.ERROR:
        return `${errorMessage}`;
      default:
        return '';
    }
  };

  /**
   * API for store transaction history
   * @return {Promise<void>}
   */
  const storeData = useCallback(
    async (data: ITransactionRequest): Promise<void> => {
      try {
        await dispatch(PaymentThunk.storeTransactionHistory(data)).unwrap();
        dispatch(paymentActions.setIsPayment(true));
      } catch (error) {
        enqueueSnackbar('Error', SnackbarTypeEnum.ERROR);
      }
    },
    [dispatch, enqueueSnackbar],
  );

  /**
   * Submit the data and make payment
   * @param {FormEvent<HTMLFormElement>}event
   * @return {FormEventHandler<HTMLFormElement>}
   */
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setDisable(true);
    let cardElement: StripeCardElement | null = null;
    if (event.currentTarget.reportValidity()) {
      setPayment({ status: PaymentEnum.PROCESSING });
      if (elements) {
        cardElement = elements.getElement(CardElement);
      }
    }

    if (stripe && cardElement) {
      const finalAmount = selectedPlan.replace('$', '');
      const payAmount = parseFloat(finalAmount) * 100;
      const amountInCent = Math.round(Number(payAmount));

      const payload: IPaymentIntentRequest = {
        paymentMethodType: ['card'],
        amount: amountInCent,
        currency: PaymentEnum.USD,
      };
      const response = await dispatch(
        PaymentThunk.getPaymentIntent(payload),
      ).unwrap();

      if (!response.body.clientSecret) {
        setPayment({ status: PaymentEnum.ERROR });
        setErrorMessage('Somthing went wrong');
        setDisable(false);
        setTimeout(() => {
          setErrorMessage('');
        }, 8000);
        return;
      }

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        response.body.clientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name,
              address: {
                line1: street,
                city,
                state,
                postal_code: zipCode,
                country,
              },
            },
          },
        },
      );

      if (error) {
        setPayment({ status: PaymentEnum.ERROR });
        setErrorMessage(error.message ?? 'Error in fetching data');
        enqueueSnackbar(error.message as string, SnackbarTypeEnum.ERROR);
        setDisable(false);
        setTimeout(() => {
          setErrorMessage('');
        }, 8000);
      } else if (paymentIntent) {
        setPayment(paymentIntent);
        enqueueSnackbar('Payment Successfull!', SnackbarTypeEnum.SUCCESS);
        const data: ITransactionRequest = {
          userId,
          transactionId: paymentIntent.id,
          amount: paymentIntent.amount.toString(),
          status: paymentIntent.status,
          customerId,
          formId,
        };

        storeData(data);
      }
    }
  };

  return {
    getters: {
      stripe,
      elements,
      stripePromise,
      theme,
      errorMessage,
      payment,
      disable,
      cardCompleted,
      selectedPlan,
      isPayment,
    },
    handlers: {
      handleSubmit,
      paymentStatus,
      setPayment,
      setErrorMessage,
      setCardCompleStatus,
    },
  };
};
