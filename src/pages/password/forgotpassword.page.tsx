import React from 'react';
import dynamic from 'next/dynamic';

import { FORGOT_PASSWORD } from '@/constant';
import PasswordRecovery from '@/components/passwordRecovery';
import { AuthProvider } from '@/contexts';

const Layout = dynamic(() => import('../../layout'));

/**
 * @page {ForgotPasword} - This page is used for forget password.
 * @return {JSX.Element}
 */
const ForgotPasword = (): JSX.Element => (
  <PasswordRecovery title={FORGOT_PASSWORD} />
);

export default ForgotPasword;

ForgotPasword.getLayout = (page: JSX.Element) => (
  <AuthProvider>
    <Layout title={FORGOT_PASSWORD}>{page}</Layout>
  </AuthProvider>
);
