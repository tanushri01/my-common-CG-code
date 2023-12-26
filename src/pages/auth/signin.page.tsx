import React from 'react';

import Auth from '@/components/authentications';
import Layout from '@/layout';
import { SIGN_IN } from '@/constant';
import { AuthProvider } from '@/contexts';

/**
 * @page {SignIn} - This page is used for user login.
 * @return {JSX.Element}
 */
const SignIn = (): JSX.Element => <Auth title={SIGN_IN} />;

export default SignIn;

SignIn.getLayout = (page: JSX.Element) => (
  <AuthProvider>
    <Layout title={SIGN_IN}>{page}</Layout>
  </AuthProvider>
);
