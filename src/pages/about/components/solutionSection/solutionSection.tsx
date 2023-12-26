import React from 'react';
import Image from 'next/image';

import Heading from '@/components/heading';
import { SOLUTION } from '@/constant';
import { Box, Grid, Spacing, SpacingEnum } from '@/components';
import { ISolutionData, SolutionData } from '@/json';
import { StringHelper } from '@/helper';

import Card from './component/card';
import {
  SolutionBox,
  SolutionCardGrid,
  ImageLogoBox,
} from './solutionSection.style';
import CommonCreditLogoIcon from '../../../../assets/images/common/common-credit-logo-icon.png';

/**
 * @component {SolutionSection} This is Component for showing Solution Section.
 * @return {JSX.Element}
 */
const SolutionSection = (): JSX.Element => (
  <Box sx={{ position: 'relative' }}>
    <Heading title={SOLUTION} subTitle={SOLUTION} />
    <Spacing spacing={4} variant={SpacingEnum.BOTTOM} />
    <SolutionBox>
      <Grid container spacing={2}>
        <SolutionCardGrid item xs={12} sm={12} md={9} lg={7.5} xl={6}>
          {SolutionData.map((data: ISolutionData, index: number) => (
            <Card
              key={StringHelper.generateUID(data.title, index)}
              title={data.title}
              subTitle={data.subTitle}
              icon={data.icon}
              buttonText={data.buttonText}
              buttonUrl={data.buttonURL}
            />
          ))}
        </SolutionCardGrid>
      </Grid>
    </SolutionBox>
    <ImageLogoBox>
      <Image
        alt="Common-Credit-Logo-Icon"
        src={CommonCreditLogoIcon}
        width="75"
        height="70"
      />
    </ImageLogoBox>
  </Box>
);

export default SolutionSection;
