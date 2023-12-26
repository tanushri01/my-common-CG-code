import React, { ReactNode } from 'react';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { HOME, PRODUCT } from '@/constant';

interface IProps
  extends Readonly<{
    title: string;
    children: ReactNode;
  }> {}

/**
 * @component {Layout} - This is used for basic Layout.
 * @param {IProps} props
 * @return {JSX.Element}
 */
const Layout = ({ title, children }: IProps): JSX.Element => (
  <>
    <Header title={title} />
    <title>{title}</title>
    <main>{children}</main>
    <Footer isPadding={title === HOME || title === PRODUCT} />
  </>
);

export default Layout;
