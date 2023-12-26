import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { NextPage } from 'next';
import { SessionProvider } from 'next-auth/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { SnackbarProvider } from 'notistack';

import { lightTheme } from '@/theme';
import {
  MAX_SNACKBAR_AMOUNT,
  SNACKBAR_HORIZONTAL_ALIGNMENT,
  SNACKBAR_VERTICAL_ALIGNMENT,
} from '@/constant';
import { store } from '@/redux';
import { ApiHelper } from '@/helper';
import { AuthProvider } from '@/contexts';

import '../styles/global.css';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: JSX.Element) => ReactNode;
};

config.autoAddCss = false;
ApiHelper.responseHandler();

interface IProps extends AppProps {
  Component: NextPageWithLayout;
}

/**
 * App
 * @param {IProps} props
 * @return {JSX.Element}
 */
const App = (props: IProps): JSX.Element => {
  const { Component, pageProps } = props;
  const { session, ...restPageProps } = pageProps;
  const getLayout = Component.getLayout ?? ((page: JSX.Element) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <SessionProvider session={session}>
        <AuthProvider>
          <Provider store={store}>
            <SnackbarProvider
              maxSnack={MAX_SNACKBAR_AMOUNT}
              autoHideDuration={2000}
              preventDuplicate
              anchorOrigin={{
                vertical: SNACKBAR_VERTICAL_ALIGNMENT,
                horizontal: SNACKBAR_HORIZONTAL_ALIGNMENT,
              }}
            >
              <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                {getLayout(<Component {...restPageProps} />)}
              </ThemeProvider>
            </SnackbarProvider>
          </Provider>
        </AuthProvider>
      </SessionProvider>
    </>
  );
};

export default App;
