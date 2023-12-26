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
import { QuestionIdEnum, StepTypeEnum } from '@/enum';
import {
  IN_PROGRESS,
  THIRD_FORM_NAME,
  THIRD_FORM_QUESTION_SIX,
} from '@/constant';
import { ISubStepRef } from '@/interface';

import { useOtherQuestionsController } from './otherQuestions.controller';

/**
 * @page {SeventhStep} - SeventhStep for the form
 * @param {Record<string, never>} _props
 * @param {ForwardedRef<ISubStepRef>} ref
 * @return {JSX.Element}
 */
const SeventhStep = (
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
          question: THIRD_FORM_QUESTION_SIX,
          answer: getters.seventhQuestionValue,
          status: IN_PROGRESS,
          formName: THIRD_FORM_NAME,
          questionId: QuestionIdEnum.FIVE,
          activeStep: StepTypeEnum.ONE,
          subActiveStep: StepTypeEnum.THREE,
        },
      ],
    },
  }));

  return (
    <StepBox>
      <Typography variant="h3" color="primary" sx={{ mb: 4 }}>
        Is your credit score under 700?
      </Typography>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={getters.seventhQuestionValue}
          onChange={handlers.handleSeventhQuestionChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
    </StepBox>
  );
};

export default memo(forwardRef<ISubStepRef>(SeventhStep));
