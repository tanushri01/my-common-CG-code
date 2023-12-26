/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { Box, Typography } from '@/components';
import { PRIVACY_POLICY } from '@/constant';
import Layout from '@/layout';
import { CustomContainer } from '@/styles';
import Heading from '@/components/heading';

import { PrivacyHeading } from './privacypolicy.style';

const PrivacyPolicy = () => (
  <Box sx={{ mb: 6, mt: 4 }}>
    <CustomContainer>
      <Heading title={PRIVACY_POLICY} subTitle={PRIVACY_POLICY} />
      <Typography sx={{ mb: 2 }}>Last Updated: September 7, 2023</Typography>
      <Typography>
        IAMPROSAY values the privacy of its users and operates in compliance
        with applicable privacy laws and regulations including the EU's General
        Data Protection Regulation (GDPR) and the California Consumer Privacy
        Act (CCPA). This Privacy Policy explains how we collect, use, share, and
        protect your personal information when you use our services.
      </Typography>
      <PrivacyHeading>Information We Collect: </PrivacyHeading>
      <Typography sx={{ mb: 2 }}>
        We collect the following categories of personal information about you:
      </Typography>
      <Typography>
        - Identity data like your name, email address, phone number, login
        credentials, and government IDs.
      </Typography>
      <Typography>
        - Financial information such as bank account details, credit card
        numbers, incomes, debts, expenses, payment history, and credit scores.
      </Typography>
      <Typography>
        - Transaction data including services purchased, billing details,
        timestamps, duration of use, and other transactional information.
      </Typography>
      <Typography>
        - Device and usage data like IP address, unique device IDs, browser
        type, operating system, and IAMPROSAY service usage metrics.
      </Typography>
      <Typography>
        - Location information if location services are enabled on your device.
      </Typography>
      <Typography>
        - Information from third-party sources like identity verification
        services and publicly available databases.
      </Typography>
      <Typography>
        - Any other information you choose to directly provide to us.
      </Typography>
      <PrivacyHeading>How We Use Information?</PrivacyHeading>
      <Typography sx={{ mb: 2 }}>
        We use your personal information in the following ways:
      </Typography>
      <Typography>- Provide, maintain, and improve our services.</Typography>
      <Typography>- Complete transactions and billing.</Typography>
      <Typography>
        - Perform identity verification and fraud prevention.
      </Typography>
      <Typography>- Respond to your inquiries and offer support.</Typography>
      <Typography>
        - Send you important information regarding our services, changes to
        terms, product updates, and other related information.
      </Typography>
      <Typography>
        - Provide customized content and recommendations based on your financial
        situation and goals.
      </Typography>
      <Typography>
        - Improve our services by analyzing usage data and trends.
      </Typography>
      <Typography>- Display targeted advertisements on our website.</Typography>
      <Typography>
        - Carry out other purposes disclosed at the time of collecting
        information and pursuant to your consent.
      </Typography>
      <PrivacyHeading>Sharing Information: </PrivacyHeading>
      <Typography sx={{ mb: 2 }}>
        We disclose your personal information to:{' '}
      </Typography>
      <Typography>
        - Service providers and partners who assist us in operating the
        IAMPROSAY platform and conducting business operations. This may include
        identity verification, fraud prevention, website hosting, data analysis,
        payment processing, order fulfillment, marketing, and legal services.
      </Typography>
      <Typography>
        - Law enforcement, government agencies, or authorized third parties when
        required to comply with legal process or obligations.
      </Typography>
      <Typography>
        - Prospective buyers and transferees during an actual or potential sale
        or transfer of all or part of our business operations.
      </Typography>
      <Typography>
        - Other third parties with your consent or direction to share your
        information.
      </Typography>
      <PrivacyHeading>Information Security: </PrivacyHeading>
      <Typography>
        We employ appropriate technical and organizational measures designed to
        protect user information. This includes limiting unauthorized access,
        maintaining data accuracy, securely storing data, encrypting personal
        information in transit and at rest, and requiring third party service
        providers to uphold similar security measures. While we strive to
        protect your personal information, no system can be completely secure,
        and we cannot guarantee the absolute security of your data.
      </Typography>
      <PrivacyHeading>Your Privacy Rights and Choices: </PrivacyHeading>
      <Typography sx={{ mb: 2 }}>
        You have certain choices regarding how we handle your information. You
        can:
      </Typography>
      <Typography>
        - Access, modify, delete, or restrict the processing of your personal
        data through your account settings or by contacting our support team.
      </Typography>
      <Typography>
        - Opt-out of receiving non-essential communications like promotional
        emails from us by following the unsubscribe link within the relevant
        communication.
      </Typography>
      <Typography>
        - Set your browser or device to reject cookies and similar tracking
        technologies.
      </Typography>
      <Typography>
        - Complain to your local data protection authority if you believe we
        have not complied with applicable privacy laws.
      </Typography>
      <PrivacyHeading>Contact Us </PrivacyHeading>
      <Typography sx={{ mb: 2 }}>
        If you have any questions or concerns about this Privacy Policy or our
        data practices, you can contact us at:
      </Typography>
      <Typography>IAMPROSAY Inc.</Typography>
      <Typography>support@iamprosay.com</Typography>
    </CustomContainer>
  </Box>
);

PrivacyPolicy.getLayout = (page: JSX.Element) => (
  <Layout title={PRIVACY_POLICY}>{page}</Layout>
);

export default PrivacyPolicy;
