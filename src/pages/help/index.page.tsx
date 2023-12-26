/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { Box, Typography } from '@/components';
import { HELP } from '@/constant';
import Layout from '@/layout';
import { CustomContainer } from '@/styles';

import { Question } from './help.style';
import Heading from '@/components/heading';

const Help = () => (
  <Box sx={{ mb: 6, mt: 4 }}>
    <CustomContainer>
      <Heading title={HELP} subTitle={HELP} />
      <Question>
        What is the basis for suing the credit bureaus and what are you rights?
      </Question>
      <Typography sx={{ mb: 2 }}>
        15 U.S.C. 1681i refers to Section 611 of the Fair Credit Reporting Act
        (FCRA). This section outlines the dispute process that consumers can use
        to fix inaccuracies or errors on their credit reports. Here are some key
        points about 15 U.S.C. 1681i:
      </Typography>
      <Typography>
        - It requires consumer reporting agencies (credit bureaus like Equifax,
        TransUnion, Experian) to conduct "reasonable" investigations when a
        consumer disputes the accuracy or completeness of information in their
        credit file.
      </Typography>
      <Typography>
        - The credit bureau generally has 30 days after receiving a dispute
        notice to finish its reinvestigation and report the results to the
        consumer. This may involve contacting the source that provided the
        disputed information.
      </Typography>
      <Typography>
        - If the disputed information is found to be inaccurate, incomplete, or
        unverifiable, the consumer reporting agency must promptly delete or
        modify the information on the consumer's credit report.
      </Typography>
      <Typography>
        - The credit bureau must also notify the consumer of the results of its
        reinvestigation in writing within 5 business days of finishing it.
      </Typography>
      <Typography>
        - Consumers have the right to also file a dispute statement on their
        report if they disagree with the outcome of the reinvestigation.
      </Typography>
      <Typography>
        - If the reinvestigation does not resolve the dispute, consumers may
        file a complaint with the Consumer Financial Protection Bureau or take
        the credit bureau to court within 2 years to enforce their rights under
        the FCRA.
      </Typography>
      <Typography>
        So in summary, 15 U.S.C. 1681i gives important rights and procedures for
        consumers to dispute credit report information and have it corrected
        through the reinvestigation process. It's a key FCRA provision for
        improving credit report accuracy.
      </Typography>
      <Question>What is the Fair Credit Reporting Act?</Question>
      <Typography sx={{ mb: 2 }}>
        FCRA stands for the Fair Credit Reporting Act. It is a federal law in
        the United States that regulates the collection, dissemination, and use
        of consumer credit information. Some key points about the FCRA:
      </Typography>
      <Typography>
        - Passed in 1970 and enforced by the Federal Trade Commission and
        Consumer Financial Protection Bureau.
      </Typography>
      <Typography>
        - Requires consumer reporting agencies (credit bureaus like Equifax,
        Experian, TransUnion) to adopt reasonable procedures to ensure maximum
        possible accuracy of consumer reports.
      </Typography>
      <Typography>
        - Consumer reporting agencies must provide consumers with access to
        their own credit files and information in the files.
      </Typography>
      <Typography>
        - Consumers have the right to dispute incomplete or inaccurate
        information in their credit reports. The credit bureau must investigate
        disputes unless they are deemed frivolous.
      </Typography>
      <Typography>
        - Limits the purposes for which consumer reports can be furnished, such
        as credit applications, employment background checks, insurance
        underwriting. Consumers must give consent for reports used for other
        purposes.
      </Typography>
      <Typography>
        - Provides guidance on permissible uses of credit reports, obsolete
        information, medical information, identity theft procedures, and other
        consumer protections.
      </Typography>
      <Typography>
        - Imposes civil liability on consumer reporting agencies or users of
        credit reports for negligent or willful noncompliance with provisions
        that result in consumer harm.
      </Typography>
      <Typography>
        In summary, the Fair Credit Reporting Act aims to promote the accuracy,
        fairness, and privacy of consumer credit information in the United
        States. It's a key law protecting consumer credit rights.
      </Typography>
      <Question>What is an ACDV?</Question>
      <Typography sx={{ mb: 2 }}>
        ACDV stands for Automated Consumer Dispute Verification. It is a process
        related to credit reporting and resolving disputes on credit reports:
      </Typography>
      <Typography>
        - ACDV is a standardized form that credit bureaus (Equifax, Experian,
        TransUnion) are required to use when investigating consumer credit
        report disputes.
      </Typography>
      <Typography>
        - When a consumer disputes an item on their credit report, the credit
        bureau sends an ACDV electronically to the source of that disputed
        information, such as a lender or collection agency.
      </Typography>
      <Typography>
        - The ACDV asks the source to verify if the disputed information is
        accurate or belongs to the consumer. The source is required to respond
        to the ACDV within 30 days.
      </Typography>
      <Typography>
        - Based on the ACDV response, the credit bureau will then update or
        remove disputed items on the consumer's credit report if they are found
        to be inaccurate or unverified.
      </Typography>
      <Typography>
        - The ACDV process is outlined in the Fair Credit Reporting Act and
        regulated by the Consumer Financial Protection Bureau to help consumers
        fix errors on their credit reports.
      </Typography>
      <Typography>
        - Consumers do not send ACDVs directly. They start the process by
        disputing to the credit bureau, which then sends an ACDV to verify the
        disputed data on the consumer's behalf.
      </Typography>
      <Typography>
        So in summary, ACDV is a key part of the consumer credit report dispute
        resolution process, providing a way for credit bureaus to investigate
        and validate credit information.
      </Typography>
      <Question>What is Waiver of Summons in US Court? </Question>
      <Typography sx={{ mb: 2 }}>
        A waiver of summons in the US court system refers to a process that
        allows a civil defendant to waive formal service of a summons and
        complaint. Here are some key details:
      </Typography>
      <Typography>
        - When a civil lawsuit is filed in federal court, the plaintiff
        typically has to arrange for the summons and complaint to be formally
        served on (delivered to) the defendant.
      </Typography>
      <Typography>
        - As an alternative, the plaintiff can send the defendant a request for
        waiver of service according to Rule 4(d) of the Federal Rules of Civil
        Procedure.
      </Typography>
      <Typography>
        - If the defendant agrees to waive service, they sign and return the
        waiver form to the plaintiff within a specified time frame (usually 30
        days). This spares them the formal service process.
      </Typography>
      <Typography>
        - By waiving service, the defendant gets additional time to respond to
        the complaint (usually 60 days instead of 21 days).
      </Typography>
      <Typography>
        - If the defendant fails to return the waiver, the plaintiff can then
        proceed with formal service and recover the costs of service from the
        defendant.
      </Typography>
      <Typography>
        - Waiver of service is advantageous because it simplifies the process
        and reduces costs for both parties when a defendant is cooperative.
        However, formal service may be required if the defendant avoids or
        declines the waiver.
      </Typography>
      <Typography>
        So in essence, it allows a civil defendant to volunteer to waive the
        formal service requirements in exchange for additional time to respond
        to a lawsuit. It's a commonly used option that facilitates cooperation
        and cost savings early in federal civil litigation.
      </Typography>
      <Question>What is 15 U.S.C. 1681e(b)? </Question>
      <Typography sx={{ mb: 2 }}>
        15 U.S.C. 1681e(b) is a section of the Fair Credit Reporting Act (FCRA)
        that sets requirements for consumer reporting agencies to follow
        reasonable procedures to ensure maximum possible accuracy of consumer
        reports. Here are some key details about 15 U.S.C. 1681e(b):
      </Typography>
      <Typography>
        - It states that consumer reporting agencies must "follow reasonable
        procedures to assure maximum possible accuracy of the information
        concerning the individual about whom the report relates."
      </Typography>
      <Typography>
        - This section creates a duty for CRAs to have reasonable procedures
        when preparing consumer reports to avoid errors and inaccuracies.
      </Typography>
      <Typography>
        - It balances the need for accuracy with the practical limitations of
        assembling comprehensive reports rapidly. Courts look at whether
        procedures are reasonable under the circumstances.
      </Typography>
      <Typography>
        - Violations of this section occur when a CRA issues a consumer report
        containing inaccurate information due to unreasonable procedures, such
        as failing to verify disputed information.
      </Typography>
      <Typography>
        - Consumers can potentially sue CRAs under 15 U.S.C. 1681n for willful
        violations or 15 U.S.C. 1681o for negligent violations.
      </Typography>
      <Typography>
        - CRAs can argue as an affirmative defense that any errors were
        accidental and occurred despite reasonable procedures.
      </Typography>
      <Typography>
        So in summary, 15 U.S.C. 1681e(b) is the core FCRA provision creating a
        legal duty for CRAs to adopt reasonable procedures that ensure maximum
        possible accuracy in consumer reports. It is a key basis for lawsuits
        alleging inaccurate credit reports or background checks.
      </Typography>
      <Question>What is the FDCPA?</Question>
      <Typography sx={{ mb: 2 }}>
        The FDCPA stands for the Fair Debt Collection Practices Act. It is a
        federal law in the United States that regulates the practices of debt
        collectors. Some key things to know about the FDCPA:
      </Typography>
      <Typography>
        - It applies to personal debts such as credit cards, medical bills,
        student loans, auto loans, etc. It does not cover business debts.
      </Typography>
      <Typography>
        - It prohibits certain abusive debt collection practices, like repeated
        phone calls intended to harass, obscene language, threats of violence,
        publishing the names of debtors, and false statements about the amount
        owed.
      </Typography>
      <Typography>
        - It requires that debt collectors provide written notice to the
        consumer within 5 days of initial contact about the amount of debt, the
        creditor's name, and information about disputing the debt.
      </Typography>
      <Typography>
        - It outlines consumers' rights, such as the right to request debt
        validation and verification, and to request that the collector cease
        communication.
      </Typography>
      <Typography>
        - It enables consumers to sue debt collectors who violate the FDCPA and
        to recover damages including compensation, attorneys fees, and costs.
      </Typography>
      <Typography>
        - The Federal Trade Commission and Consumer Financial Protection Bureau
        enforce the FDCPA when debt collectors engage in unfair, deceptive, or
        abusive acts.
      </Typography>
      <Typography>
        - Debt collectors who break the law can face fines or even criminal
        prosecution for intentional violations.
      </Typography>
      <Typography>
        So in short, the FDCPA provides important protections for consumers
        against harassment and abuse by debt collectors. Consumers should know
        their rights under this law.
      </Typography>
    </CustomContainer>
  </Box>
);

Help.getLayout = (page: JSX.Element) => <Layout title={HELP}>{page}</Layout>;

export default Help;
