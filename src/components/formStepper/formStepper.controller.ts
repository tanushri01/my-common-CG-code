import { ReactNode, useEffect } from 'react';

import { StorageHelper } from '@/helper';
import { CaseNameEnum, LocalStorageEnum, StepTypeEnum } from '@/enum';
import {
  ACTIVE_STEP,
  IS_PAYMENT,
  SUB_ACTIVE_STEP,
  form1Actions,
  useAppDispatch,
  useAppSelector,
} from '@/redux';

export interface ISteps {
  parent: string;
  subSteps: {
    step: ReactNode;
  }[];
}

interface IFormStepperControllerResponse {
  getters: {
    steps: ISteps[];
    activeStep: number;
    subActiveStep: number;
    isPayment: boolean;
  };
  handlers: {
    activeComponent: () => ReactNode;
    handlePrev: () => void;
    handleSubStepPrev: () => void;
  };
}

interface IProps
  extends Readonly<{
    firstStep: ReactNode;
    secondStep: ReactNode;
    generateResponse: ReactNode;
    makePayment: ReactNode;
    sendLetter: ReactNode;
  }> {}

/**
 * @controller {useFormStepperController}
 * @param {IProps} props
 * @return {IFormStepperControllerResponse}
 */
export const useFormStepperController = (
  props: IProps,
): IFormStepperControllerResponse => {
  const { firstStep, secondStep, generateResponse, makePayment, sendLetter } =
    props;

  // Redux States
  const dispatch = useAppDispatch();
  const activeStep = useAppSelector(ACTIVE_STEP);
  const subActiveStep = useAppSelector(SUB_ACTIVE_STEP);
  const isPayment = useAppSelector(IS_PAYMENT);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const activeStepString = StorageHelper.getLocalStorage(
        LocalStorageEnum.ACTIVE_STEP,
      );
      dispatch(form1Actions.setActiveStep(Number(activeStepString)));
      const subActiveStepString = StorageHelper.getLocalStorage(
        LocalStorageEnum.SUB_ACTIVE_STEP,
      );
      dispatch(form1Actions.setSubActiveStep(Number(subActiveStepString)));
    }
  }, [dispatch]);

  // Steps declartions
  const steps: ISteps[] = [
    {
      parent: 'Provide your information',
      subSteps: [{ step: firstStep }],
    },
    {
      parent: 'Other Questions',
      subSteps: [{ step: secondStep }],
    },
    {
      parent: 'Generate Response',
      subSteps: [{ step: generateResponse }],
    },
    {
      parent: 'Make Payment',
      subSteps: [{ step: makePayment }],
    },
    {
      parent: 'Send Letter',
      subSteps: [{ step: sendLetter }],
    },
  ];

  /**
   * For showing active step
   * @function activeComponent
   * @return {ReactNode}
   */
  const activeComponent = (): ReactNode => {
    switch (activeStep) {
      case CaseNameEnum.ZERO: {
        return firstStep;
      }
      case CaseNameEnum.ONE: {
        return secondStep;
      }
      case CaseNameEnum.TWO: {
        return generateResponse;
      }
      case CaseNameEnum.THREE: {
        return makePayment;
      }
      case CaseNameEnum.FOUR: {
        return sendLetter;
      }
      default: {
        return firstStep;
      }
    }
  };

  /**
   * @function handleSubStepNext
   */
  const handleSubStepPrev = (): void => {
    const subActiveStepFinal = subActiveStep - 1;

    StorageHelper.setLocalStorage(
      LocalStorageEnum.SUB_ACTIVE_STEP,
      subActiveStepFinal.toString(),
    );
    dispatch(form1Actions.setSubActiveStep(subActiveStepFinal));
  };

  /**
   * @function handleNext
   */
  const handlePrev = (): void => {
    const activeStepFinal = activeStep - 1;

    StorageHelper.setLocalStorage(
      LocalStorageEnum.ACTIVE_STEP,
      activeStepFinal.toString(),
    );
    dispatch(form1Actions.setActiveStep(activeStepFinal));

    switch (activeStep) {
      case 1: {
        StorageHelper.setLocalStorage(
          LocalStorageEnum.SUB_ACTIVE_STEP,
          StepTypeEnum.THREE.toString(),
        );
        dispatch(form1Actions.setSubActiveStep(3));
        break;
      }
      case 2: {
        StorageHelper.setLocalStorage(
          LocalStorageEnum.SUB_ACTIVE_STEP,
          StepTypeEnum.SEVEN.toString(),
        );
        dispatch(form1Actions.setSubActiveStep(7));
        StorageHelper.setLocalStorage(
          LocalStorageEnum.ACTIVE_STEP,
          StepTypeEnum.ONE.toString(),
        );
        dispatch(form1Actions.setActiveStep(1));
        break;
      }
      case 3: {
        StorageHelper.setLocalStorage(
          LocalStorageEnum.SUB_ACTIVE_STEP,
          StepTypeEnum.ZERO.toString(),
        );
        dispatch(form1Actions.setSubActiveStep(0));
        StorageHelper.setLocalStorage(
          LocalStorageEnum.ACTIVE_STEP,
          StepTypeEnum.TWO.toString(),
        );
        dispatch(form1Actions.setActiveStep(2));
        break;
      }
      case 4: {
        StorageHelper.setLocalStorage(
          LocalStorageEnum.SUB_ACTIVE_STEP,
          StepTypeEnum.ZERO.toString(),
        );
        dispatch(form1Actions.setSubActiveStep(0));
        StorageHelper.setLocalStorage(
          LocalStorageEnum.ACTIVE_STEP,
          StepTypeEnum.THREE.toString(),
        );
        dispatch(form1Actions.setActiveStep(3));
        break;
      }
      default: {
        handleSubStepPrev();
      }
    }
  };

  return {
    getters: {
      steps,
      activeStep,
      subActiveStep,
      isPayment,
    },
    handlers: {
      activeComponent,
      handlePrev,
      handleSubStepPrev,
    },
  };
};
