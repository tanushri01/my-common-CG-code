import React, {
  ForwardedRef,
  forwardRef,
  memo,
  useImperativeHandle,
} from 'react';

import { Box, Typography } from '@/components';
import { CustomButtonBox } from '@/styles';
import { ISubStepRef } from '@/interface';
import {
  COMPLETE,
  FOURTH_FORM_NAME,
  FOURTH_FORM_SEND_LETTER,
} from '@/constant';
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
          question: FOURTH_FORM_SEND_LETTER,
          answer: FOURTH_FORM_SEND_LETTER,
          status: COMPLETE,
          formName: FOURTH_FORM_NAME,
          questionId: QuestionIdEnum.TEN,
          activeStep: StepTypeEnum.FOUR,
          subActiveStep: StepTypeEnum.ONE,
        },
      ],
    },
  }));

  return (
    <Box sx={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <Box sx={{ display: 'flex', mt: 10, justifyContent: 'center', mb: 4 }}>
        <CustomButtonBox
          variant="contained"
          onClick={handlers.handleSendLetter}
        >
          Download and Send letter to your email
          {isLoading && <CustomCircularProgress />}
        </CustomButtonBox>
      </Box>
      <Typography variant="h4" color="primary">
        Filing Fees for Court $402
      </Typography>
      <Typography variant="body1" sx={{ mb: 1, mt: 4 }}>
        Made payable by money order to Clerk USDC.
      </Typography>
      <Typography variant="body1">
        For US Complaint you must have Civil Cover Sheet (JS-44) attached.
      </Typography>
    </Box>
  );
};

export default memo(forwardRef<ISubStepRef>(SendLetter));
