import { createRef, RefObject, useCallback, useEffect } from 'react';
import { isEqual } from 'lodash';
import { useRouter } from 'next/router';

import {
  form1Actions,
  formsActions,
  FormsThunk,
  useAppDispatch,
  useAppSelector,
  CURRENT_FORM_DATA,
  ACTIVE_STEP,
  FORM_ID,
  SUB_ACTIVE_STEP,
} from '@/redux';
import {
  IAddMultistepFormRequest,
  IMultistepFormResponse,
  IStepRef,
  ISubStepRef,
} from '@/interface';
import { useAppSnackbar } from '@/hooks';
import {
  CaseNameEnum,
  LocalStorageEnum,
  SnackbarTypeEnum,
  StepTypeEnum,
} from '@/enum';
import { StorageHelper } from '@/helper';
import { FORM_LIMIT } from '@/constant';

interface IBankruptcyRemovalControllerResponse {
  getters: {
    currentFormData: IMultistepFormResponse[];
    formId: string;
  };
  refs: {
    step1Ref: RefObject<IStepRef>;
    step2Ref: RefObject<IStepRef>;
    step3Ref: RefObject<IStepRef>;
    step4Ref: RefObject<IStepRef>;
    step5Ref: RefObject<ISubStepRef>;
  };
  handlers: {
    continueStep: () => void;
    handleNext: () => void;
    handleSubStepNext: (formsData: IAddMultistepFormRequest) => void;
  };
}

/**
 * @controller {useProfileController}
 * @return {IBankruptcyRemovalControllerResponse}
 */
export const useBankruptcyRemovalController =
  (): IBankruptcyRemovalControllerResponse => {
    // React Refs
    const step1Ref = createRef<IStepRef>();
    const step2Ref = createRef<IStepRef>();
    const step3Ref = createRef<IStepRef>();
    const step4Ref = createRef<IStepRef>();
    const step5Ref = createRef<ISubStepRef>();

    // Redux State
    const dispatch = useAppDispatch();
    const currentFormData = useAppSelector(CURRENT_FORM_DATA);
    const activeStepRedux: number = useAppSelector(ACTIVE_STEP);
    const subActiveStepRedux: number = useAppSelector(SUB_ACTIVE_STEP);
    const formIdRedux: string = useAppSelector(FORM_ID);

    // Custom Hooks
    const { enqueueSnackbar } = useAppSnackbar();
    const { query } = useRouter();
    const { formId, activeStep, subActiveStep } = query;

    useEffect(() => {
      if (activeStep) {
        StorageHelper.setLocalStorage(
          LocalStorageEnum.ACTIVE_STEP,
          activeStep as string,
        );
        dispatch(form1Actions.setActiveStep(Number(activeStep)));
      }
      if (subActiveStep) {
        StorageHelper.setLocalStorage(
          LocalStorageEnum.SUB_ACTIVE_STEP,
          subActiveStep as string,
        );
        dispatch(form1Actions.setSubActiveStep(Number(subActiveStep)));
      }
      if (formId) {
        StorageHelper.setLocalStorage(
          LocalStorageEnum.FORM_ID,
          formId as string,
        );
        dispatch(formsActions.setFormId(formId as string));
      }
    }, [activeStep, dispatch, formId, subActiveStep]);

    useEffect(
      () => () => {
        StorageHelper.setLocalStorage(LocalStorageEnum.FORM_ID, '');
        StorageHelper.setLocalStorage(LocalStorageEnum.ACTIVE_STEP, '0');
        StorageHelper.setLocalStorage(LocalStorageEnum.SUB_ACTIVE_STEP, '0');
        dispatch(form1Actions.reset());
        dispatch(formsActions.setCurrentFormData([]));
      },
      [dispatch],
    );

    useEffect(() => {
      if (typeof window !== 'undefined') {
        const formsId = StorageHelper.getLocalStorage(LocalStorageEnum.FORM_ID);
        dispatch(formsActions.setFormId(formsId));
      }
    }, [dispatch]);

    useEffect(() => {
      if (typeof window !== 'undefined') {
        const activeStepString = StorageHelper.getLocalStorage(
          LocalStorageEnum.ACTIVE_STEP,
        );

        if (activeStepString && activeStepString !== 'undefined') {
          dispatch(form1Actions.setActiveStep(Number(activeStepString)));
        }
      }
      if (typeof window !== 'undefined') {
        const subActiveStepString = StorageHelper.getLocalStorage(
          LocalStorageEnum.SUB_ACTIVE_STEP,
        );

        if (subActiveStepString && subActiveStepString !== 'undefined') {
          dispatch(form1Actions.setSubActiveStep(Number(subActiveStepString)));
        }
      }
    }, [activeStepRedux, dispatch, subActiveStepRedux]);

    useEffect(() => {
      const payload = {
        formId: formIdRedux as string,
      };
      if (formIdRedux !== '') {
        dispatch(FormsThunk.fetchForm(payload));
      }
    }, [dispatch, formIdRedux]);

    /**
     * For handling next step change
     * @function handleNext
     * @param {IAddMultistepFormRequest} formData
     * @return {Promise<void>}
     */
    const handleNext = useCallback(
      async (formData?: IAddMultistepFormRequest): Promise<void> => {
        const payload = {
          formId: formIdRedux as string,
        };

        if (!formData) {
          const activeStepFinal = activeStepRedux + 1;
          StorageHelper.setLocalStorage(
            LocalStorageEnum.ACTIVE_STEP,
            activeStepFinal.toString(),
          );
          StorageHelper.setLocalStorage(
            LocalStorageEnum.SUB_ACTIVE_STEP,
            StepTypeEnum.ZERO.toString(),
          );
          dispatch(form1Actions.setActiveStep(Number(activeStepFinal)));
        }
        if (formData && formData?.formdata.length > 0) {
          try {
            const findData = formData.formdata.map((data) => data);
            const filteredArray = currentFormData.filter((obj2) =>
              findData.some(
                (obj1) =>
                  obj1.question === obj2.question &&
                  isEqual(obj1.answer, obj2.answer),
              ),
            );
            if (filteredArray.length === 0) {
              try {
                const response = await dispatch(FormsThunk.addForm(formData));
                if (!response.payload) {
                  throw new Error();
                }
              } catch (error: unknown) {
                enqueueSnackbar(FORM_LIMIT, SnackbarTypeEnum.ERROR);
                return;
              }
            }
            dispatch(FormsThunk.fetchForm(payload));
            const activeStepFinal = activeStepRedux + 1;
            StorageHelper.setLocalStorage(
              LocalStorageEnum.ACTIVE_STEP,
              activeStepFinal.toString(),
            );
            StorageHelper.setLocalStorage(
              LocalStorageEnum.SUB_ACTIVE_STEP,
              StepTypeEnum.ZERO.toString(),
            );
            dispatch(form1Actions.setActiveStep(Number(activeStepFinal)));
          } catch (error: unknown) {
            enqueueSnackbar('Error', SnackbarTypeEnum.ERROR);
          }
        }
      },
      [
        formIdRedux,
        activeStepRedux,
        dispatch,
        currentFormData,
        enqueueSnackbar,
      ],
    );

    /**
     * For handling next sub step change
     * @function handleSubStepNext
     * @param {IAddMultistepFormRequest} formData
     * @return {Promise<void>}
     */
    const handleSubStepNext = useCallback(
      async (formData?: IAddMultistepFormRequest): Promise<void> => {
        const payload = {
          formId: formIdRedux as string,
        };

        if (!formData) {
          const subActiveStepFinal = subActiveStepRedux + 1;

          StorageHelper.setLocalStorage(
            LocalStorageEnum.SUB_ACTIVE_STEP,
            subActiveStepFinal.toString(),
          );
          dispatch(form1Actions.setSubActiveStep(Number(subActiveStepFinal)));
        }

        if (formData && formData?.formdata.length > 0) {
          try {
            const findData = formData.formdata.map((data) => data);
            const filteredArray = currentFormData.filter((obj2) =>
              findData.some(
                (obj1) =>
                  obj1.question === obj2.question &&
                  isEqual(obj1.answer, obj2.answer),
              ),
            );
            if (filteredArray.length === 0) {
              try {
                const response = await dispatch(FormsThunk.addForm(formData));
                if (!response.payload) {
                  throw new Error();
                }
              } catch (error: unknown) {
                enqueueSnackbar(FORM_LIMIT, SnackbarTypeEnum.ERROR);
                return;
              }
            }
            dispatch(FormsThunk.fetchForm(payload));
            const subActiveStepFinal = subActiveStepRedux + 1;

            StorageHelper.setLocalStorage(
              LocalStorageEnum.SUB_ACTIVE_STEP,
              subActiveStepFinal.toString(),
            );
            dispatch(form1Actions.setSubActiveStep(subActiveStepFinal));
          } catch (error: unknown) {
            enqueueSnackbar('Error', SnackbarTypeEnum.ERROR);
          }
        }
      },
      [
        currentFormData,
        dispatch,
        enqueueSnackbar,
        formIdRedux,
        subActiveStepRedux,
      ],
    );

    /**
     * Change Step of Stepper Form
     * @function continueStep
     */
    const continueStep = (): void => {
      switch (activeStepRedux) {
        case CaseNameEnum.ZERO:
          {
            const validate = step1Ref.current?.validate();
            if (!validate?.isValid) return;
            if (validate?.isFinal) {
              handleNext(validate.formsData);
              return;
            }

            handleSubStepNext(validate.formsData);
          }
          break;
        case CaseNameEnum.ONE:
          {
            const validate = step2Ref.current?.validate();
            if (!validate?.isValid) return;
            if (validate?.isFinal) {
              handleNext(validate.formsData);
              return;
            }
            handleSubStepNext(validate.formsData);
          }
          break;
        case CaseNameEnum.TWO:
          {
            const validate = step3Ref.current?.validate();

            if (!validate?.isValid) return;
            if (validate?.isFinal) {
              handleNext(validate.formsData);
              return;
            }
            handleSubStepNext(validate.formsData);
          }
          break;
        case CaseNameEnum.THREE:
          {
            const validate = step4Ref.current?.validate();
            if (!validate?.isValid) return;
            if (validate?.isFinal) {
              handleNext(validate.formsData);
              return;
            }
            handleSubStepNext(validate.formsData);
          }
          break;
        case CaseNameEnum.FOUR:
          break;
        default:
      }
    };

    return {
      getters: {
        currentFormData,
        formId: formIdRedux as string,
      },
      refs: {
        step1Ref,
        step2Ref,
        step3Ref,
        step4Ref,
        step5Ref,
      },
      handlers: {
        continueStep,
        handleNext,
        handleSubStepNext,
      },
    };
  };
