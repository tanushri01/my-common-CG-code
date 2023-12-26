import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { IChooseYouPacakge } from '@/json';
import {
  SELECTED_PLAN,
  SUB_ACTIVE_STEP,
  form1Actions,
  useAppDispatch,
  useAppSelector,
} from '@/redux';
import { StorageHelper } from '@/helper';
import { LocalStorageEnum, StepTypeEnum } from '@/enum';

interface IMakePaymentControllerResponse {
  getters: {
    chooseYourPackage: IChooseYouPacakge[];
    subActiveStep: number;
    selectedPlan: string;
    error: boolean;
  };
  handlers: {
    handleSelectPlan: (plan: string) => void;
    setError: Dispatch<SetStateAction<boolean>>;
  };
}

/**
 * @controller {useMakePaymentController}
 * @return {IMakePaymentControllerResponse}
 */
export const useMakePaymentController = (): IMakePaymentControllerResponse => {
  // Redux States
  const dispatch = useAppDispatch();
  const subActiveStep = useAppSelector(SUB_ACTIVE_STEP);
  const selectedPlan = useAppSelector(SELECTED_PLAN);

  // React State
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const subActiveStepString = StorageHelper.getLocalStorage(
        LocalStorageEnum.SUB_ACTIVE_STEP,
      );
      if (subActiveStepString && subActiveStepString !== 'undefined') {
        dispatch(form1Actions.setSubActiveStep(Number(subActiveStepString)));
      } else {
        StorageHelper.setLocalStorage(
          LocalStorageEnum.SUB_ACTIVE_STEP,
          StepTypeEnum.ZERO.toString(),
        );
      }
    }
  }, [dispatch]);

  const handleSelectPlan = (plan: string) => {
    dispatch(form1Actions.setSelectedPlan(plan));
    setError(false);
  };

  const chooseYourPackage: IChooseYouPacakge[] = [
    {
      planCost: '$29',
      planType: 'Standard',
      packageDes: ['Download includes FCRA violations that can be used'],
      monthly: false,
    },
  ];

  return {
    getters: {
      chooseYourPackage,
      subActiveStep,
      selectedPlan,
      error,
    },
    handlers: {
      handleSelectPlan,
      setError,
    },
  };
};
