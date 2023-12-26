import React, {
  ForwardedRef,
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

import { CaseNameEnum } from '@/enum';

import { useMakePaymentController } from './makePayment.controller';
import MakePayment from './makePayment';
import PaymentWrapper from './paymentWrapper';
import { IStepRef, ISubStepRef } from '@/interface';

/**
 * @page {ProvideYourInformation} - Provide Your Information step for the form
 * @param {Record<string, never>} _props
 * @param {ForwardedRef<IStepRef>} ref
 * @return {JSX.Element}
 */
const ProvideYourInformation = (
  _props: Record<string, never>,
  ref: ForwardedRef<IStepRef>,
) => {
  const { getters } = useMakePaymentController();
  const { subActiveStep } = getters;
  const choosePackageStepRef = useRef<ISubStepRef>(null);
  const paymentStepRef = useRef<ISubStepRef>(null);

  const validate = useCallback(() => {
    const choosePackageValidate = choosePackageStepRef.current?.validate();
    const paymentValidate = paymentStepRef.current?.validate();

    switch (subActiveStep) {
      case CaseNameEnum.ONE: {
        if (paymentValidate) {
          return {
            isValid: true,
            isFinal: true,
            formsData: paymentStepRef.current?.formsData,
          };
        }
        break;
      }
      case CaseNameEnum.ZERO:
      default: {
        if (choosePackageValidate) {
          return {
            isValid: true,
            isFinal: false,
            formsData: choosePackageStepRef.current?.formsData,
          };
        }
      }
    }

    return {
      isValid: false,
      isFinal: false,
    };
  }, [subActiveStep]);

  useImperativeHandle(
    ref,
    () => ({
      validate,
    }),
    [validate],
  );

  const subActiveComponent = useCallback(() => {
    switch (subActiveStep) {
      case CaseNameEnum.ONE: {
        return <PaymentWrapper ref={paymentStepRef} />;
      }
      case CaseNameEnum.ZERO:
      default: {
        return <MakePayment ref={choosePackageStepRef} />;
      }
    }
  }, [subActiveStep]);

  useEffect(() => {
    subActiveComponent();
  }, [subActiveComponent]);

  return subActiveComponent();
};

export default memo(forwardRef<IStepRef>(ProvideYourInformation));
