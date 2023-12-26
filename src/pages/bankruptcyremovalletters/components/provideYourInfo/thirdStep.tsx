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
  IN_PROGRESS,
  THIRD_FORM_NAME,
  THIRD_FORM_QUESTION_TWO,
} from '@/constant';
import { ISubStepRef } from '@/interface';

import { useProvideYourInfoController } from './provideYourInfo.controller';

/**
 * @page {ThirdStep} - ThirdStep for the Third form
 * @param {Record<string, never>} _props
 * @param {ForwardedRef<ISubStepRef>} ref
 * @return {JSX.Element}
 */
const ThirdStep = (
  _props: Record<string, never>,
  ref: ForwardedRef<ISubStepRef>,
): JSX.Element => {
  const { getters, handlers, refs } = useProvideYourInfoController();
  const { street, city, state, zipCode, formId, phone } = getters;
  const {
    handleStreetChange,
    handleCityChange,
    handleStateChange,
    handleZipCodeChange,
    handlePhoneChange,
  } = handlers;
  const { streetRef, cityRef, stateRef, zipCodeRef, phoneRef } = refs;

  useImperativeHandle(ref, () => ({
    validate: () => {
      const isStreet = streetRef.current?.validateValue();
      const isCity = cityRef.current?.validateValue();
      const isState = stateRef.current?.validateValue();
      const isZipCode = zipCodeRef.current?.validateValue();
      const isPhone = phoneRef.current?.validateValue();

      if (isStreet && isCity && isState && isZipCode && isPhone) {
        return true;
      }

      return false;
    },
    formsData: {
      formdata: [
        {
          formId,
          question: THIRD_FORM_QUESTION_TWO,
          answer: {
            street,
            city,
            state,
            zipCode,
            phone,
          },
          status: IN_PROGRESS,
          formName: THIRD_FORM_NAME,
          questionId: QuestionIdEnum.ONE,
          activeStep: StepTypeEnum.ZERO,
          subActiveStep: StepTypeEnum.TWO,
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
      <TextInputField
        fullWidth
        onChange={handlePhoneChange}
        value={phone}
        validation={ValidationHelper.validatePhone}
        placeholder="Phone Number"
        type="text"
        ref={phoneRef}
      />
    </StepBox>
  );
};

export default memo(forwardRef<ISubStepRef>(ThirdStep));
