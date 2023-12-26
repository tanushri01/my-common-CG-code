import React, {
  ForwardedRef,
  forwardRef,
  memo,
  useImperativeHandle,
} from 'react';

import { Box, Typography } from '@/components';
import { IStepRef } from '@/interface';

import { DebtCollectorBox, GenearteReportBox } from './generateReport.style';
import { useGenerateResponseController } from './generateReport.controller';
import {
  IN_PROGRESS,
  SECOND_FORM_GENERATE_REPORT,
  SECOND_FORM_NAME,
} from '@/constant';
import { QuestionIdEnum, StepTypeEnum } from '@/enum';

/**
 * @page {GenerateResponse} - Generate Response for the form
 * @param {Record<string, never>} _props
 * @param {ForwardedRef<IStepRef>} ref
 * @return {JSX.Element}
 */
const GenerateResponse = (
  _props: Record<string, never>,
  ref: ForwardedRef<IStepRef>,
): JSX.Element => {
  const { getters } = useGenerateResponseController();
  const { fullName, street, city, state, zipCode, dcInfo, today, formId } =
    getters;

  useImperativeHandle(ref, () => ({
    validate: () => ({
      isValid: true,
      isFinal: true,
      formsData: {
        formdata: [
          {
            formId,
            question: SECOND_FORM_GENERATE_REPORT,
            answer: SECOND_FORM_GENERATE_REPORT,
            status: IN_PROGRESS,
            formName: SECOND_FORM_NAME,
            questionId: QuestionIdEnum.NINE,
            activeStep: StepTypeEnum.TWO,
            subActiveStep: StepTypeEnum.ZERO,
          },
        ],
      },
    }),
  }));

  return (
    <GenearteReportBox>
      <Typography variant="h3" color="primary">
        Report
      </Typography>
      <Box>
        <Typography>{today.toLocaleDateString()}</Typography>
        <Typography>{fullName} </Typography>
        <Typography>{street} </Typography>
        <Typography>
          {city}, {state}, {zipCode}
        </Typography>
      </Box>
      <DebtCollectorBox>
        <Typography>Debt Collector: {dcInfo[0].dcName} </Typography>
        <Typography> {dcInfo[0].dcStreet} </Typography>
        <Typography>
          {dcInfo[0].dcCity}, {dcInfo[0].dcState}, {dcInfo[0].dcZipCode}
        </Typography>
      </DebtCollectorBox>
      <Box>
        <Typography sx={{ mb: 2 }}>To Whom It May Concern: </Typography>
        <Typography sx={{ mb: 2 }}>
          Please be advised your company has done an unauthorized inquiry on my
          credit report on {today.toLocaleDateString()}.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Your company failed to satisfy its duty under FCRA 15 USC 1681b(a)(2),
          where your company has done an inquiry on my credit report without my
          written consent.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Your company has also failed to satisfy its duty under FCRA 15 USC
          1681b, where your company has done an inquiry without a permissible
          purpose.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          I am asking for proof that I personally initiated the inquiry or
          DELETE the inquiry immediately. You have 30 days to do a reasonable
          investigation under the Fair Credit Reporting Act.
        </Typography>
        <Typography sx={{ mb: 4 }}>
          Failure to DELETE or provide PROOF can result in a lawsuit under the
          Fair Credit Reporting Act.
        </Typography>
        <Typography sx={{ mb: 4 }}>Sincerely,</Typography>
        <Typography>{fullName}</Typography>
      </Box>
    </GenearteReportBox>
  );
};

export default memo(forwardRef<IStepRef>(GenerateResponse));
