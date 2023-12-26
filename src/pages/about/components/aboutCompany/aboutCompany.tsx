import React from 'react';

import { ABOUT_COMPANY } from '@/constant';
import { Box, Spacing, SpacingEnum, Heading } from '@/components';

import { AboutBox } from './aboutCompany.style';
import TextSection from './component/textSection';
import ImageSection from './component/imageSection';

/**
 * @component {AboutCompany} This is Component for showing About Company.
 * @return {JSX.Element}
 */
const AboutCompany = (): JSX.Element => (
  <Box>
    <Spacing spacing={4} variant={SpacingEnum.BOTTOM} />
    <Heading title={ABOUT_COMPANY} subTitle={ABOUT_COMPANY} />
    <Spacing spacing={1} variant={SpacingEnum.BOTTOM} />
    <AboutBox>
      <TextSection />
      <ImageSection />
    </AboutBox>
  </Box>
);

export default AboutCompany;
