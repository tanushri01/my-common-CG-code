import React from 'react';
import dynamic from 'next/dynamic';

import { SIGN_UP } from '@/constant';
import Auth from '@/components/authentications';
import { AuthProvider } from '@/contexts';

const Layout = dynamic(() => import('../../layout'));

/**
 * @page {SignUp} - This page is used for user signup.
 * @return {JSX.Element}
 */
const SignUp = (): JSX.Element => <Auth title={SIGN_UP} />;

export default SignUp;

SignUp.getLayout = (page: JSX.Element) => (
  <AuthProvider>
    <Layout title={SIGN_UP}>{page}</Layout>
  </AuthProvider>
);
