import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { RoutePathEnum } from '@/enum';
import { IProductMenu } from '@/json';
import {
  FIRST_FORM_LIMIT,
  FORMS_LIMIT,
  FOURTH_FORM_LIMIT,
  FormsThunk,
  SECOND_FORM_LIMIT,
  THIRD_FORM_LIMIT,
  formsActions,
  useAppDispatch,
  useAppSelector,
} from '@/redux';
import {
  FOURTH_FORM_NAME,
  SECOND_FORM_NAME,
  THIRD_FORM_NAME,
} from '@/constant';

interface IProductMenuDropDownControllerResponse {
  getters: {
    isSameUrl: boolean;
    firstFormLimit: boolean;
    secondFormLimit: boolean;
    thirdFormLimit: boolean;
    fourthFormLimit: boolean;
  };
}

interface IProps
  extends Readonly<{
    menu: IProductMenu[];
    handleClose: () => void;
  }> {}

/**
 * @controller {useProductDropdownController}
 * @param {IProps} props
 * @return {IProductMenuDropDownControllerResponse}
 */
export const useProductDropdownController = (
  props: IProps,
): IProductMenuDropDownControllerResponse => {
  // Props
  const { menu } = props;

  // React States
  const firstFormLimit = useAppSelector(FIRST_FORM_LIMIT);
  const secondFormLimit = useAppSelector(SECOND_FORM_LIMIT);
  const thirdFormLimit = useAppSelector(THIRD_FORM_LIMIT);
  const fourthFormLimit = useAppSelector(FOURTH_FORM_LIMIT);

  // React Router
  const { query } = useRouter();
  const { id } = query;
  const router = useRouter();
  const currentUrl = router.pathname;
  const destinationUrl = RoutePathEnum.PRODUCT;

  // Redux State
  const dispatch = useAppDispatch();
  const formsLimit = useAppSelector(FORMS_LIMIT);

  // Local Variables
  const productId = menu.find((data: IProductMenu) => data.productId === id);
  const isSameUrl = currentUrl === destinationUrl && productId === id;

  const fetchFormsLimit = useCallback(() => {
    if (formsLimit?.response?.length > 0) {
      formsLimit?.response.map((form): string => {
        switch (form.formName) {
          case SECOND_FORM_NAME: {
            dispatch(formsActions.setSecondFormLimit(true));
            return form.formName;
          }
          case THIRD_FORM_NAME: {
            dispatch(formsActions.setThirdFormLimit(true));
            return form.formName;
          }
          case FOURTH_FORM_NAME: {
            dispatch(formsActions.setFourthFormLimit(true));
            return form.formName;
          }
          default: {
            dispatch(formsActions.setfirstFormLimit(true));
            return form.formName;
          }
        }
      });
    }
  }, [dispatch, formsLimit?.response]);

  useEffect(() => {
    dispatch(FormsThunk.fetchUsCourtForm());
    dispatch(FormsThunk.fetchMaxLimitForms());
    if (formsLimit) {
      fetchFormsLimit();
    }
  }, [dispatch, fetchFormsLimit, formsLimit]);

  return {
    getters: {
      isSameUrl,
      firstFormLimit,
      secondFormLimit,
      thirdFormLimit,
      fourthFormLimit,
    },
  };
};
