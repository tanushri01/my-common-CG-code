import React, {
  ForwardedRef,
  forwardRef,
  memo,
  useImperativeHandle,
} from 'react';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

import { Typography } from '@/components';
import { StepBox } from '@/styles';
import { QuestionIdEnum } from '@/enum';
import {
  IN_PROGRESS,
  SECOND_FORM_NAME,
  SECOND_FORM_QUESTION_FOUR,
} from '@/constant';
import { ISubStepRef } from '@/interface';

import { useOtherQuestionsController } from './otherQuestions.controller';

/**
 * @page {FifthStep} - FifthStep for the form
 * @param {Record<string, never>} _props
 * @param {ForwardedRef<ISubStepRef>} ref
 * @return {JSX.Element}
 */
const FifthStep = (
  _props: Record<string, never>,
  ref: ForwardedRef<ISubStepRef>,
): JSX.Element => {
  const { getters, handlers } = useOtherQuestionsController();

  useImperativeHandle(ref, () => ({
    validate: () => true,
    formsData: {
      formdata: [
        {
          formId: getters.formId,
          question: SECOND_FORM_QUESTION_FOUR,
          answer: getters.fifthQuestionValue,
          status: IN_PROGRESS,
          formName: SECOND_FORM_NAME,
          questionId: QuestionIdEnum.THREE,
          activeStep: 1,
          subActiveStep: 0,
        },
      ],
    },
  }));

  return (
    <StepBox>
      <Typography variant="h3" color="primary" sx={{ mb: 4 }}>
        Do you think you have errors on your credit report?
      </Typography>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={getters.fifthQuestionValue}
          onChange={handlers.handleFifthQuestionChange}
          defaultValue={getters.fifthQuestionValue}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
    </StepBox>
  );
};

export default memo(forwardRef<ISubStepRef>(FifthStep));
