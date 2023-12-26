/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';

import { Typography } from '@/components';

import { BlogHeading, DescBox, ListBox } from './blogDesc.style';

const BlogDesc5 = () => (
  <DescBox>
    <Typography>
      Before the pandemic, consumers could only pull their credit reports for
      free once a year. But limited access is now a thing of the past.
    </Typography>
    <Typography>
      On Sept. 18, the three largest nationwide credit reporting agencies
      (NCRAs) — Equifax, Experian and TransUnion —{' '}
      <Link
        target="_blank"
        href="https://www.prnewswire.com/news-releases/equifax-experian-and-transunion-support-us-consumers-with-ongoing-availability-of-free-weekly-credit-reports-301931067.html"
      >
        announced
      </Link>{' '}
      some good news for consumers: each agency will permanently offer free
      credit reports once a week.
    </Typography>
    <Typography>
      The NCRAs, which are required by federal law to provide each person with a
      free annual report, began offering weekly access in 2020, in what they
      described as an effort to help consumers deal with pandemic-related
      financial hardships. They extended the offer multiple times, but it was
      set to expire at the end of 2023 until this most recent announcement.
    </Typography>
    <Typography>
      In their joint press release, the CEOs of the{' '}
      <Link
        target="_blank"
        href="https://www.usatoday.com/money/blueprint/credit-score/what-are-the-three-credit-bureaus/"
      >
        three credit bureaus
      </Link>{' '}
      said, “We recognize the important role that credit reports play in
      people’s financial lives and encourage consumers to regularly check their
      credit history.”
    </Typography>
    <Typography>
      In addition to helping consumers combat the rising occurrence of identity
      theft and data breaches, the announcement can serve as a timely reminder
      for federal student loan borrowers to review their credit reports before{' '}
      <Link
        target="_blank"
        href="https://www.usatoday.com/money/blueprint/student-loans/are-student-loans-on-hold/"
      >
        student loan forbearance
      </Link>{' '}
      ends in October.
    </Typography>
    <BlogHeading variant="h4">
      How can you get your free credit reports?
    </BlogHeading>
    <Typography>
      According to TransUnion’s second-quarter Consumer Pulse Study, 43% of
      people monitor their credit less than once a month. But pulling your
      reports more frequently can help you catch signs of fraud in a timely
      manner, dispute reporting errors and pinpoint areas for improvement in
      your credit scores.
    </Typography>
    <Typography>
      Here’s how you can view{' '}
      <Link
        target="_blank"
        href="https://www.usatoday.com/money/blueprint/credit-score/how-to-get-your-free-credit-report/"
      >
        your free credit reports
      </Link>{' '}
      from the Annual Credit Report Request Service:
    </Typography>
    <ListBox>AnnualCreditReport.com</ListBox>
    <ListBox>1-877-322-8228</ListBox>
    <ListBox>
      Send an{' '}
      <Link
        href="https://www.consumer.ftc.gov/sites/www.consumer.ftc.gov/files/articles/pdf/pdf-0093-annual-report-request-form.pdf"
        target="_blank"
      >
        Annual Credit Report Request Form
      </Link>{' '}
      to
    </ListBox>
    <Typography>Annual Credit Report Request Service </Typography>
    <Typography>P.O. Box 105281</Typography>
    <Typography>Atlanta, GA 30348-5281</Typography>
    <Typography>
      While credit reports are now easier to access, it can still be a challenge
      to{' '}
      <Link
        href="https://www.usatoday.com/money/blueprint/credit-score/how-to-check-your-credit-score/"
        target="_blank"
      >
        find your credit scores
      </Link>
      . Your creditor(s) may offer complimentary access to one of your scores,
      or you can use FICO’s free{' '}
      <Link
        href="https://www.myfico.com/fico-credit-score-estimator/estimator"
        target="_blank"
      >
        score estimator
      </Link>{' '}
      to narrow down the range your scores fall into. You can also sign up for
      free credit score monitoring through FICO and Experian.
    </Typography>
  </DescBox>
);

export default BlogDesc5;
