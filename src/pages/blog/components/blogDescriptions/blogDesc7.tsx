/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { Typography } from '@/components';

import { BlogHeading, DescBox, ListBox } from './blogDesc.style';

const BlogDesc7 = () => (
  <DescBox>
    <Typography>
      Here are some of the most common violations of the Fair Debt Collection
      Practices Act (FDCPA) by debt collectors:
    </Typography>
    <ListBox>
      <Typography variant="h5">- Harassment: </Typography>
      Calling repeatedly or continuously with intent to annoy, abuse, or harass.
      Calling outside reasonable hours. Threatening violence or harm.
    </ListBox>
    <ListBox>
      <Typography variant="h5">- False statements: </Typography> Making false
      representations about the debt like incorrect amounts owed or consequences
      of non-payment.
    </ListBox>
    <ListBox>
      <Typography variant="h5">- Unfair practices</Typography>
      Publishing debtor's name on a "bad credit" list. Making threats not
      intended to be carried out. Using obscene language.
    </ListBox>
    <ListBox>
      <Typography variant="h5">- Deceptive practices: </Typography> Falsely
      implying they are attorneys or government representatives. Misrepresenting
      the legal status of a debt.
    </ListBox>
    <ListBox>
      <Typography variant="h5">- Unverified debts: </Typography> Continuing
      collection efforts without providing proof/verification of the debt if
      requested by the consumer.
    </ListBox>
    <ListBox>
      <Typography variant="h5">- Calling third parties: </Typography> Contacting
      consumer's employer, relatives, or other unauthorized third parties about
      the debt.
    </ListBox>
    <ListBox>
      <Typography variant="h5">- Failing to send notices: </Typography> Not
      providing proper written notices about the debt and debtor rights within 5
      days of first contact.
    </ListBox>
    <ListBox>
      <Typography variant="h5">- Calling after request to cease:</Typography>
      Continuing to call after receiving written cease and desist notice from
      consumer.
    </ListBox>
    <ListBox>
      <Typography variant="h5">- Unfair credit reporting: </Typography>{' '}
      Inaccurately reporting debts to credit bureaus that are in dispute.
      Failing to report payments.
    </ListBox>
    <ListBox>
      <Typography variant="h5">- Posing as an attorney: </Typography> Debt
      collector falsely claims to be an attorney who will take legal action
      without intending to do so.
    </ListBox>
    <ListBox>
      <Typography variant="h5">- Charging unlawful fees: </Typography>Trying to
      collect unauthorized or inflated fees not actually incurred.
    </ListBox>
    <Typography>
      Here are some of the common types of damages that may be awarded to
      plaintiffs for violations of the Fair Debt Collection Practices Act
      (FDCPA):
    </Typography>
    <BlogHeading>FDCPA Damages: </BlogHeading>
    <ListBox>
      <Typography variant="h5">- Actual damages: </Typography>Monetary losses
      resulting directly from the violation, like medical bills or lost wages.
    </ListBox>
    <ListBox>
      <Typography variant="h5">- Statutory damages: </Typography>Set amounts up
      to $1,000 for individual violations. May be higher for class actions.
    </ListBox>
    <ListBox>
      <Typography variant="h5">- Additional damages: </Typography>Up to $1,000
      for individual violations where the agency knowingly broke the law.
    </ListBox>
    <ListBox>
      <Typography variant="h5">- Attorney fees and costs: </Typography>Consumer
      has right to recover legal costs if violation is found.
    </ListBox>
    <Typography>
      So in summary, the FDCPA allows for actual, statutory, and punitive
      damages. The act also provides for consumers to recover legal costs if
      they can prove violations occurred.
    </Typography>
  </DescBox>
);

export default BlogDesc7;
