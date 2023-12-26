import React from 'react';
import Link from 'next/link';

import { Spacing, SpacingEnum, Typography } from '@/components';

import { BannerWrapper, CenterBox } from './banner.style';
import { CustomButtonBox } from '@/styles';

/**
 * @component {Banner} - This component is for showing Banner.
 * @return {JSX.Element}
 */
const Banner = (): JSX.Element => (
  <BannerWrapper>
    <CenterBox>
      <Typography variant="h1" sx={{ textTransform: 'uppercase' }}>
        Get Paid for the errors!
      </Typography>
      <Spacing spacing={2} variant={SpacingEnum.BOTTOM} />
      <Typography variant="h6">
        We help consumers know their rights and
      </Typography>
      <Spacing spacing={0.5} variant={SpacingEnum.BOTTOM} />
      <Typography variant="h6">Get paid for the violations</Typography>
      <CustomButtonBox variant="contained" sx={{ mt: 4 }}>
        <Link target="_blank" href="https://calendly.com/iamprosay/30min">
          Schedule a Consultation
        </Link>
      </CustomButtonBox>
    </CenterBox>
  </BannerWrapper>
);

export default Banner;
