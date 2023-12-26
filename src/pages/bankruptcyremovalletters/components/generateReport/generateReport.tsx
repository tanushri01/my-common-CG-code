import React, {
  ForwardedRef,
  forwardRef,
  memo,
  useImperativeHandle,
} from 'react';

import { Box, Typography } from '@/components';
import { IStepRef } from '@/interface';
import { GENERATE_REPORT, IN_PROGRESS, THIRD_FORM_NAME } from '@/constant';
import { QuestionIdEnum, StepTypeEnum } from '@/enum';

import { useGenerateResponseController } from './generateReport.controller';
import {
  AccountBox,
  BoldTypo,
  DebtCollectorBox,
  GenearteReportBox,
} from './generateReport.style';

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
  const { fullName, street, city, state, zipCode, dcinfo, formId } = getters;

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
            formName: THIRD_FORM_NAME,
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
        <Typography>{dcinfo[0].dcName} </Typography>
        <Typography>{dcinfo[0].dcStreet} </Typography>
        <Typography>
          {dcinfo[0].dcCity}, {dcinfo[0].dcState} {dcinfo[0].dcZipCode}
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
          listed below. I need copies of ACDVs (Automated Credit Dispute
          Verification) forms, for the last year sent to me to verify the
          accuracy of the reporting of the accounts.
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
          accuracy of these disputed accounts or items the please delete them
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
        <BoldTypo sx={{ mb: 4 }}>
          I demand the following accounts be properly verified or removed
          immediately.
        </BoldTypo>
        <AccountBox>
          <Typography>Name of Account:</Typography>
          <Typography>Account Number:</Typography>
          <Typography>Provide Physical Proof of Verification</Typography>
        </AccountBox>
        <BoldTypo sx={{ mb: 4 }}>
          Previous information sent to the credit reporting agencies concerning
          US Bankruptcy were incomplete and not fully accurate. Date reported is
          inaccurate. The full docket and case number is not reported. Please
          send me all documents used to report to the CRAs regarding the
          Bankruptcy reported. If you cannot produce the documents, ask the CRAs
          to delete.
        </BoldTypo>
        <BoldTypo sx={{ mb: 4 }}>
          * NOTE: Please also remove all non-account holding inquiries over 30
          days old.
        </BoldTypo>
        <Typography sx={{ mb: 4 }}>Thank You,</Typography>
        <Typography>{fullName}</Typography>
      </Box>
    </GenearteReportBox>
  );
};

export default memo(forwardRef<IStepRef>(GenerateResponse));
