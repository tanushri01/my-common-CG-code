import React, {
  ForwardedRef,
  forwardRef,
  memo,
  useImperativeHandle,
} from 'react';

import { Box } from '@/components';
import { CustomButtonBox } from '@/styles';
import { ISubStepRef } from '@/interface';
import { useSendLetterController } from './sendLetter.controller';
import { COMPLETE, THIRD_FORM_NAME, THIRD_FORM_SEND_LETTER } from '@/constant';
import { QuestionIdEnum, StepTypeEnum } from '@/enum';
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
          question: THIRD_FORM_SEND_LETTER,
          answer: THIRD_FORM_SEND_LETTER,
          status: COMPLETE,
          formName: THIRD_FORM_NAME,
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
