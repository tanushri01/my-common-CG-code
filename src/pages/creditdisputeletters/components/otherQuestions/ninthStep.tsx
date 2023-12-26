import React from 'react';

import { Typography } from '@/components';
import { StepBox } from '@/styles';

/**
 * @page {NinthStep} - NinthStep for the form
 * @return {JSX.Element}
 */
const NinthStep = (): JSX.Element => (
  <StepBox>
    <Typography variant="h3" color="primary">
      After you dispute two times and the errors are not fixed, you may be able
      to sue, get compensated and have the errors fixed.
    </Typography>
  </StepBox>
);

export default NinthStep;
