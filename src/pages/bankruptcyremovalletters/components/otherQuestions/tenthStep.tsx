import React, {
  ForwardedRef,
  forwardRef,
  memo,
  useImperativeHandle,
} from 'react';
import {
  Checkbox,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Select,
} from '@mui/material';

import { ListItemText, MenuItem, Typography } from '@/components';
import { StepBox } from '@/styles';
import { QuestionIdEnum, StepTypeEnum } from '@/enum';
import {
  IN_PROGRESS,
  THIRD_FORM_NAME,
  THIRD_FORM_QUESTION_SEVEN,
} from '@/constant';
import { ISubStepRef } from '@/interface';
import { companyList } from '@/json';

import { useOtherQuestionsController } from './otherQuestions.controller';

/**
 * @page {TenthStep} - TenthStep for the form
 * @param {Record<string, never>} _props
 * @param {ISubStepRef} ref
 * @return {JSX.Element}
 */
const TenthStep = (
  _props: Record<string, never>,
  ref: ForwardedRef<ISubStepRef>,
): JSX.Element => {
  const { getters, handlers } = useOtherQuestionsController();
  const { tenthQuestionValue, formId } = getters;
  const { handleTenthQuestionChange } = handlers;
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const isError = tenthQuestionValue.length === 0;

  useImperativeHandle(ref, () => ({
    validate: () => {
      if (!isError) {
        return true;
      }
      return false;
    },
    formsData: {
      formdata: [
        {
          formId,
          question: THIRD_FORM_QUESTION_SEVEN,
          answer: tenthQuestionValue,
          status: IN_PROGRESS,
          formName: THIRD_FORM_NAME,
          questionId: QuestionIdEnum.SIX,
          activeStep: StepTypeEnum.ONE,
          subActiveStep: StepTypeEnum.FIVE,
        },
      ],
    },
  }));

  return (
    <StepBox>
      <Typography variant="h3" color="primary" sx={{ mb: 4 }}>
        Which company or companies do you have a problem with?
      </Typography>
      <FormControl sx={{ width: '100%' }} error={isError}>
        <InputLabel id="demo-multiple-checkbox-label">
          Name of the Company
        </InputLabel>
        <Select
          fullWidth
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={tenthQuestionValue as string[]}
          onChange={handleTenthQuestionChange}
          input={<OutlinedInput label="Name of the Company" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {companyList.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={tenthQuestionValue.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
        {isError && (
          <FormHelperText>Please select atleast one value</FormHelperText>
        )}
      </FormControl>
    </StepBox>
  );
};

export default memo(forwardRef<ISubStepRef>(TenthStep));
