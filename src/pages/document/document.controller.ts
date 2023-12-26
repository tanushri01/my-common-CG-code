import { useEffect } from 'react';

import {
  FIRST_FORM_NAME,
  FOURTH_FORM_NAME,
  SECOND_FORM_NAME,
  THIRD_FORM_NAME,
} from '@/constant';
import { RoutePathEnum } from '@/enum';
import {
  FIRST_FORM_LIMIT,
  FORMS_DATA,
  FORMS_LIMIT,
  FOURTH_FORM_LIMIT,
  FormsThunk,
  IS_LOADING,
  SECOND_FORM_LIMIT,
  THIRD_FORM_LIMIT,
  US_COURT_FORM_DATA,
  form1Actions,
  formsActions,
  useAppDispatch,
  useAppSelector,
} from '@/redux';
import {
  IGetUserFormsLimitResponse,
  IMultistepFormResponse,
} from '@/interface';

interface IDocumentControllerResponse {
  getters: {
    forms: IMultistepFormResponse[];
    isLoading: boolean;
    usCourtForm: IMultistepFormResponse[];
    formsLimit: IGetUserFormsLimitResponse;
    firstFormLimit: boolean;
    secondFormLimit: boolean;
    thirdFormLimit: boolean;
    fourthFormLimit: boolean;
  };
  handlers: {
    fetchCurrentForm: (
      formName: string,
    ) =>
      | RoutePathEnum.CREDIT_DISPUTE_LETTER
      | RoutePathEnum.INQUIRY_REMOVAL_LETTER
      | RoutePathEnum.BANKRUPTCY_REMOVAL_LETTER
      | RoutePathEnum.US_COURT_COMPLAINT;
  };
}

/**
 * @controller {useDocumentController}
 * @return {IDocumentControllerResponse}
 */
export const useDocumentController = (): IDocumentControllerResponse => {
  // Redux states
  const dispatch = useAppDispatch();
  const forms = useAppSelector(FORMS_DATA);
  const isLoading = useAppSelector(IS_LOADING);
  const usCourtForm = useAppSelector(US_COURT_FORM_DATA);
  const formsLimit = useAppSelector(FORMS_LIMIT);
  const firstFormLimit = useAppSelector(FIRST_FORM_LIMIT);
  const secondFormLimit = useAppSelector(SECOND_FORM_LIMIT);
  const thirdFormLimit = useAppSelector(THIRD_FORM_LIMIT);
  const fourthFormLimit = useAppSelector(FOURTH_FORM_LIMIT);

  const fetchCurrentForm = (formName: string) => {
    let formRoute = RoutePathEnum.CREDIT_DISPUTE_LETTER;
    switch (formName) {
      case FIRST_FORM_NAME: {
        formRoute = RoutePathEnum.CREDIT_DISPUTE_LETTER;
        return formRoute;
      }
      case SECOND_FORM_NAME: {
        formRoute = RoutePathEnum.INQUIRY_REMOVAL_LETTER;
        return formRoute;
      }
      case THIRD_FORM_NAME: {
        formRoute = RoutePathEnum.BANKRUPTCY_REMOVAL_LETTER;
        return formRoute;
      }
      case FOURTH_FORM_NAME: {
        formRoute = RoutePathEnum.US_COURT_COMPLAINT;
        return formRoute;
      }
      default:
        return formRoute;
    }
  };

  // const fetchFormsLimit = useCallback(() => {
  //   if (formsLimit?.response?.length > 0) {
  //     formsLimit?.response.map((form): string => {
  //       switch (form.formName) {
  //         case SECOND_FORM_NAME: {
  //           setSecondFormLimit(true);
  //           return form.formName;
  //         }
  //         case THIRD_FORM_NAME: {
  //           setThirdFormLimit(true);
  //           return form.formName;
  //         }
  //         case FOURTH_FORM_NAME: {
  //           setFourthFormLimit(true);
  //           return form.formName;
  //         }
  //         default: {
  //           setfirstFormLimit(true);
  //           return form.formName;
  //         }
  //       }
  //     });
  //   }
  // }, [formsLimit]);

  useEffect(() => {
    dispatch(FormsThunk.fetchInProgressForms());
    dispatch(FormsThunk.fetchMaxLimitForms());
    dispatch(formsActions.setIsLoading(false));
    dispatch(form1Actions.setFormData([]));
    dispatch(formsActions.setCurrentFormData([]));
    // if (formsLimit) {
    //   fetchFormsLimit();
    // }
  }, [dispatch]);

  return {
    getters: {
      forms,
      isLoading,
      usCourtForm,
      formsLimit,
      firstFormLimit,
      secondFormLimit,
      thirdFormLimit,
      fourthFormLimit,
    },
    handlers: { fetchCurrentForm },
  };
};
