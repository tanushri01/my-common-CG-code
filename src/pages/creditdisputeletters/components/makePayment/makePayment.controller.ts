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
      planType: 'Starter',
      packageDes: [
        'Credit report analysis',
        'Dispute letter templates',
        'Email support',
      ],
      monthly: true,
    },
    {
      planCost: '$49',
      planType: 'Advanced',
      packageDes: [
        'Credit report analysis',
        'Software generated dispute letters',
        'Making basis to possibly sue',
        'Software generated draft complaint',
      ],
      monthly: true,
    },
    {
      planCost: '$99',
      planType: 'Ultimate',
      packageDes: [
        'Personal case manager',
        'Review of disputes',
        'Audit all 3 credit bureaus',
        'Custom dispute letters',
        'Provide templates to file lawsuit',
      ],
      monthly: true,
    },
    {
      planCost: '$149',
      planType: 'Ultimate Plus',
      packageDes: [
        'Review of documents',
        'Help draft lawsuit and letters',
        'Instructions on how to file lawsuit',
        'Help negotiate settlements',
        'Guide throughout process',
      ],
      monthly: true,
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
