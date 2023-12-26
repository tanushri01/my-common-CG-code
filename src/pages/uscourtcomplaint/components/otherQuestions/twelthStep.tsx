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
  FOURTH_FORM_NAME,
  FOURTH_FORM_QUESTION_NINE,
  IN_PROGRESS,
} from '@/constant';
import { ISubStepRef } from '@/interface';

import { useOtherQuestionsController } from './otherQuestions.controller';

/**
 * @page {TwelthStep} - TwelthStep for the form
 * @param {Record<string, never>} _props
 * @param {ISubStepRef} ref
 * @return {JSX.Element}
 */
const TwelthStep = (
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
          question: FOURTH_FORM_QUESTION_NINE,
          answer: getters.twelthQuestionValue,
          status: IN_PROGRESS,
          formName: FOURTH_FORM_NAME,
          questionId: QuestionIdEnum.EIGHT,
          activeStep: StepTypeEnum.ONE,
          subActiveStep: StepTypeEnum.SEVEN,
        },
      ],
    },
  }));

  return (
    <StepBox>
      <Typography variant="h3" color="primary" sx={{ mb: 4 }}>
        In the past or currently, are you using a credit repair company?
      </Typography>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={getters.twelthQuestionValue}
          onChange={handlers.handleTwelthQuestionChange}
        >
          <FormControlLabel
            value="yes"
            control={<Radio />}
            label="Yes"
            disabled
          />
          <FormControlLabel
            value="no"
            control={<Radio />}
            label="No"
            disabled
          />
        </RadioGroup>
      </FormControl>
    </StepBox>
  );
};

export default memo(forwardRef<ISubStepRef>(TwelthStep));
