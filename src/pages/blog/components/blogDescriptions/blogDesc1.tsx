/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { Typography } from '@/components';
import { BlogHeading, DescBox, ListBox } from './blogDesc.style';

const BlogDesc1 = () => (
  <DescBox>
    <BlogHeading variant="h4"> Why sue yourself?</BlogHeading>
    <Typography>
      Here are some potential benefits of suing a debt collector or credit
      furnisher yourself:
    </Typography>
    <ListBox>
      <Typography variant="h5">1. </Typography> Save money on legal fees. If you
      sue without an attorney, you won't have to pay attorney fees which can be
      costly. Doing it yourself is free.
    </ListBox>
    <ListBox>
      <Typography variant="h5">2. </Typography> Learn the legal process. By
      going through the process of filing a lawsuit and representing yourself in
      court, you'll gain firsthand experience with the legal system. This can be
      empowering.
    </ListBox>
    <ListBox>
      <Typography variant="h5">3. </Typography> Get a sense of satisfaction.
      Taking legal action on your own behalf can provide a sense of pride and
      accomplishment. You'll know you stood up for your rights.
    </ListBox>
    <ListBox>
      <Typography variant="h5">4. </Typography> Potentially recover damages. If
      you win your case, you may be awarded monetary damages to compensate you
      for any losses or hardship caused by the debt collector or credit
      furnisher's actions. Any damages awarded would go directly to you rather
      than being split with an attorney.
    </ListBox>
    <ListBox>
      <Typography variant="h5">5. </Typography> Correct credit report errors.
      Suing a credit furnisher can be an effective way to get inaccurate
      information removed from your credit report if they refuse to correct it
      through normal dispute channels. Doing it pro se avoids attorney fees
      eating into any damages recovered.
    </ListBox>
    <ListBox>
      <Typography variant="h5">6. </Typography> Deter future violations. Your
      lawsuit may motivate the defendant and others to comply more strictly with
      consumer protection laws, preventing future violations against you and
      others.
    </ListBox>
  </DescBox>
);

export default BlogDesc1;
