import React, {
  ForwardedRef,
  forwardRef,
  memo,
  useImperativeHandle,
} from 'react';

import { TextInputField, Typography } from '@/components';
import { ValidationHelper } from '@/helper';
import { StepBox } from '@/styles';
import { QuestionIdEnum, StepTypeEnum } from '@/enum';
import {
  THIRD_FORM_NAME,
  THIRD_FORM_QUESTION_ONE,
  IN_PROGRESS,
} from '@/constant';
import { ISubStepRef } from '@/interface';

import { useProvideYourInfoController } from './provideYourInfo.controller';

/**
 * @page {FirstStep} - FirstStep for the Third form
 * @param {Record<string, never>} _props
 * @param {ISubStepRef} ref
 * @return {JSX.Element}
 */
const SecondStep = (
  _props: Record<string, never>,
  ref: ForwardedRef<ISubStepRef>,
): JSX.Element => {
  const { getters, handlers, refs } = useProvideYourInfoController();
  const { fullName, formId } = getters;

  useImperativeHandle(ref, () => ({
    validate: () => {
      const isFullName = refs.fullNameRef.current?.validateValue();

      if (isFullName) {
        return true;
      }

      return false;
    },
    formsData: formId
      ? {
          formdata: [
            {
              formId,
              question: THIRD_FORM_QUESTION_ONE,
              answer: fullName,
              status: IN_PROGRESS,
              formName: THIRD_FORM_NAME,
              questionId: QuestionIdEnum.ZERO,
              activeStep: StepTypeEnum.ZERO,
              subActiveStep: StepTypeEnum.ONE,
            },
          ],
        }
      : {
          formdata: [
            {
              question: THIRD_FORM_QUESTION_ONE,
              answer: fullName,
              status: IN_PROGRESS,
              formName: THIRD_FORM_NAME,
              questionId: QuestionIdEnum.ZERO,
              activeStep: StepTypeEnum.ZERO,
              subActiveStep: StepTypeEnum.ONE,
            },
          ],
        },
  }));

  return (
    <StepBox>
      <Typography variant="h3" color="primary" sx={{ mb: 4 }}>
        Type your full name.
      </Typography>
      <TextInputField
        fullWidth
        onChange={handlers.handleFullNameChange}
        value={fullName}
        validation={ValidationHelper.validateNotEmpty}
        placeholder="Your Name"
        type="text"
        ref={refs.fullNameRef}
      />
    </StepBox>
  );
};

export default memo(forwardRef<ISubStepRef>(SecondStep));
