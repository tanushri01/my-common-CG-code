import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';

import { useAppSnackbar } from '@/hooks';
import {
  QuestionIdEnum,
  RoutePathEnum,
  SnackbarTypeEnum,
  StepTypeEnum,
} from '@/enum';
import { ReportService } from '@/services';
import { FORM_ID, FormsThunk, useAppDispatch, useAppSelector } from '@/redux';
import { COMPLETE, FIRST_FORM_NAME, SEND_LETTER } from '@/constant';

interface ISendLetterControllerResponse {
  getters: {
    formId: string;
    isLoading: boolean;
  };
  handlers: {
    handleSendLetter: () => Promise<void>;
  };
}

/**
 * @controller {useSendLetterController}
 * @return {ISendLetterControllerResponse}
 */
export const useSendLetterController = (): ISendLetterControllerResponse => {
  // Hooks
  const { enqueueSnackbar } = useAppSnackbar();
  const router = useRouter();

  // React States
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Redux States
  const dispatch = useAppDispatch();
  const formId = useAppSelector(FORM_ID);

  const handleSendLetter = useCallback(async (): Promise<void> => {
    const payload = {
      formdata: [
        {
          formId,
          question: SEND_LETTER,
          answer: SEND_LETTER,
          status: COMPLETE,
          formName: FIRST_FORM_NAME,
          questionId: QuestionIdEnum.TEN,
          activeStep: StepTypeEnum.FOUR,
          subActiveStep: StepTypeEnum.ONE,
        },
      ],
    };
    try {
      setIsLoading(true);
      await ReportService.createReport();
      await ReportService.downloadReport();
      await dispatch(FormsThunk.addForm(payload));
      setIsLoading(false);
      router.push(RoutePathEnum.HOME);
    } catch (error) {
      enqueueSnackbar('Error', SnackbarTypeEnum.ERROR);
    }
  }, [dispatch, enqueueSnackbar, formId, router]);

  return {
    getters: {
      formId,
      isLoading,
    },
    handlers: {
      handleSendLetter,
    },
  };
};
