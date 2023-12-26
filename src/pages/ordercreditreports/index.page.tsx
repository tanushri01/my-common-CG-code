/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';

import { Box, Typography } from '@/components';
import { ORDER_CREDIT_REPORTS } from '@/constant';
import Layout from '@/layout';
import { CustomContainer } from '@/styles';
import Heading from '@/components/heading';

const OrderCreditReports = () => (
  <Box sx={{ mb: 6, mt: 4 }}>
    <CustomContainer>
      <Heading title={ORDER_CREDIT_REPORTS} subTitle={ORDER_CREDIT_REPORTS} />
      <Typography sx={{ mb: 2 }}>
        You can order you credit reports with IdentityIQ with credit scores with
        this link:
      </Typography>
      <Link
        href="https://www.identityiq.com/sc-securepreferred.aspx?offercode=431274WM"
        target="_blank"
      >
        https://www.identityiq.com/sc-securepreferred.aspx?offercode=431274WM
      </Link>
      <Typography sx={{ mb: 2, mt: 2 }}>or</Typography>
      <Typography sx={{ mb: 2 }}>
        Here’s how you can view{' '}
        <Link
          href="https://www.usatoday.com/money/blueprint/credit-score/how-to-get-your-free-credit-report/"
          target="_blank"
        >
          your free credit reports
        </Link>{' '}
        from the Annual Credit Report Request Service:
      </Typography>
      <Typography>- AnnualCreditReport.com</Typography>
      <Typography>- 1-877-322-8228</Typography>
      <Typography sx={{ mb: 4 }}>
        - Send an{' '}
        <Link
          href="https://www.consumer.ftc.gov/sites/www.consumer.ftc.gov/files/articles/pdf/pdf-0093-annual-report-request-form.pdf"
          target="_blank"
        >
          Annual Credit Report Request Form
        </Link>{' '}
        to
      </Typography>
      <Typography>Annual Credit Report Request Service</Typography>
      <Typography>P.O. Box 105281</Typography>
      <Typography>Atlanta, GA 30348-5281</Typography>
    </CustomContainer>
  </Box>
);

OrderCreditReports.getLayout = (page: JSX.Element) => (
  <Layout title={ORDER_CREDIT_REPORTS}>{page}</Layout>
);

export default OrderCreditReports;
