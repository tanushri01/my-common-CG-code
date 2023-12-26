import React, {
  ForwardedRef,
  forwardRef,
  memo,
  useImperativeHandle,
} from 'react';

import { TextInputField, Typography } from '@/components';
import { ValidationHelper } from '@/helper';
import { StepBox } from '@/styles';
import { QuestionIdEnum } from '@/enum';
import { IN_PROGRESS, QUESTION_TWO, SECOND_FORM_NAME } from '@/constant';
import { ISubStepRef } from '@/interface';

import { useProvideYourInfoController } from './provideYourInfo.controller';

/**
 * @page {ThirdStep} - ThirdStep for the Second form
 * @param {Record<string, never>} _props
 * @param {ForwardedRef<ISubStepRef>} ref
 * @return {JSX.Element}
 */
const ThirdStep = (
  _props: Record<string, never>,
  ref: ForwardedRef<ISubStepRef>,
): JSX.Element => {
  const { getters, handlers, refs } = useProvideYourInfoController();
  const { street, city, state, zipCode, formId } = getters;
  const {
    handleStreetChange,
    handleCityChange,
    handleStateChange,
    handleZipCodeChange,
  } = handlers;
  const { streetRef, cityRef, stateRef, zipCodeRef } = refs;

  useImperativeHandle(ref, () => ({
    validate: () => {
      const isStreet = streetRef.current?.validateValue();
      const isCity = cityRef.current?.validateValue();
      const isState = stateRef.current?.validateValue();
      const isZipCode = zipCodeRef.current?.validateValue();

      if (isStreet && isCity && isState && isZipCode) {
        return true;
      }

      return false;
    },
    formsData: {
      formdata: [
        {
          formId,
          question: QUESTION_TWO,
          answer: {
            street,
            city,
            state,
            zipCode,
          },
          status: IN_PROGRESS,
          formName: SECOND_FORM_NAME,
          questionId: QuestionIdEnum.ONE,
          activeStep: 0,
          subActiveStep: 2,
        },
      ],
    },
  }));

  return (
    <StepBox>
      <Typography variant="h3" color="primary" sx={{ mb: 2 }}>
        Type your current address.
      </Typography>
      <Typography variant="h6">
        It is very important that you give an address where you check the
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        mail regularly. If not, you may miss an important document.
      </Typography>
      <TextInputField
        fullWidth
        onChange={handleStreetChange}
        value={street}
        validation={ValidationHelper.validateNotEmpty}
        placeholder="Street and apt. #"
        type="text"
        ref={streetRef}
      />
      <TextInputField
        fullWidth
        onChange={handleCityChange}
        value={city}
        validation={ValidationHelper.validateNotEmpty}
        placeholder="City"
        type="text"
        ref={cityRef}
      />
      <TextInputField
        fullWidth
        onChange={handleStateChange}
        value={state}
        validation={ValidationHelper.validateNotEmpty}
        placeholder="State"
        type="text"
        ref={stateRef}
      />
      <TextInputField
        fullWidth
        onChange={handleZipCodeChange}
        value={zipCode}
        validation={ValidationHelper.validateZipCode}
        placeholder="Zip code"
        type="text"
        ref={zipCodeRef}
      />
    </StepBox>
  );
};

export default memo(forwardRef<ISubStepRef>(ThirdStep));
