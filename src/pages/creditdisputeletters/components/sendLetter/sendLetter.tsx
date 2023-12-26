import React, {
  ForwardedRef,
  forwardRef,
  memo,
  useImperativeHandle,
} from 'react';

import { Box } from '@/components';
import { CustomButtonBox } from '@/styles';
import { ISubStepRef } from '@/interface';
import { COMPLETE, FIRST_FORM_NAME, SEND_LETTER } from '@/constant';
import { QuestionIdEnum, StepTypeEnum } from '@/enum';

import { useSendLetterController } from './sendLetter.controller';
import { CustomCircularProgress } from './sendLetter.style';

/**
 * @page {SendLetter} - Send Letter for the form
 * @param {Record<string, never>} _props
 * @param {ForwardedRef<ISubStepRef>} ref
 * @return {JSX.Element}
 */
const SendLetter = (
  _props: Record<string, never>,
  ref: ForwardedRef<ISubStepRef>,
): JSX.Element => {
  const { getters, handlers } = useSendLetterController();
  const { formId, isLoading } = getters;

  useImperativeHandle(ref, () => ({
    validate: () => true,
    formsData: {
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
    },
  }));

  return (
    <Box sx={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <Box sx={{ display: 'flex', mt: 10, justifyContent: 'center' }}>
        <CustomButtonBox
          variant="contained"
          onClick={handlers.handleSendLetter}
        >
          Download and Send letter to your email
          {isLoading && <CustomCircularProgress />}
        </CustomButtonBox>
      </Box>
    </Box>
  );
};

export default memo(forwardRef<ISubStepRef>(SendLetter));
