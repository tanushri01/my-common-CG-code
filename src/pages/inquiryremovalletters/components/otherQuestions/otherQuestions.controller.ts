import { ChangeEvent, RefObject, useCallback, useEffect, useRef } from 'react';
import { SelectChangeEvent } from '@mui/material';

import { ITextInputFieldRef } from '@/components';
import {
  ELEVENTH_QUESTION,
  FIFTH_QUESTION,
  FORM_ID,
  SEVENTH_QUESTION,
  SIXTH_QUESTION,
  SUB_ACTIVE_STEP,
  TENTH_QUESTION,
  TWELTH_QUESTION,
  form1Actions,
  useAppDispatch,
  useAppSelector,
} from '@/redux';
import { StorageHelper } from '@/helper';
import { LocalStorageEnum } from '@/enum';

interface IOtherQuestionsControllerResponse {
  getters: {
    fifthQuestionValue: string;
    sixthQuestionValue: string;
    seventhQuestionValue: string;
    eleventhQuestionValue: string;
    twelthQuestionValue: string;
    tenthQuestionValue: string | string[];
    formId: string;
    subActiveStep: number;
  };
  handlers: {
    handleFifthQuestionChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleSixthQuestionChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleSeventhQuestionChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleTenthQuestionChange: (
      event: SelectChangeEvent<string | string[]>,
    ) => void;
    handleEleventhQuestionChange: (
      event: ChangeEvent<HTMLInputElement>,
    ) => void;
    handleTwelthQuestionChange: (event: ChangeEvent<HTMLInputElement>) => void;
  };
  refs: {
    companyRef: RefObject<ITextInputFieldRef>;
  };
}

/**
 * @controller {useOtherQuestionsController}
 * @param {IProps} props
 * @return {IOtherQuestionsControllerResponse}
 */
export const useOtherQuestionsController =
  (): IOtherQuestionsControllerResponse => {
    // Redux States
    const dispatch = useAppDispatch();
    const subActiveStep = useAppSelector(SUB_ACTIVE_STEP);
    const formId = useAppSelector(FORM_ID);
    const fifthQuestionValue = useAppSelector(FIFTH_QUESTION);
    const sixthQuestionValue = useAppSelector(SIXTH_QUESTION);
    const seventhQuestionValue = useAppSelector(SEVENTH_QUESTION);
    const tenthQuestionValue = useAppSelector(TENTH_QUESTION);
    const eleventhQuestionValue = useAppSelector(ELEVENTH_QUESTION);
    const twelthQuestionValue = useAppSelector(TWELTH_QUESTION);

    // React Refs
    const companyRef = useRef<ITextInputFieldRef>(null);

    useEffect(() => {
      if (typeof window !== 'undefined') {
        const subActiveStepString = StorageHelper.getLocalStorage(
          LocalStorageEnum.SUB_ACTIVE_STEP,
        );
        if (subActiveStepString && subActiveStepString !== 'undefined') {
          dispatch(form1Actions.setSubActiveStep(Number(subActiveStepString)));
        } else {
          StorageHelper.setLocalStorage(LocalStorageEnum.SUB_ACTIVE_STEP, '0');
        }
      }
    }, [dispatch]);

    /**
     * Handle change of Fifth Question's Radios option
     * @function handleFifthQuestionChange
     * @param {ChangeEvent<HTMLInputElement>} event
     */
    const handleFifthQuestionChange = (
      event: ChangeEvent<HTMLInputElement>,
    ): void => {
      dispatch(
        form1Actions.setFifthQuestion((event.target as HTMLInputElement).value),
      );
    };

    /**
     * Handle change of Sixth Question's Radios option
     * @function handleSixthQuestionChange
     * @param {ChangeEvent<HTMLInputElement>} event
     */
    const handleSixthQuestionChange = (
      event: ChangeEvent<HTMLInputElement>,
    ): void => {
      dispatch(
        form1Actions.setSixthQuestion((event.target as HTMLInputElement).value),
      );
    };

    /**
     * Handle change of Seventh Question's Radios option
     * @function handleSeventhQuestionChange
     * @param {ChangeEvent<HTMLInputElement>} event
     */
    const handleSeventhQuestionChange = (
      event: ChangeEvent<HTMLInputElement>,
    ): void => {
      dispatch(
        form1Actions.setSeventhQuestion(
          (event.target as HTMLInputElement).value,
        ),
      );
    };

    /**
     * Handle change of Eleventh Question's Radios option
     * @function handleEleventhQuestionChange
     * @param {ChangeEvent<HTMLInputElement>} event
     */
    const handleEleventhQuestionChange = (
      event: ChangeEvent<HTMLInputElement>,
    ): void => {
      dispatch(
        form1Actions.setEleventhQuestion(
          (event.target as HTMLInputElement).value,
        ),
      );
    };

    /**
     * Handle change of Twelth Question's Radios option
     * @function handleTwelthQuestionChange
     * @param {ChangeEvent<HTMLInputElement>} event
     */
    const handleTwelthQuestionChange = (
      event: ChangeEvent<HTMLInputElement>,
    ): void => {
      dispatch(
        form1Actions.setTwelthQuestion(
          (event.target as HTMLInputElement).value,
        ),
      );
    };

    /**
     * @function handleTenthQuestionChange
     * @param {ITextInputFieldData} event
     */
    const handleTenthQuestionChange = useCallback(
      (event: SelectChangeEvent<typeof tenthQuestionValue>): void => {
        const {
          target: { value },
        } = event;

        if (!value) return;
        dispatch(
          form1Actions.setTenthQuestion(
            typeof value === 'string' ? value.split(',') : value,
          ),
        );
      },
      [dispatch],
    );

    return {
      getters: {
        fifthQuestionValue,
        sixthQuestionValue,
        seventhQuestionValue,
        eleventhQuestionValue,
        twelthQuestionValue,
        tenthQuestionValue,
        formId,
        subActiveStep,
      },
      handlers: {
        handleFifthQuestionChange,
        handleSixthQuestionChange,
        handleSeventhQuestionChange,
        handleTenthQuestionChange,
        handleEleventhQuestionChange,
        handleTwelthQuestionChange,
      },
      refs: {
        companyRef,
      },
    };
  };
