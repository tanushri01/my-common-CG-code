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
      planCost: '$49',
      planType: 'Starter',
      packageDes: [
        'Dispute letter templates',
        'Guide to disputing bankruptcy reporting errors',
        'Access to online knowledge base',
        'Email support',
      ],
      monthly: true,
    },
    {
      planCost: '$79',
      planType: 'Advanced',
      packageDes: [
        'Dispute letter generation tool',
        'Personalized action plan',
        'Review of credit reports & bankruptcy docs',
        'Email support',
      ],
      monthly: true,
    },
    {
      planCost: '$129',
      planType: 'Ultimate',
      packageDes: [
        '1 on 1 expert drafting all disputes',
        'Review of documents',
        'Legal consult if needed',
        'Help draft lawsuit',
        'Help recover damages & deletions from reports',
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
