import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

/**
 * Document page
 * @return {JSX.Element }
 */
const Document = (): JSX.Element => (
  <Html lang="en">
    <Head />
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
