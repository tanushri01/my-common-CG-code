import React from 'react';
import Link from 'next/link';

import { Box, Typography } from '@/components';
import { STEPS_TO_FDCPA } from '@/constant';
import Layout from '@/layout';
import { CustomButtonBox, CustomContainer } from '@/styles';
import Heading from '@/components/heading';
import { RoutePathEnum } from '@/enum';

const StepsToFDCPA = () => (
  <Box sx={{ mb: 6, mt: 4 }}>
    <CustomContainer>
      <Heading title={STEPS_TO_FDCPA} subTitle={STEPS_TO_FDCPA} />
      <Typography sx={{ mb: 2 }}>
        1. Validate the Debt via letter or phone
      </Typography>
      <Typography>2. Identify the Violation </Typography>
      <Typography>3. Time to Sue. </Typography>
      <CustomButtonBox variant="contained" sx={{ mt: 4 }}>
        <Link href={RoutePathEnum.CREDIT_DISPUTE_LETTER}>
          <Typography>Get Started</Typography>
        </Link>
      </CustomButtonBox>
    </CustomContainer>
  </Box>
);

StepsToFDCPA.getLayout = (page: JSX.Element) => (
  <Layout title={STEPS_TO_FDCPA}>{page}</Layout>
);

export default StepsToFDCPA;
