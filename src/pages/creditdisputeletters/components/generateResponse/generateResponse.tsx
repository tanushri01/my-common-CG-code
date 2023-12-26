import React, {
  ForwardedRef,
  forwardRef,
  memo,
  useImperativeHandle,
} from 'react';

import { Box, Typography } from '@/components';
import { IStepRef } from '@/interface';
import { FIRST_FORM_NAME, GENERATE_REPORT, IN_PROGRESS } from '@/constant';
import { QuestionIdEnum, StepTypeEnum } from '@/enum';

import { DebtCollectorBox, GenearteReportBox } from './generateResponse.style';
import { useGenerateResponseController } from './generateReponse.controller';

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
  const { fullName, street, city, state, zipCode, dcInfo, formId } = getters;

  useImperativeHandle(ref, () => ({
    validate: () => ({
      isValid: true,
      isFinal: true,
      formsData: {
        formdata: [
          {
            formId,
            question: GENERATE_REPORT,
            answer: GENERATE_REPORT,
            status: IN_PROGRESS,
            formName: FIRST_FORM_NAME,
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
        <Typography>{fullName} </Typography>
        <Typography>{street} </Typography>
        <Typography>
          {city}, {state} {zipCode}
        </Typography>
      </Box>
      <DebtCollectorBox>
        <Typography>{dcInfo[0].dcName} </Typography>
        <Typography>{dcInfo[0].dcStreet} </Typography>
        <Typography>
          {dcInfo[0].dcCity}, {dcInfo[0].dcState} {dcInfo[0].dcZipCode}
        </Typography>
      </DebtCollectorBox>
      <Box>
        <Typography sx={{ mb: 2 }}>To Whom It May Concern: </Typography>
        <Typography sx={{ mb: 2 }}>
          This letter is to inform you that I recently received a copy of my
          credit report that your company publishes and after reviewing it I
          found a number of items on the report that are inaccurate. The
          accounts in question are listed below.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Please send me copies of the documents that you have in your files as
          of this date that you used to verify the accuracy of the accounts
          listed below.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Under the Fair Credit Reporting Act, 15 U.S.C. § 1681g I have the
          right to demand that you disclose to me all of the documents that you
          have recorded and retained in your file at the time of this request
          concerning the accounts that you are reporting in my credit report.
          Please don’t respond to my request by saying that these accounts have
          been verified. Send me copies of the documents that you have in your
          files that were used to verify them.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          If you do not have any documentation in your files to verify the
          accuracy of these disputed accounts then please delete them
          immediately as required under Section 611(a)(5)(A)(i). By publishing
          these inaccurate and unverified items on my credit report and
          distributing them to 3rd parties you are damaging my reputation and
          credit worthiness.
        </Typography>
        <Typography sx={{ mb: 4 }}>
          Under the FCRA 15 U.S.C. § 1681i, all unverified accounts must be
          promptly deleted. Therefore, if you are unable to provide me with a
          copy of the verifiable proof that you have on file for each of the
          accounts listed below within 30 days of receipt of this letter then
          you must remove these accounts from my credit report.
        </Typography>
        <Typography sx={{ mb: 4 }}>
          Please provide me with a copy of an updated and corrected credit
          report showing these items removed.
        </Typography>
        <Typography sx={{ mb: 4 }}>Thank You,</Typography>
        <Typography>{fullName}</Typography>
      </Box>
    </GenearteReportBox>
  );
};

export default memo(forwardRef<IStepRef>(GenerateResponse));
