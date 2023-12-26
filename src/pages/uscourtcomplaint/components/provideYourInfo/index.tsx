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
import { IStepRef, ISubStepRef } from '@/interface';

import FirstStep from './firstStep';
import ThirdStep from './thirdStep';
import FourthStep from './fourthStep';
import SecondStep from './secondStep';
import { useProvideYourInfoController } from './provideYourInformation.controller';

/**
 * @page {ProvideYourInfo} - Provide Your Information step for the form
 * @param {Record<string, never>} _props
 * @param {ForwardedRef<IStepRef>} ref
 * @return {JSX.Element}
 */
const ProvideYourInfo = (
  _props: Record<string, never>,
  ref: ForwardedRef<IStepRef>,
) => {
  const { getters } = useProvideYourInfoController();
  const { subActiveStep } = getters;
  const secondStepRef = useRef<ISubStepRef>(null);
  const thirdStepRef = useRef<ISubStepRef>(null);
  const fourthStepRef = useRef<ISubStepRef>(null);

  const validate = useCallback(() => {
    const secondStepValidate = secondStepRef.current?.validate();
    const thirdStepValidate = thirdStepRef.current?.validate();
    const fourthStepValidate = fourthStepRef.current?.validate();

    switch (subActiveStep) {
      case CaseNameEnum.ONE: {
        if (secondStepValidate) {
          return {
            isValid: true,
            isFinal: false,
            formsData: secondStepRef.current?.formsData,
          };
        }
        break;
      }
      case CaseNameEnum.TWO: {
        if (thirdStepValidate) {
          return {
            isValid: true,
            isFinal: false,
            formsData: thirdStepRef.current?.formsData,
          };
        }
        break;
      }
      case CaseNameEnum.THREE: {
        if (fourthStepValidate) {
          return {
            isValid: true,
            isFinal: true,
            formsData: fourthStepRef.current?.formsData,
          };
        }
        break;
      }
      case CaseNameEnum.ZERO:
      default: {
        return {
          isValid: true,
          isFinal: false,
        };
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
        return <SecondStep ref={secondStepRef} />;
      }
      case CaseNameEnum.TWO: {
        return <ThirdStep ref={thirdStepRef} />;
      }
      case CaseNameEnum.THREE: {
        return <FourthStep ref={fourthStepRef} />;
      }
      case CaseNameEnum.ZERO:
      default: {
        return <FirstStep />;
      }
    }
  }, [subActiveStep]);

  useEffect(() => {
    subActiveComponent();
  }, [subActiveComponent]);

  return subActiveComponent();
};

export default memo(forwardRef<IStepRef>(ProvideYourInfo));
