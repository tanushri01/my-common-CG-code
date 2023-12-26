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
  FOURTH_FORM_QUESTION_EIGHT,
  IN_PROGRESS,
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
          question: FOURTH_FORM_QUESTION_EIGHT,
          answer: getters.eleventhQuestionValue,
          status: IN_PROGRESS,
          formName: FOURTH_FORM_NAME,
          questionId: QuestionIdEnum.SEVEN,
          activeStep: StepTypeEnum.ONE,
          subActiveStep: StepTypeEnum.SIX,
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
            disabled
          />
          <FormControlLabel
            value="medical debt"
            control={<Radio />}
            label="Medical debt"
            disabled
          />
          <FormControlLabel
            value="repossession"
            control={<Radio />}
            label="Repossession"
            disabled
          />
          <FormControlLabel
            value="bankruptcy"
            control={<Radio />}
            label="Bankruptcy"
            disabled
          />
          <FormControlLabel
            value="error with credit reporting"
            control={<Radio />}
            label="Error with credit reporting"
            disabled
          />
          <FormControlLabel
            value="more than one category"
            control={<Radio />}
            label="More than one category"
            disabled
          />
        </RadioGroup>
      </FormControl>
    </StepBox>
  );
};

export default memo(forwardRef<ISubStepRef>(EleventhStep));
