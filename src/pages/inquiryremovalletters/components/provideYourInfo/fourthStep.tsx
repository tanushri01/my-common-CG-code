import React, {
  ForwardedRef,
  RefObject,
  forwardRef,
  memo,
  useImperativeHandle,
} from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import {
  Box,
  ITextInputFieldData,
  ITextInputFieldRef,
  TextInputField,
  Typography,
} from '@/components';
import { StringHelper, ValidationHelper } from '@/helper';
import { CustomButtonBox, StepBox } from '@/styles';
import { QuestionIdEnum } from '@/enum';
import { IN_PROGRESS, QUESTION_THREE, SECOND_FORM_NAME } from '@/constant';
import { ISubStepRef } from '@/interface';

import { useProvideYourInfoController } from './provideYourInfo.controller';
import { IFourthStep } from '../../interfaces';

/**
 * @page {FourthStep} - Fourth Step for the Second form
 * @param {Record<string, never>} _props
 * @param {ForwardedRef<ISubStepRef>} ref
 * @return {JSX.Element}
 */
const FourthStep = (
  _props: Record<string, never>,
  ref: ForwardedRef<ISubStepRef>,
): JSX.Element => {
  const { getters, handlers, refs } = useProvideYourInfoController();
  const { debtCollectorInfo, formId } = getters;
  const { handleAddMore, handleChange, handleRemove } = handlers;
  const { dcInfoRef } = refs;

  useImperativeHandle(ref, () => ({
    validate: () => {
      let values = true;

      for (let i = 0; i < dcInfoRef.current.length; i += 1) {
        const isDcName: RefObject<ITextInputFieldRef> = dcInfoRef.current[i]
          .dcName as RefObject<ITextInputFieldRef>;
        const isDcCity: RefObject<ITextInputFieldRef> = dcInfoRef.current[i]
          .dcCity as RefObject<ITextInputFieldRef>;
        const isDcState: RefObject<ITextInputFieldRef> = dcInfoRef.current[i]
          .dcState as RefObject<ITextInputFieldRef>;
        const isDcStreet: RefObject<ITextInputFieldRef> = dcInfoRef.current[i]
          .dcStreet as RefObject<ITextInputFieldRef>;
        const isDcZipCode: RefObject<ITextInputFieldRef> = dcInfoRef.current[i]
          .dcZipCode as RefObject<ITextInputFieldRef>;

        if (
          !isDcName.current?.validateValue() &&
          !isDcCity.current?.validateValue() &&
          !isDcState.current?.validateValue() &&
          !isDcStreet.current?.validateValue() &&
          !isDcZipCode.current?.validateValue()
        ) {
          values = false;
        }
      }

      if (values) {
        return true;
      }

      return false;
    },
    formsData: {
      formdata: [
        {
          formId,
          question: QUESTION_THREE,
          answer: debtCollectorInfo,
          status: IN_PROGRESS,
          formName: SECOND_FORM_NAME,
          questionId: QuestionIdEnum.TWO,
          activeStep: 0,
          subActiveStep: 3,
        },
      ],
    },
  }));

  return (
    <StepBox>
      <Typography variant="h3" color="primary" sx={{ mb: 2 }}>
        Type the name and address of the debt collector or credit furnisher.
      </Typography>
      <Typography variant="h6">
        If you received notification of the debt from a letter, the name and
        address of the debt collector are usually at the top of the letter.
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        If you do not have the mailing address of the debt collector, try
        searching for it on the Better
        <Link href="https://www.bbb.org/"> Business Bureau site</Link>.
      </Typography>
      {debtCollectorInfo.map((debtCollector: IFourthStep, index: number) => (
        <Box
          key={StringHelper.generateUID('debCollector', index)}
          sx={{ mt: 4 }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 4,
            }}
          >
            <Typography variant="h6">Debt Collector {index + 1}</Typography>
            {index !== 0 && (
              <CustomButtonBox
                variant="outlined"
                color="secondary"
                size="small"
                onClick={() => handleRemove(index)} // Call handleRemove with the index
              >
                Remove Debt Collector
              </CustomButtonBox>
            )}
          </Box>
          <TextInputField
            fullWidth
            onChange={(e: ITextInputFieldData) =>
              handleChange(index, 'dcName', e.value)
            }
            value={debtCollector.dcName}
            validation={ValidationHelper.validateNotEmpty}
            placeholder="Name of the debt collector"
            type="text"
            ref={dcInfoRef.current[index].dcName}
          />
          <TextInputField
            fullWidth
            onChange={(e: ITextInputFieldData) =>
              handleChange(index, 'dcStreet', e.value)
            }
            value={debtCollector.dcStreet}
            validation={ValidationHelper.validateNotEmpty}
            placeholder="Street and room/suite #"
            type="text"
            ref={dcInfoRef.current[index].dcStreet}
          />
          <TextInputField
            fullWidth
            onChange={(e: ITextInputFieldData) =>
              handleChange(index, 'dcCity', e.value)
            }
            value={debtCollector.dcCity}
            validation={ValidationHelper.validateNotEmpty}
            placeholder="City"
            type="text"
            ref={dcInfoRef.current[index].dcCity}
          />
          <TextInputField
            fullWidth
            onChange={(e: ITextInputFieldData) =>
              handleChange(index, 'dcState', e.value)
            }
            value={debtCollector.dcState}
            validation={ValidationHelper.validateNotEmpty}
            placeholder="State"
            type="text"
            ref={dcInfoRef.current[index].dcState}
          />
          <TextInputField
            fullWidth
            onChange={(e: ITextInputFieldData) =>
              handleChange(index, 'dcZipCode', e.value)
            }
            value={debtCollector.dcZipCode}
            validation={ValidationHelper.validateZipCode}
            placeholder="Zip code"
            type="text"
            ref={dcInfoRef.current[index].dcZipCode}
          />
        </Box>
      ))}
      {debtCollectorInfo.length < 6 && (
        <CustomButtonBox
          sx={{ mt: 4 }}
          variant="contained"
          startIcon={<FontAwesomeIcon icon={faPlus} />}
          onClick={() => handleAddMore()}
        >
          Add more Debt Collector/Credit Furnisher
        </CustomButtonBox>
      )}{' '}
    </StepBox>
  );
};

export default memo(forwardRef<ISubStepRef>(FourthStep));
