import React, {
  ForwardedRef,
  forwardRef,
  memo,
  useImperativeHandle,
} from 'react';
import { Divider } from '@mui/material';

import { Box, Typography } from '@/components';
import { IStepRef } from '@/interface';
import {
  FOURTH_FORM_GENERATE_REPORT,
  FOURTH_FORM_NAME,
  IN_PROGRESS,
} from '@/constant';
import { QuestionIdEnum, StepTypeEnum } from '@/enum';

import {
  BoldText,
  DebtCollectorBox,
  GenearteReportBox,
  LeftBox,
  MainHeading,
  RightBox,
  Sign,
} from './generateReport.style';
import { useGenerateReportController } from './generateReport.controller';

/**
 * @page {GenerateReport} - Generate Response for the form
 * @param {Record<string, never>} _props
 * @param {ForwardedRef<IStepRef>} ref
 * @return {JSX.Element}
 */
const GenerateReport = (
  _props: Record<string, never>,
  ref: ForwardedRef<IStepRef>,
): JSX.Element => {
  const { getters } = useGenerateReportController();
  const {
    fullName,
    street,
    city,
    state,
    zipCode,
    dcInfo,
    formId,
    phone,
    email,
    today,
    companyNames,
  } = getters;

  useImperativeHandle(ref, () => ({
    validate: () => ({
      isValid: true,
      isFinal: true,
      formsData: {
        formdata: [
          {
            formId,
            question: FOURTH_FORM_GENERATE_REPORT,
            answer: FOURTH_FORM_GENERATE_REPORT,
            status: IN_PROGRESS,
            formName: FOURTH_FORM_NAME,
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
        <Typography>Phone: {phone} </Typography>
        <Typography>Email: {email} </Typography>
      </Box>
      <DebtCollectorBox>
        <Typography>{dcInfo[0].dcName} </Typography>
        <Typography>{dcInfo[0].dcStreet} </Typography>
        <Typography>
          {dcInfo[0].dcCity}, {dcInfo[0].dcState} {dcInfo[0].dcZipCode}
        </Typography>
      </DebtCollectorBox>
      <Box>
        <MainHeading variant="h4" sx={{ mb: 2 }}>
          UNITED STATES DISTRICT COURT EASTERN DISTRICT OF{' '}
          {dcInfo[0].dcState.toUpperCase()}
        </MainHeading>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <LeftBox>
            <Typography>{fullName}</Typography>
            <Typography sx={{ textAlign: 'right', mb: 2 }}>Plantiff</Typography>
            <Typography sx={{ mb: 1 }}>Company</Typography>
            <Box sx={{ mb: 4 }}>
              <Typography>{companyNames[0].toUpperCase()}</Typography>
              {companyNames[1] && (
                <Typography>{companyNames[1].toUpperCase()}</Typography>
              )}
              {companyNames[2] && (
                <Typography>{companyNames[2].toUpperCase()}</Typography>
              )}
            </Box>
            <Typography sx={{ mb: 1 }}>Debt Colletcors</Typography>
            <Typography>{dcInfo[0].dcName.toUpperCase()} </Typography>
            <Typography>
              {dcInfo[1] && dcInfo[1].dcName.toUpperCase()}
            </Typography>
            <Typography>
              {dcInfo[2] && dcInfo[2].dcName.toUpperCase()}
            </Typography>
            <Typography>
              {dcInfo[3] && dcInfo[3].dcName.toUpperCase()}
            </Typography>
            <Typography>
              {dcInfo[4] && dcInfo[4].dcName.toUpperCase()}
            </Typography>
            <Typography>
              {dcInfo[5] && dcInfo[5].dcName.toUpperCase()}
            </Typography>
            <Typography sx={{ textAlign: 'right', mt: 2 }}>
              Defendents
            </Typography>
          </LeftBox>
          <RightBox>
            <Typography sx={{ mb: 4 }}>Case No. : ______________</Typography>
            <Typography sx={{ mb: 12 }}>
              COMPLAINT FOR VIOLATION OF THE FAIR CREDIT REPORTING ACT UNDER
              1.15 U.S.C. §1681
            </Typography>
            <Typography>DEMAND FOR A JURY TRIAL</Typography>
          </RightBox>
        </Box>
        <Typography>
          This COMPLAINT FOR VIOLATION OF THE FAIR CREDIT REPORTING ACT UNDER
          1.15 U.S.C. §1681 is respectfully submitted to the United States
          District Court, Eastern District of {dcInfo[0].dcState}, for
          consideration that there may be no rights that will be continued to be
          prejudiced as a result of the wanton violation of Plaintiff’s
          statutorily protected rights under the Fair Credit Reporting Act by
          the Defendants.
        </Typography>
        <MainHeading variant="h4" sx={{ mb: 2, mt: 10 }}>
          DECLARATION
        </MainHeading>
        <Typography>
          I
          <BoldText sx={{ display: 'inline' }} variant="body1">
            {fullName}
          </BoldText>
          , do hereby state and declare as follows: That I am the Plaintiff in
          the above stated action and should I be required by the Court, I will
          thereby offer my Declaration in lieu of my personal testimony, and I
          submit the hereinafter Declaration pursuant to my personal knowledge
          of the facts and circumstances alleged herein. As Plaintiff, I
          respectfully submit the following Points and Authorities in support of
          my
          <BoldText sx={{ display: 'inline' }} variant="body1">
            COMPLAINT FOR VIOLATION OF THE FAIR CREDIT REPORTING ACT UNDER 1.15
            U.S.C. §1681
          </BoldText>
          with demand for damages, attorneys’ fees and costs.
        </Typography>
        <Sign sx={{ mt: 12 }}>{fullName}</Sign>
        <MainHeading variant="h4" sx={{ mb: 2, mt: 10 }}>
          NATURE OF THE COMPLAINT
        </MainHeading>
        <Typography>
          1. This is a civil action brought under the Fair Credit Reporting Act
          (“FCRA”), 15 U.S.C. §1681 et. Seq.
        </Typography>
        <MainHeading variant="h4" sx={{ mb: 2, mt: 2 }}>
          JURISDICTION AND VENUE
        </MainHeading>
        <Typography sx={{ mb: 2 }}>
          2. Jurisdiction is vested before the United States District Court
          pursuant to 15 U.S.C. § 1681p.
        </Typography>
        <Typography>
          3. Venue is properly laid at the Eastern District of{' '}
          {dcInfo[0].dcState}
          where Plaintiff is a habitual resident.
        </Typography>
        <MainHeading variant="h4" sx={{ mb: 2, mt: 2 }}>
          PARTIES
        </MainHeading>
        <Typography sx={{ mb: 2 }}>
          4. Plaintiff Michael Brown (“Plaintiff”) is a consumer and natural
          person residing in the State of {dcInfo[0].dcState}.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          5. Defendant Equifax Information Services, LLC (“Equifax”) is a
          consumer reporting agency as defined by 15 U.S.C. § 1681a(f) and
          conducts substantial and regular business activities in this judicial
          district. Equifax is a Georgia Corporation registered to do business
          in the State of {dcInfo[0].dcState}.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          6. Defendant Transunion, LLC (“Transunion”) is a consumer reporting
          agency as defined by 15 U.S.C. § 1681a(f) and conducts substantial and
          regular business activities in this judicial district. Transunion is a
          Delaware Corporation registered to do business in the State of
          {dcInfo[0].dcState}.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          7. Defendant Experian Information Solutions, Inc. (“Experian”) is a
          consumer reporting agency as defined by 15 U.S.C. § 1681a(f) and
          conducts substantial and regular business activities in this judicial
          district. Experian is an Ohio Corporation registered to do business in
          the State of {dcInfo[0].dcState}.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          8. Defendant DNF Associates LLC (“DNF”) is a Debt Collector according
          to 15 U.S.C. §1692a(6).
        </Typography>
        <Typography sx={{ mb: 2 }}>
          9. Defendant DNF is a “user of consumer reports” and “furnisher of
          information to consumer reporting agencies” as those terms are defined
          by the 15 U.S.C. §1681s-2.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          10. Defendant Credit Collection Services (“CCS”) is a Debt Collector
          according to 15 U.S.C. §1692a(6).
        </Typography>
        <Typography sx={{ mb: 2 }}>
          11. Defendant CCS is a “user of consumer reports” and “furnisher of
          information to consumer reporting agencies” as those terms are defined
          by the 15 U.S.C. §1681s-2.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          12. Defendant Caine and Weiner (“CW”) is a Debt Collector according to
          15 U.S.C. §1692a(6).
        </Typography>
        <Typography sx={{ mb: 2 }}>
          13. Defendant CW is a “user of consumer reports” and “furnisher of
          information to consumer reporting agencies” as those terms are defined
          by the 15 U.S.C. §1681s-2.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          14. Defendant Sunrise Credit Services (“Sunrise”) is a Debt Collector
          according to 15 U.S.C. §1692a(6).
        </Typography>
        <Typography sx={{ mb: 2 }}>
          15. Defendant Sunrise is a “user of consumer reports” and “furnisher
          of information to consumer reporting agencies” as those terms are
          defined by the 15 U.S.C. §1681s-2.
        </Typography>
        <MainHeading variant="h4" sx={{ mb: 2, mt: 2 }}>
          FACTUAL BACKGROUND
        </MainHeading>
        <Typography sx={{ mb: 2 }}>
          16. On or about May 5, 2020, Plaintiff disputed the accuracy of the
          reporting of the DNF account reported by Equifax, Transunion and
          Experian (“Bureaus”). The Bureaus did not satisfy their duties,
          failing to follow reasonable procedures to assure maximum possible
          accuracy of the information in consumer reports, as required under 15
          U.S.C. §1681e(b).
        </Typography>
        <Typography sx={{ mb: 2 }}>
          17. Plaintiff repeatedly asked for a reinvestigation and copies of the
          Automated Credit Dispute Verification (“ACDVs”) in his credit files.
          Equifax did not satisfy its duties, failing to comply with the
          reinvestigation requirements in 15 U.S.C. §1681i. Equifax also did not
          satisfy its duties, failing to provide Plaintiff his credit file
          pursuant to 15 U.S.C. §1681g.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          18. Plaintiff repeatedly asked for a reinvestigation and copies of the
          ACDVs in his credit files. Transunion did not satisfy its duties,
          failing to comply with the reinvestigation requirements in 15 U.S.C.
          §1681i. Transunion also did not satisfy its duties, failing to provide
          Plaintiff his credit file pursuant to U.S.C. §1681g.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          19. Plaintiff repeatedly asked for a reinvestigation and copies of the
          ACDVs in his credit files. Experian did not satisfy its duties,
          failing to comply with the reinvestigation requirements under 15
          U.S.C. §1681i. Experian also did not satisfy its duties, failing to
          provide Plaintiff his credit file pursuant to 15 U.S.C. §1681g.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          20. Defendant DNF violation of the Fair Credit Reporting Act has
          harmed the Plaintiff by, inter alia damaging his credit rating and
          reputation.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          21. Defendant DNF violation of the Fair Credit Reporting Act was
          intentional or reckless, and done without any regard for whether it
          had any right to view Plaintiff’s credit reports.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          22. Defendant DNF failed to report the correct balance owed and failed
          to report the correct status of the account. Defendant DNF failed to
          satisfy its duty under FCRA, 15 USC 1681s-2(b) in updating incomplete
          or inaccurate information it previously reported to Credit Reporting
          Agencies upon receipt of a notice from the Credit Reporting Agencies
          that a consumer disputed the accuracy of the previously reported
          information.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          23. Defendant CCS failed to report accurate and complete payment
          history. On or about April 2022, Plaintiff disputed the date the
          account was opened. Defendant CCS failed to satisfy its duty under
          FCRA, 15 USC 1681s-2(b) in updating incomplete or inaccurate
          information it previously reported to Credit Reporting Agencies upon
          receipt of a notice from the Credit Reporting Agencies that a consumer
          disputed the accuracy of the previously reported information.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          24. Defendant CW failed to report accurate information to the Bureaus.
          The account balance is reported as zero and the account is being
          reported as an active collection account. Defendant CW failed to
          satisfy its duty under FCRA, 15 USC 1681s-2(b) in updating incomplete
          or inaccurate information it previously reported to Credit Reporting
          Agencies upon receipt of a notice from the Credit Reporting Agencies
          that a consumer disputed the accuracy of the previously reported
          information.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          25. Defendant Sunrise failed to report accurate information to the
          Bureaus. The account balance is reported as zero and the account is
          being reported as an active collection account. Defendant Sunrise
          failed to satisfy its duty under FCRA, 15 USC 1681s-2(b) of updating
          incomplete or inaccurate information it previously reported to Credit
          Reporting Agencies upon receipt of a notice from the Credit Reporting
          Agencies that a consumer disputed the accuracy of the previously
          reported information.
        </Typography>
        <MainHeading variant="h4" sx={{ mb: 2, mt: 2 }}>
          FIRST CLAIM FOR RELIEF VIOLATION OF FCRA – 15 U.S.C. §1681
        </MainHeading>
        <Typography sx={{ mb: 2 }}>
          26. Defendants Equifax, Transunion and Experian negligently failed to
          comply with the requirements imposed under the FCRA, including but not
          limited to: a. failing to follow reasonable procedures to assure
          maximum possible accuracy of the information in consumer reports as
          required under 15 U.S.C. §1681e(b); b. failing to comply with the
          reinvestigation requirements in 15 U.S.C. §1681i; c. providing
          Plaintiffs’ credit file to companies without determining whether these
          companies had a permissible purpose to obtain Plaintiffs’ credit file
          pursuant to 15 U.S.C. §1681b; and d. failing to provide Plaintiff
          their credit file pursuant to 15 U.S.C. §1681g
        </Typography>
        <Typography sx={{ mb: 2 }}>
          27. As a result of Defendants violations of the FCRA, Plaintiff
          suffered, continues to suffer and will suffer future damages, worry,
          mental anguish, besmirched reputation, distress and frustration, all
          to his damages, in an amount to be determined by the jury.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          28. Plaintiff is entitled to actual damages in an amount to be proven
          in trial and determined by the jury.
        </Typography>
        <MainHeading variant="h4" sx={{ mb: 2, mt: 2 }}>
          SECOND CLAIM FOR RELIEF VIOLATION OF FCRA – 15 U.S.C. §1681
        </MainHeading>
        <Typography sx={{ mb: 2 }}>
          29. Defendants DNF, CCS, CW and Sunrise willfully failed to comply
          with the requirements imposed under the FCRA, 15 U.S.C. §1681 et seq.,
          including but not limited to: failing to comply with reporting correct
          information after notice and confirmation of errors, as required by 15
          U.S.C. §1681s-2(b).
        </Typography>
        <Typography sx={{ mb: 2 }}>
          30. As a result of Defendants’ violations of the FCRA, Plaintiff has
          suffered, continues to suffer, and will suffer future damages, worry,
          mental anguish, besmirched reputation, distress and frustration to her
          damages, in an amount to be determined by the jury.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          31. Plaintiff is entitled to punitive damages in an amount to be
          determined by the jury.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          32. Plaintiff is entitled to actual damages in an amount to be proven
          in trial and determined by the jury in additional to any statutory
          damages in an amount to be determined by the Court.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          33. Plaintiff is entitled to legal fees including court costs,
          pursuant to 15 U.S.C. §1681(o).
        </Typography>
        <MainHeading variant="h4" sx={{ mb: 2, mt: 2 }}>
          RELIEFS SOUGHT
        </MainHeading>
        <Typography sx={{ mb: 2 }}>
          34. On Plaintiff’s First Claim for Relief: a. Actual Damages in an
          amount to be determined by the jury; b. Punitive damages in an amount
          to be determined by the jury; c. Statutory damages including attorney
          fees as determined by the court; and d. Court Costs.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          35. On Plaintiff’s Second Claim for Relief: a. Actual Damages in an
          amount to be determined by the jury; b. Punitive damages in an amount
          to be determined by the jury; c. Statutory damages including attorney
          fees as determined by the court; and d. Court Costs.
        </Typography>
        <MainHeading variant="h4" sx={{ mb: 2, mt: 2 }}>
          CONCLUSION
        </MainHeading>
        <Typography sx={{ mb: 2 }}>
          WHEREFORE, premises considered, Plaintiff Michael Brown respectfully
          request that:
        </Typography>
        <Typography sx={{ mb: 2 }}>
          36. For such violation, the Defendants be made liable to the Plaintiff
          for actual damages, costs, and attorney’s fees, pursuant to 15 U.S.C.
          §1681o; and
        </Typography>
        <Typography sx={{ mb: 2 }}>
          37. For their willful violations of the Fair Credit Reporting Act, the
          Defendants be made liable to the Plaintiff for actual damages,
          statutory damages of up to $1,000, punitive damages, costs, and
          attorney’s fees pursuant to 15 U.S.C. § 1681n.
        </Typography>
        <MainHeading variant="h4" sx={{ mb: 2, mt: 2 }}>
          DECLARATION AGAINST PERJURY
        </MainHeading>
        <Typography sx={{ mb: 2 }}>
          I declare under penalty of perjury pursuant to the laws of the State
          of {dcInfo[0].dcState} that the foregoing above is true and correct
          based on my own personal knowledge of the facts in question. This is
          executed on the 4 th day of April, 2023 in{' '}
          {dcInfo[0].dcState.toUpperCase()}.
        </Typography>
        <Typography sx={{ mb: 8, mt: 4 }}>Respectfully submitted,</Typography>
        <Sign>{fullName}</Sign>
      </Box>
      <Divider sx={{ my: 10 }} />
      <Box>
        <Typography>{fullName} </Typography>
        <Typography>{street} </Typography>
        <Typography>
          {city}, {state} {zipCode}
        </Typography>
        <Typography>Phone: {phone} </Typography>
        <Typography>Email: {email} </Typography>
      </Box>
      <DebtCollectorBox>
        <Typography>{dcInfo[0].dcName} </Typography>
        <Typography>{dcInfo[0].dcStreet} </Typography>
        <Typography>
          {dcInfo[0].dcCity}, {dcInfo[0].dcState} {dcInfo[0].dcZipCode}
        </Typography>
      </DebtCollectorBox>
      <Box>
        <MainHeading variant="h4" sx={{ mb: 2 }}>
          UNITED STATES DISTRICT COURT EASTERN DISTRICT OF{' '}
          {dcInfo[0].dcState.toUpperCase()}
        </MainHeading>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <LeftBox>
            <Typography>{fullName}</Typography>
            <Typography sx={{ textAlign: 'right', mb: 2 }}>Plantiff</Typography>
            <Typography sx={{ mb: 1 }}>Company</Typography>
            <Box sx={{ mb: 4 }}>
              <Typography>{companyNames[0].toUpperCase()}</Typography>
              {companyNames[1] && (
                <Typography>{companyNames[1].toUpperCase()}</Typography>
              )}
              {companyNames[2] && (
                <Typography>{companyNames[2].toUpperCase()}</Typography>
              )}
            </Box>
            <Typography sx={{ mb: 1 }}>Debt Colletcors</Typography>
            <Typography>{dcInfo[0].dcName.toUpperCase()} </Typography>
            <Typography>
              {dcInfo[1] && dcInfo[1].dcName.toUpperCase()}
            </Typography>
            <Typography>
              {dcInfo[2] && dcInfo[2].dcName.toUpperCase()}
            </Typography>
            <Typography>
              {dcInfo[3] && dcInfo[3].dcName.toUpperCase()}
            </Typography>
            <Typography>
              {dcInfo[4] && dcInfo[4].dcName.toUpperCase()}
            </Typography>
            <Typography>
              {dcInfo[5] && dcInfo[5].dcName.toUpperCase()}
            </Typography>
            <Typography sx={{ textAlign: 'right', mt: 2 }}>
              Defendents
            </Typography>
          </LeftBox>
          <RightBox>
            <Typography sx={{ mb: 4 }}>Case No. : ______________</Typography>
            <Typography sx={{ mb: 12 }}>
              COMPLAINT FOR VIOLATION OF THE FAIR CREDIT REPORTING ACT UNDER
              1.15 U.S.C. §1681
            </Typography>
            <Typography>DEMAND FOR A JURY TRIAL</Typography>
          </RightBox>
        </Box>
        <MainHeading variant="h4" sx={{ mb: 2, mt: 10 }}>
          PROOF OF SERVICE
        </MainHeading>
        <Typography sx={{ mb: 2 }}>
          I
          <BoldText sx={{ display: 'inline' }} variant="body1">
            {fullName}
          </BoldText>
          , do swear or declare that on this date,
          <BoldText sx={{ display: 'inline' }} variant="body1">
            {today.toLocaleDateString()}
          </BoldText>
          , as required under {dcInfo[0].dcState} Code of Civil Procedure, I
          have served the enclosed
          <BoldText sx={{ display: 'inline' }} variant="body1">
            COMPLAINT FOR VIOLATION OF THE FAIR CREDIT REPORTING ACT UNDER 1.15
            U.S.C. §1681
          </BoldText>
          on each party to the above proceeding or that party’s counsel, and on
          every other person required to be served.
        </Typography>
        <Typography>
          The name and addresses of those served are as follows:
        </Typography>
        <Box>
          <Typography sx={{ my: 2 }}>
            <BoldText variant="body1">
              1. {dcInfo[0].dcName.toUpperCase()}
            </BoldText>
            {dcInfo[0].dcStreet}, {dcInfo[0].dcCity}, {dcInfo[0].dcState},
            {dcInfo[0].dcZipCode}
          </Typography>
          {dcInfo[1] && (
            <Typography sx={{ my: 2 }}>
              <BoldText variant="body1">
                2. {dcInfo[1].dcName.toUpperCase()}
              </BoldText>
              Insert Address
            </Typography>
          )}
          {dcInfo[2] && (
            <Typography sx={{ my: 2 }}>
              <BoldText variant="body1">
                3. {dcInfo[2].dcName.toUpperCase()}
              </BoldText>
              Insert Address
            </Typography>
          )}
          {dcInfo[3] && (
            <Typography sx={{ my: 2 }}>
              <BoldText variant="body1">
                4. {dcInfo[3].dcName.toUpperCase()}
              </BoldText>
              Insert Address
            </Typography>
          )}
          {dcInfo[4] && (
            <Typography sx={{ my: 2 }}>
              <BoldText variant="body1">
                5. {dcInfo[4].dcName.toUpperCase()}
              </BoldText>
              Insert Address
            </Typography>
          )}
          {dcInfo[5] && (
            <Typography sx={{ my: 2 }}>
              <BoldText variant="body1">
                6. {dcInfo[5].dcName.toUpperCase()}
              </BoldText>
              Insert Address
            </Typography>
          )}
        </Box>
        <Box>
          <Typography sx={{ my: 2 }}>
            <BoldText sx={{ display: 'inline' }} variant="body1">
              [ ] (By U.S. Mail)
            </BoldText>
            I deposited such envelope in the mail at {dcInfo[0].dcCity},{' '}
            {dcInfo[0].dcState} with postage thereon fully prepaid. I am readily
            familiar with the regular and customary business practice of this
            office in which mail is duly deposited in the United States Mail at
            {today.toLocaleDateString()}, in {dcInfo[0].dcState} on the date
            that it is mailed. Under the practice it would be deposited with the
            U.S. Postal Service on that same day with postage thereon fully
            prepaid at
            {dcInfo[0].dcCity}, {dcInfo[0].dcState} in the ordinary course of
            business. I am aware that on motion of the party served, service is
            presumed invalid if postal cancellation date or postage meter date
            is more than one day after date of deposit for mailing in affidavit.
          </Typography>
          <Typography sx={{ my: 2 }}>
            <BoldText sx={{ display: 'inline' }} variant="body1">
              [ ] (By Personal Service)
            </BoldText>
            I caused such envelope to be delivered by hand via messenger service
            to the address above;
          </Typography>
          <Typography sx={{ my: 2 }}>
            <BoldText sx={{ display: 'inline' }} variant="body1">
              [ ] (By Facsimile)
            </BoldText>
            I served a true and correct copy by facsimile during regular
            business hours to the number(s) listed above. Said transmission was
            reported complete and without error.
          </Typography>
          <Typography sx={{ my: 2 }}>
            <BoldText sx={{ display: 'inline' }} variant="body1">
              [ ] (By E-mail)
            </BoldText>
            I served a true and correct copy by e-mail during regular business
            hours to the e-mail addresses listed above. Said transmission was
            reported complete and successful.
          </Typography>
        </Box>
        <Typography>
          I declare under penalty of perjury that the foregoing is true and
          correct. Executed on {today.toLocaleDateString()}.
        </Typography>
        <Sign sx={{ mt: 12, textAlign: 'center' }}>(Signature)</Sign>
      </Box>
    </GenearteReportBox>
  );
};

export default memo(forwardRef<IStepRef>(GenerateReport));
