import React, { memo, ReactNode } from 'react';

import { Typography, Box, Stepper } from '@/components';
import { StringHelper } from '@/helper';
import { CustomButtonBox } from '@/styles';

import { ISteps, useFormStepperController } from './formStepper.controller';
import {
  CustomStepLabel,
  CustomStepConnector,
  CustomStep,
  StepsContentBox,
} from './formStepper.style';

interface IProps
  extends Readonly<{
    firstStep: ReactNode;
    secondStep: ReactNode;
    generateResponse: ReactNode;
    makePayment: ReactNode;
    sendLetter: ReactNode;
    continueStep: () => void;
  }> {}

/**
 * @component {FormStepper} - This component is for Form Stepper.
 * @param {IProps} props
 * @return {JSX.Element}
 */
const FormStepper = (props: IProps): JSX.Element => {
  const { getters, handlers } = useFormStepperController(props);
  const { steps, activeStep, subActiveStep, isPayment } = getters;
  const { activeComponent, handlePrev, handleSubStepPrev } = handlers;
  const { continueStep } = props;

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<CustomStepConnector />}
      >
        {steps.map((label: ISteps, index: number) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: ReactNode;
          } = {};
          return (
            <CustomStep
              key={StringHelper.generateUID(label.parent, index)}
              {...stepProps}
            >
              <CustomStepLabel {...labelProps}>{label.parent}</CustomStepLabel>
            </CustomStep>
          );
        })}
      </Stepper>
      <StepsContentBox>{activeComponent()}</StepsContentBox>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}
      >
        <CustomButtonBox
          sx={{ mb: 10 }}
          variant="contained"
          onClick={subActiveStep !== 0 ? handleSubStepPrev : handlePrev}
          disabled={(subActiveStep === 0 && activeStep === 0) || isPayment}
        >
          Previous
        </CustomButtonBox>
        {activeStep !== steps.length - 1 && (
          <CustomButtonBox
            sx={{ mb: 10 }}
            variant="contained"
            onClick={continueStep}
          >
            Continue
          </CustomButtonBox>
        )}
      </Box>
      {activeStep === steps.length && (
        <Typography>All steps completed - Thank You!</Typography>
      )}
    </Box>
  );
};

export default memo(FormStepper);
