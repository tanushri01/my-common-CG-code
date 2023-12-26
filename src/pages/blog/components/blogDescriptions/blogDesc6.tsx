/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { Typography } from '@/components';

import { BlogHeading, DescBox, ListBox } from './blogDesc.style';

const BlogDesc6 = () => (
  <DescBox>
    <Typography>
      Here are some of the most common violations of the Fair Credit Reporting
      Act (FCRA) by credit bureaus, lenders, and other entities:
    </Typography>
    <ListBox>
      <Typography variant="h5">- Not investigating disputes: </Typography>
      Failure to reasonably investigate consumer disputes regarding inaccurate
      or incomplete information on their credit report.
    </ListBox>
    <ListBox>
      <Typography variant="h5">- Inaccurate reporting: </Typography> Reporting
      of incorrect, unverified, or obsolete information that harms a consumer's
      creditworthiness.
    </ListBox>
    <ListBox>
      <Typography variant="h5">
        - Accessing credit reports without permission:{' '}
      </Typography>
      Accessing someone's credit report without proper authorization or
      permissible purpose.
    </ListBox>
    <ListBox>
      <Typography variant="h5">- Failure to disclose: </Typography> Not
      providing required disclosure that consumer's credit report is being
      accessed, or failing to disclose consumers' rights under the FCRA.
    </ListBox>
    <ListBox>
      <Typography variant="h5">- Mixed file errors: </Typography> Mixing
      information belonging to one consumer with another consumer's file due to
      insufficient identification procedures.
    </ListBox>
    <ListBox>
      <Typography variant="h5">- Outdated negative items: </Typography> Leaving
      adverse information like late payments or collections on credit report
      beyond the maximum reporting period.
    </ListBox>
    <ListBox>
      <Typography variant="h5">- Not notifying consumers: </Typography> Failure
      to notify consumer when information in report results in denial of credit
      or other negative actions.
    </ListBox>
    <ListBox>
      <Typography variant="h5">
        - Sharing reports with unauthorized parties:{' '}
      </Typography>
      Providing credit reports to unauthorized individuals like employers
      without consent.
    </ListBox>
    <ListBox>
      <Typography variant="h5">- Medical debt errors: </Typography> Reporting
      medical debts without noting the source of debt or before reasonable
      validation.
    </ListBox>
    <ListBox>
      <Typography variant="h5">- Opt-out violations: </Typography> Not honoring
      consumer requests to opt out of promotional inquiries or prescreened
      credit offers.
    </ListBox>
    <ListBox>
      <Typography variant="h5">- Improper use of credit scores: </Typography>{' '}
      Using credit scores for unauthorized purposes like setting insurance rates
      or making employment decisions.
    </ListBox>
    <Typography>
      Here are some of the common types of damages that may be awarded to
      plaintiffs for violations of the Fair Debt Collection Practices Act
      (FDCPA) and Fair Credit Reporting Act (FCRA):
    </Typography>
    <BlogHeading>FCRA Damages: </BlogHeading>
    <ListBox>
      <Typography variant="h5">- Actual damages: </Typography>Out-of-pocket
      losses from the FCRA violation. For example, lost job opportunity.
    </ListBox>
    <ListBox>
      <Typography variant="h5">- Statutory damages: </Typography>$100 to $1,000
      for violations related to credit reports. $1,000 for willful violations.
    </ListBox>
    <ListBox>
      <Typography variant="h5">- Punitive damages: </Typography>Awarded in cases
      of deliberate or reckless FCRA violations. No set limits.
    </ListBox>
    <ListBox>
      <Typography variant="h5">- Attorney fees and costs: </Typography>Provided
      for under the FCRA if the consumer prevails in a suit.
    </ListBox>
    <ListBox>
      <Typography variant="h5">- Recovery for emotional distress: </Typography>
      Damages awarded for mental anguish, stress, or other emotional troubles.
    </ListBox>
    <ListBox>
      <Typography variant="h5">- Corrective action: </Typography>Requires
      violators to remedy mistakes or inaccuracies in credit reports.
    </ListBox>
    <Typography>
      So in summary, the FCRA allows for actual, statutory, and punitive
      damages.
    </Typography>
  </DescBox>
);

export default BlogDesc6;
