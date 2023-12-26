import React, {
  ForwardedRef,
  forwardRef,
  memo,
  useImperativeHandle,
  useRef,
} from 'react';

import { CaseNameEnum } from '@/enum';
import { IStepRef, ISubStepRef } from '@/interface';

import FifthStep from './fifthStep';
import SixthStep from './sixthStep';
import SeventhStep from './seventhStep';
import EighthStep from './eighthStep';
import NinthStep from './ninthStep';
import TenthStep from './tenthStep';
import EleventhStep from './eleventhStep';
import TwelthStep from './twelthStep';
import ThirteenStep from './thirteenStep';
import { useOtherQuestionsController } from './otherQuestions.controller';

/**
 * @page {OtherQuestions} - Other Questions step for the form
 * @param {Record<string, never>} _props
 * @param {ForwardedRef<IStepRef>} ref
 * @return {JSX.Element}
 */
const OtherQuestions = (
  _props: Record<string, never>,
  ref: ForwardedRef<IStepRef>,
): JSX.Element => {
  const { getters } = useOtherQuestionsController();
  const { subActiveStep } = getters;

  const fifthStepRef = useRef<ISubStepRef>(null);
  const sixthStepRef = useRef<ISubStepRef>(null);
  const seventhStepRef = useRef<ISubStepRef>(null);
  const tenthStepRef = useRef<ISubStepRef>(null);
  const eleventhStepRef = useRef<ISubStepRef>(null);
  const twelthStepRef = useRef<ISubStepRef>(null);
  const thirteenthStepRef = useRef<ISubStepRef>(null);

  useImperativeHandle(ref, () => ({
    validate: () => {
      const fifthStepValidate = fifthStepRef.current?.validate();
      const sixthStepValidate = sixthStepRef.current?.validate();
      const seventhStepValidate = seventhStepRef.current?.validate();
      const tenthStepValidate = tenthStepRef.current?.validate();
      const eleventhStepValidate = eleventhStepRef.current?.validate();
      const twelthStepValidate = twelthStepRef.current?.validate();
      const thirteenthValidate = thirteenthStepRef.current?.validate();

      switch (subActiveStep) {
        case CaseNameEnum.ONE: {
          if (sixthStepValidate) {
            return {
              isValid: true,
              isFinal: false,
              formsData: sixthStepRef.current?.formsData,
            };
          }
          break;
        }
        case CaseNameEnum.TWO: {
          if (seventhStepValidate) {
            return {
              isValid: true,
              isFinal: false,
              formsData: seventhStepRef.current?.formsData,
            };
          }
          break;
        }
        case CaseNameEnum.THREE: {
          return {
            isValid: true,
            isFinal: false,
          };
          break;
        }
        case CaseNameEnum.FOUR: {
          return {
            isValid: true,
            isFinal: false,
          };
          break;
        }
        case CaseNameEnum.FIVE: {
          if (tenthStepValidate) {
            return {
              isValid: true,
              isFinal: false,
              formsData: tenthStepRef.current?.formsData,
            };
          }
          break;
        }
        case CaseNameEnum.SIX: {
          if (eleventhStepValidate) {
            return {
              isValid: true,
              isFinal: false,
              formsData: eleventhStepRef.current?.formsData,
            };
          }
          break;
        }
        case CaseNameEnum.SEVEN: {
          if (twelthStepValidate) {
            return {
              isValid: true,
              isFinal: false,
              formsData: twelthStepRef.current?.formsData,
            };
          }
          break;
        }
        case CaseNameEnum.EIGHT: {
          if (thirteenthValidate) {
            return {
              isValid: true,
              isFinal: true,
              formsData: thirteenthStepRef.current?.formsData,
            };
          }
          break;
        }
        case CaseNameEnum.ZERO:
        default: {
          if (fifthStepValidate) {
            return {
              isValid: true,
              isFinal: false,
              formsData: fifthStepRef.current?.formsData,
            };
          }
        }
      }

      return {
        isValid: false,
        isFinal: false,
      };
    },
  }));

  switch (subActiveStep) {
    case CaseNameEnum.ONE: {
      return <SixthStep ref={sixthStepRef} />;
    }
    case CaseNameEnum.TWO: {
      return <SeventhStep ref={seventhStepRef} />;
    }
    case CaseNameEnum.THREE: {
      return <EighthStep />;
    }
    case CaseNameEnum.FOUR: {
      return <NinthStep />;
    }
    case CaseNameEnum.FIVE: {
      return <TenthStep ref={tenthStepRef} />;
    }
    case CaseNameEnum.SIX: {
      return <EleventhStep ref={eleventhStepRef} />;
    }
    case CaseNameEnum.SEVEN: {
      return <TwelthStep ref={twelthStepRef} />;
    }
    case CaseNameEnum.EIGHT: {
      return <ThirteenStep ref={thirteenthStepRef} />;
    }
    case CaseNameEnum.ZERO:
    default: {
      return <FifthStep ref={fifthStepRef} />;
    }
  }
};

export default memo(forwardRef<IStepRef>(OtherQuestions));
