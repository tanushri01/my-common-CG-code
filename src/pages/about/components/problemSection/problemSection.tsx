import React from 'react';

import Heading from '@/components/heading';
import { PROBLEM } from '@/constant';
import { Box, Spacing, SpacingEnum } from '@/components';

import { ProblemBox } from './problemSection.style';
import TextSection from './component/textSection';
import ImageSection from './component/imageSection';

/**
 * @component {ProblemSection} This is Component for showing Problem Section.
 * @return {JSX.Element}
 */
const ProblemSection = (): JSX.Element => (
  <Box>
    <Heading title={PROBLEM} subTitle={PROBLEM} />
    <Spacing spacing={4} variant={SpacingEnum.BOTTOM} />
    <ProblemBox>
      <TextSection />
      <ImageSection />
    </ProblemBox>
  </Box>
);

export default ProblemSection;
