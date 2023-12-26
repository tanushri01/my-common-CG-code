/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { Typography } from '@/components';

import { BlogHeading, DescBox, ListBox } from './blogDesc.style';

const BlogDesc3 = () => (
  <DescBox>
    <BlogHeading variant="h4">
      The Basics: What is a Credit Furnisher?
    </BlogHeading>
    <Typography>
      A credit furnisher is an entity or organization that provides data about
      consumers' credit behaviors to credit reporting agencies (also known as
      credit bureaus). These entities typically fall into one of the following
      categories:
    </Typography>
    <ListBox>
      <Typography variant="h5">Creditors and Lenders: </Typography> This
      category includes banks, credit card companies, mortgage lenders, and any
      entity that extends credit to consumers. When you borrow money or use
      credit, your payment history and account information are shared with
      credit reporting agencies.
    </ListBox>
    <ListBox>
      <Typography variant="h5">Service Providers: </Typography> Some businesses
      that provide services, such as telecommunications companies or utility
      providers, may report your payment history to credit bureaus. Late
      payments or non-payment of bills for services like internet, cable, or
      electricity can impact your credit.
    </ListBox>
    <ListBox>
      <Typography variant="h5">Debt Collection Agencies: </Typography> If your
      outstanding debt is transferred to a debt collection agency, they may
      furnish information about the debt to credit reporting agencies, which can
      negatively affect your credit score.
    </ListBox>
    <BlogHeading variant="h4">Why Credit Furnishers Matter</BlogHeading>
    <Typography>
      Credit furnishers play a pivotal role in shaping your credit history and
      credit score. Here's why they matter:
    </Typography>
    <ListBox>
      <Typography variant="h5">Building Your Credit History:</Typography> Every
      credit transaction you engage in, from paying your credit card bill to
      making on-time mortgage payments, is reported by credit furnishers to
      credit bureaus. This information is then used to compile your credit
      history, which is a record of your financial behavior.
    </ListBox>
    <ListBox>
      <Typography variant="h5">Impact on Credit Score: </Typography> Your credit
      score is a numerical representation of your creditworthiness. Credit
      furnishers significantly influence your credit score. Positive payment
      history can boost your score, while late payments, defaults, or accounts
      sent to collections can lower it.
    </ListBox>
    <ListBox>
      <Typography variant="h5">Lenders' Decision Making: </Typography> Lenders
      and creditors rely on the information provided by credit furnishers to
      assess the risk associated with lending to you. A positive credit history
      can make it easier to qualify for loans, secure lower interest rates, and
      obtain better financial terms.
    </ListBox>
    <BlogHeading variant="h4">Conclusion</BlogHeading>
    <Typography>
      Credit furnishers are the behind-the-scenes players that shape your credit
      profile, impacting your ability to secure loans, obtain favorable interest
      rates, and achieve your financial goals. Understanding their role and
      taking proactive steps to ensure accurate reporting is essential for
      maintaining a healthy credit history.
    </Typography>
    <Typography>
      By staying informed and vigilant, you can harness the power of credit
      furnishers to build a strong credit foundation and pave the way for a
      brighter financial future.
    </Typography>
  </DescBox>
);

export default BlogDesc3;
