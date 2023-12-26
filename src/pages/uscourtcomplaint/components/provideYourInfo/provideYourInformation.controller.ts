import {
  MutableRefObject,
  RefObject,
  createRef,
  useCallback,
  useEffect,
  useRef,
} from 'react';

import { ITextInputFieldData, ITextInputFieldRef } from '@/components';
import {
  CITY,
  CURRENT_FORM_DATA,
  DC_INFO,
  form1Actions,
  FORM_ID,
  FULL_NAME,
  PHONE,
  STATE,
  STREET,
  SUB_ACTIVE_STEP,
  useAppDispatch,
  useAppSelector,
  ZIP_CODE,
} from '@/redux';
import { StorageHelper } from '@/helper';
import { LocalStorageEnum, StepTypeEnum } from '@/enum';
import { IMultistepFormResponse } from '@/interface';

import { IFourthStep } from '../../interfaces';

interface IDebtType {
  dcName: RefObject<ITextInputFieldRef>;
  dcStreet: RefObject<ITextInputFieldRef>;
  dcCity: RefObject<ITextInputFieldRef>;
  dcState: RefObject<ITextInputFieldRef>;
  dcZipCode: RefObject<ITextInputFieldRef>;
}

interface IProvideYourInfoControllerResponse {
  getters: {
    fullName: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    phone: string;
    debtCollectorInfo: IFourthStep[];
    formId: string;
    subActiveStep: number;
    currentFormData: IMultistepFormResponse[];
  };
  handlers: {
    handlePhoneChange: (event: ITextInputFieldData) => void;
    handleFullNameChange: (event: ITextInputFieldData) => void;
    handleStreetChange: (event: ITextInputFieldData) => void;
    handleCityChange: (event: ITextInputFieldData) => void;
    handleStateChange: (event: ITextInputFieldData) => void;
    handleZipCodeChange: (event: ITextInputFieldData) => void;
    handleAddMore: () => void;
    handleChange: (
      index: number,
      field: keyof IFourthStep,
      value: string,
    ) => void;
    handleRemove: (index: number) => void;
  };
  refs: {
    fullNameRef: RefObject<ITextInputFieldRef>;
    streetRef: RefObject<ITextInputFieldRef>;
    cityRef: RefObject<ITextInputFieldRef>;
    stateRef: RefObject<ITextInputFieldRef>;
    zipCodeRef: RefObject<ITextInputFieldRef>;
    phoneRef: RefObject<ITextInputFieldRef>;
    dcInfoRef: MutableRefObject<IDebtType[]>;
  };
}

/**
 * @controller {useProvideYourInfoController}
 * @return {IProvideYourInfoControllerResponse}
 */
export const useProvideYourInfoController =
  (): IProvideYourInfoControllerResponse => {
    // Redux State
    const dispatch = useAppDispatch();
    const fullName = useAppSelector(FULL_NAME);
    const street = useAppSelector(STREET);
    const city = useAppSelector(CITY);
    const state = useAppSelector(STATE);
    const zipCode = useAppSelector(ZIP_CODE);
    const phone = useAppSelector(PHONE);
    const debtCollectorInfo = useAppSelector(DC_INFO);
    const formId = useAppSelector(FORM_ID);
    const subActiveStep = useAppSelector(SUB_ACTIVE_STEP);
    const currentFormData = useAppSelector(CURRENT_FORM_DATA);

    // React Refs
    const fullNameRef = useRef<ITextInputFieldRef>(null);
    const streetRef = useRef<ITextInputFieldRef>(null);
    const cityRef = useRef<ITextInputFieldRef>(null);
    const stateRef = useRef<ITextInputFieldRef>(null);
    const zipCodeRef = useRef<ITextInputFieldRef>(null);
    const phoneRef = useRef<ITextInputFieldRef>(null);
    const debtMap = debtCollectorInfo.map(() => ({
      dcName: createRef<ITextInputFieldRef>(),
      dcStreet: createRef<ITextInputFieldRef>(),
      dcCity: createRef<ITextInputFieldRef>(),
      dcState: createRef<ITextInputFieldRef>(),
      dcZipCode: createRef<ITextInputFieldRef>(),
    }));
    const dcInfoRef = useRef<IDebtType[]>(debtMap);

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

    /**
     * @function handlePhoneChange
     */
    const handlePhoneChange = useCallback(
      (event: ITextInputFieldData): void => {
        if (!event.event) return;
        dispatch(form1Actions.setPhone(event.event.target.value));
      },
      [dispatch],
    );

    /**
     * @function handleFullNameChange
     */
    const handleFullNameChange = useCallback(
      (event: ITextInputFieldData): void => {
        if (!event.event) return;
        dispatch(form1Actions.setFullName(event.event.target.value));
      },
      [dispatch],
    );

    /**
     * @function handleStreetChange
     */
    const handleStreetChange = useCallback(
      (event: ITextInputFieldData): void => {
        if (!event.event) return;
        dispatch(form1Actions.setStreet(event.event.target.value));
      },
      [dispatch],
    );

    /**
     * @function handleCityChange
     */
    const handleCityChange = useCallback(
      (event: ITextInputFieldData): void => {
        if (!event.event) return;
        dispatch(form1Actions.setCity(event.event.target.value));
      },
      [dispatch],
    );

    /**
     * @function handleStateChange
     */
    const handleStateChange = useCallback(
      (event: ITextInputFieldData): void => {
        if (!event.event) return;
        dispatch(form1Actions.setState(event.event.target.value));
      },
      [dispatch],
    );

    /**
     * @function handleZipCodeChange
     */
    const handleZipCodeChange = useCallback(
      (event: ITextInputFieldData): void => {
        if (!event.event) return;
        dispatch(form1Actions.setZipCode(event.event.target.value));
      },
      [dispatch],
    );

    /**
     * Handles the change of a field in the debt collector information.
     * @function handleChange
     * @param {number} index - The index of the debt collector.
     * @param {IFourthStep} field - The field to update.
     * @param {string} value - The new value for the field.
     */
    const handleChange = (
      index: number,
      field: keyof IFourthStep,
      value: string,
    ): void => {
      const updatedDebtCollectors = [...debtCollectorInfo];
      updatedDebtCollectors[index] = {
        ...updatedDebtCollectors[index],
        [field]: value,
      };
      dispatch(form1Actions.setDebtCollectorInfo(updatedDebtCollectors));
    };

    /**
     * @function handleAddMore
     */
    const handleAddMore = useCallback(() => {
      if (debtCollectorInfo.length < 6) {
        const newDebtCollector: IFourthStep = {
          dcName: '',
          dcState: '',
          dcCity: '',
          dcStreet: '',
          dcZipCode: '',
        };

        dispatch(
          form1Actions.setDebtCollectorInfo([
            ...debtCollectorInfo,
            newDebtCollector,
          ]),
        );

        dcInfoRef.current?.push({
          dcName: createRef<ITextInputFieldRef>(),
          dcStreet: createRef<ITextInputFieldRef>(),
          dcCity: createRef<ITextInputFieldRef>(),
          dcState: createRef<ITextInputFieldRef>(),
          dcZipCode: createRef<ITextInputFieldRef>(),
        });
      }
    }, [debtCollectorInfo, dispatch]);

    /**
     * Handles the removal of a debt collector.
     * @function handleRemove
     * @param {number} index - The index of the debt collector to remove.
     */
    const handleRemove = (index: number): void => {
      const updatedDebtCollectors = [...debtCollectorInfo];
      updatedDebtCollectors.splice(index, 1); // Remove the debt collector at the specified index
      dispatch(form1Actions.setDebtCollectorInfo(updatedDebtCollectors));
      dcInfoRef.current?.pop();
    };

    return {
      getters: {
        fullName,
        street,
        city,
        state,
        zipCode,
        phone,
        formId,
        subActiveStep,
        currentFormData,
        debtCollectorInfo,
      },
      handlers: {
        handlePhoneChange,
        handleFullNameChange,
        handleCityChange,
        handleStateChange,
        handleStreetChange,
        handleZipCodeChange,
        handleChange,
        handleAddMore,
        handleRemove,
      },
      refs: {
        fullNameRef,
        streetRef,
        cityRef,
        stateRef,
        zipCodeRef,
        phoneRef,
        dcInfoRef,
      },
    };
  };
