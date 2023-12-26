import React from 'react';

import { Box, Typography } from '@/components';
import { STEPS_TO_FCRA } from '@/constant';
import Layout from '@/layout';
import { CustomContainer } from '@/styles';
import Heading from '@/components/heading';

const StepsToFCRA = () => (
  <Box sx={{ mb: 6, mt: 4 }}>
    <CustomContainer>
      <Heading title={STEPS_TO_FCRA} subTitle={STEPS_TO_FCRA} />
      <Typography sx={{ mb: 2 }}>
        1. Get your IdentityIQ
        (https://www.identityiq.com/scsecurepreferred.aspx?offercode=431274WM)
        credit reports or freeannualcreditreports.com
      </Typography>
      <Typography>2. Identify the errors in your credit reports.</Typography>
      <Typography>3. Draft Violation Dispute Letters</Typography>
      <Typography>
        4. Wait for results of your Dispute Letters (30 days after receipt)
      </Typography>
      <Typography>5. Review Credit Reports</Typography>
      <Typography>
        6. If errors still exist Draft 2nd Violation Dispute Letters
      </Typography>
      <Typography>7. Receive credit reports</Typography>
      <Typography>8. Errors still exist, Time to Sue</Typography>
    </CustomContainer>
  </Box>
);

StepsToFCRA.getLayout = (page: JSX.Element) => (
  <Layout title={STEPS_TO_FCRA}>{page}</Layout>
);

export default StepsToFCRA;
