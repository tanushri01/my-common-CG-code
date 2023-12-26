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
  SECOND_FORM_QUESTION_EIGHT,
} from '@/constant';
import { ISubStepRef } from '@/interface';

import { useOtherQuestionsController } from './otherQuestions.controller';

/**
 * @page {EleventhStep} - EleventhStep for the form
 * @param {Record<string, never>} _props
 * @param {ISubStepRef} ref
 * @return {JSX.Element}
 */
const EleventhStep = (
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
          question: SECOND_FORM_QUESTION_EIGHT,
          answer: getters.eleventhQuestionValue,
          status: IN_PROGRESS,
          formName: SECOND_FORM_NAME,
          questionId: QuestionIdEnum.SEVEN,
          activeStep: 1,
          subActiveStep: 6,
        },
      ],
    },
  }));

  return (
    <StepBox>
      <Typography variant="h3" color="primary" sx={{ mb: 4 }}>
        Is your issue with
      </Typography>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={getters.eleventhQuestionValue}
          onChange={handlers.handleEleventhQuestionChange}
        >
          <FormControlLabel
            value="credit card debt"
            control={<Radio />}
            label="Credit card debt"
          />
          <FormControlLabel
            value="medical debt"
            control={<Radio />}
            label="Medical debt"
          />
          <FormControlLabel
            value="repossession"
            control={<Radio />}
            label="Repossession"
          />
          <FormControlLabel
            value="bankruptcy"
            control={<Radio />}
            label="Bankruptcy"
          />
          <FormControlLabel
            value="error with credit reporting"
            control={<Radio />}
            label="Error with credit reporting"
          />
          <FormControlLabel
            value="more than one category"
            control={<Radio />}
            label="More than one category"
          />
        </RadioGroup>
      </FormControl>
    </StepBox>
  );
};

export default memo(forwardRef<ISubStepRef>(EleventhStep));
