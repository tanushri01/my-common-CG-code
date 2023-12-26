import React from 'react';
import dynamic from 'next/dynamic';

import { Box } from '@/components';
import { ABOUT } from '@/constant';

import AboutCompany from './components/aboutCompany';
import ProblemSection from './components/problemSection';
import SolutionSection from './components/solutionSection';
import BottomIcon from './components/bottomIcon';

const Layout = dynamic(() => import('../../layout'));

/**
 * @page {About} - This is about page.
 * @return {JSX.Element}
 */
const About = (): JSX.Element => (
  <Box>
    <AboutCompany />
    <ProblemSection />
    <SolutionSection />
    <BottomIcon />
  </Box>
);

About.getLayout = (page: JSX.Element) => <Layout title={ABOUT}>{page}</Layout>;

export default About;
