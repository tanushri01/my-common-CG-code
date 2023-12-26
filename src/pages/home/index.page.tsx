import React from 'react';

import { Box } from '@/components';
import { HOME } from '@/constant';

import Layout from '../../layout';
import Banner from './components/banner';
import MarketSize from './components/marketSize';
import Product from './components/product';
import BottomSection from './components/bottomSection';
import Testimonials from './components/testimonial';

/**
 * @page {Home} - This page is used for user Home page.
 * @return {JSX.Element}
 */
const Home = (): JSX.Element => (
  <Box>
    <Banner />
    <MarketSize />
    <Testimonials />
    <Product />
    <BottomSection />
  </Box>
);

Home.getLayout = (page: JSX.Element) => <Layout title={HOME}>{page}</Layout>;

export default Home;
