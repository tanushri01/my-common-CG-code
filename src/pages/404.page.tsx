import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import NoResultSVG from '../assets/svg/no-result-found.svg';

import { Typography } from '@/components';
import {
  AuthContentWrapper,
  ImageBox,
  ContentBox,
  CustomContainer,
} from '@/styles';
import { NO_RESULT_FOUND } from '@/constant';

const Layout = dynamic(() => import('../layout'));

/**
 * @page {Page404} - This page is used for No Result Found.
 * @return {JSX.Element}
 */
const Page404 = (): JSX.Element => (
  <AuthContentWrapper>
    <CustomContainer>
      <ImageBox>
        <Image alt="no-result" src={NoResultSVG} />
      </ImageBox>
      <ContentBox>
        <Typography variant="h3" color="primary">
          No Results Found
        </Typography>
      </ContentBox>
    </CustomContainer>
  </AuthContentWrapper>
);

Page404.getLayout = (page: JSX.Element) => (
  <Layout title={NO_RESULT_FOUND}>{page}</Layout>
);

export default Page404;
