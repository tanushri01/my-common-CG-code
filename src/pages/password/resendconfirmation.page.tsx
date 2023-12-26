import React from 'react';
import dynamic from 'next/dynamic';

import { RESEND_CONFIRMATION } from '@/constant';
import PasswordRecovery from '@/components/passwordRecovery';
import { AuthProvider } from '@/contexts';

const Layout = dynamic(() => import('../../layout'));

/**
 * @page {ResendConfirmation} - This page is used for Resend main instruction
 * @return {JSX.Element}
 */
const ResendConfirmation = (): JSX.Element => (
  <PasswordRecovery title={RESEND_CONFIRMATION} />
);

export default ResendConfirmation;

ResendConfirmation.getLayout = (page: JSX.Element) => (
  <AuthProvider>
    <Layout title={RESEND_CONFIRMATION}>{page}</Layout>
  </AuthProvider>
);
