/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import { useRouter } from 'next/router';

import { Box } from '@/components';
import ChooseYourPackage from '@/components/chooseYouPackage';

import { IProductPageData, productPageData } from '@/json';
import { PRODUCT } from '@/constant';
import { ProductEnum } from '@/enum';

import Layout from '../../layout';
import HowItWorks from './components/howItWorks';
import TeamSection from './components/teamSection';
import BottomSection from './components/bottomSection';

/**
 * It is used to pre-generate static pages for dynamic routes.
 * @function getStaticPaths
 * @return {Promise<GetStaticPathsResult>}
 */
export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const pageNames = [
    ProductEnum.PRODUCT_1,
    ProductEnum.PRODUCT_2,
    ProductEnum.PRODUCT_3,
    ProductEnum.PRODUCT_4,
    ProductEnum.PRODUCT_5,
  ];
  const paths = pageNames.map((name: string) => ({ params: { id: name } }));
  return {
    paths,
    fallback: false,
  };
};

/**
 * It helps generates the HTML page on the build time.
 * @function getStaticProps
 * @param {GetStaticPropsContext} context
 * @return {Promise<GetStaticPropsResult<IProductPageData>>}
 */
export const getStaticProps = async (
  context: GetStaticPropsContext,
): Promise<GetStaticPropsResult<IProductPageData>> => {
  const { params } = context;
  const pageName = params?.id as string;
  const data = productPageData.find(
    (productPage: IProductPageData) => productPage.productId === pageName,
  );

  if (data) {
    return {
      props: {
        ...data,
      },
    };
  }

  return {
    notFound: true,
  };
};

/**
 * @page {Product} - This page is used for user Product page.
 * @param {PageData} props
 * @return {JSX.Element}
 */
const Product = (props: IProductPageData): JSX.Element => {
  const { teamSection, howItWorks, chooseYouPackage, bottomSection } = props;
  const { query } = useRouter();
  const { id } = query;

  return (
    <Box>
      <HowItWorks id={id as string} {...howItWorks} />
      <TeamSection {...teamSection} />
      <ChooseYourPackage
        id={id as string}
        packageData={chooseYouPackage}
        handlePlan={() => {}}
      />
      <BottomSection id={id as string} {...bottomSection} />
    </Box>
  );
};

Product.getLayout = (page: JSX.Element) => (
  <Layout title={PRODUCT}>{page}</Layout>
);

export default Product;
