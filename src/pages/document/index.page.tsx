import React, { useCallback } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import { Skeleton } from '@mui/material';
import { Box, Spacing, SpacingEnum } from '@/components';
import {
  FIRST_FORM_NAME,
  FOURTH_FORM_NAME,
  MY_DOCUMENT,
  SECOND_FORM_NAME,
  THIRD_FORM_NAME,
} from '@/constant';
import { CustomContainer } from '@/styles';
import Triangle from '@/components/triangle';
import { RoutePathEnum, TriangleIconSizeEnum } from '@/enum';
import { IMultistepFormResponse } from '@/interface';
import { StringHelper } from '@/helper';
import { AuthProvider } from '@/contexts';

import {
  ContentWrapper,
  ContentInnerWrapper,
  ContentCard,
  ImageBox,
  TriTypography,
  TriBox,
} from './document.style';
import { facCreatenewdocument, facInprogress } from '../../assets/icon';
import Document from '../../assets/images/pages/document/documents.png';
import { useDocumentController } from './document.controller';

const DocMultiLineText = dynamic(() => import('./components/docMultlineText'));
const Layout = dynamic(() => import('../../layout'));
const Heading = dynamic(() => import('../../components/heading'));

/**
 * @page {MyDocument} - This page is used for user document.
 * @return {JSX.Element}
 */
const MyDocument = (): JSX.Element => {
  const { getters, handlers } = useDocumentController();
  const {
    forms,
    usCourtForm,
    isLoading,
    firstFormLimit,
    secondFormLimit,
    thirdFormLimit,
    fourthFormLimit,
  } = getters;
  const { fetchCurrentForm } = handlers;

  const skeleton = useCallback(
    (length = 3) =>
      Array.from(Array(length)).map(() => (
        <>
          <Skeleton width={100} />
          <Skeleton width={150} sx={{ mb: 4 }} />
        </>
      )),
    [],
  );

  return (
    <ContentWrapper>
      <CustomContainer>
        <Heading title={MY_DOCUMENT} subTitle={MY_DOCUMENT} />
        <ContentInnerWrapper>
          <ContentCard>
            {forms && forms.length > 0 ? (
              <Box>
                <TriBox>
                  <Triangle
                    size={TriangleIconSizeEnum.SM}
                    iconName={facInprogress}
                  />
                  <TriTypography
                    color="primary"
                    variant="h5"
                    sx={{ fontWeight: 700 }}
                  >
                    In progress
                  </TriTypography>
                </TriBox>
                <Spacing variant={SpacingEnum.BOTTOM} spacing={3} />
                {!isLoading
                  ? forms.map((form: IMultistepFormResponse, index: number) => (
                      // eslint-disable-next-line react/jsx-indent
                      <Box key={StringHelper.generateUID(form.formName, index)}>
                        <DocMultiLineText
                          title={form.formName}
                          subTitle={`Started on ${form.createdAt}`}
                          form={fetchCurrentForm(form.formName)}
                          formId={form.formId as string}
                          activeSteps={form.activeStep}
                          subActiveSteps={form.subActiveStep}
                        />
                        <Spacing variant={SpacingEnum.BOTTOM} spacing={4} />
                      </Box>
                    ))
                  : skeleton()}
              </Box>
            ) : (
              <Box />
            )}
            <TriBox>
              <Triangle
                size={TriangleIconSizeEnum.SM}
                iconName={facCreatenewdocument}
              />
              <TriTypography
                color="primary"
                variant="h5"
                sx={{ fontWeight: 700 }}
              >
                Create a New Document
              </TriTypography>
            </TriBox>
            <Spacing variant={SpacingEnum.BOTTOM} spacing={3} />
            <DocMultiLineText
              title={FIRST_FORM_NAME}
              subTitle="Use this document to respond to a debt collection lawsuit"
              form={RoutePathEnum.CREDIT_DISPUTE_LETTER}
              isDisabled={firstFormLimit}
            />

            <Spacing variant={SpacingEnum.BOTTOM} spacing={4} />
            <DocMultiLineText
              title={SECOND_FORM_NAME}
              subTitle="Use this document to force a debt lawsuit out of court."
              form={RoutePathEnum.INQUIRY_REMOVAL_LETTER}
              isDisabled={secondFormLimit}
            />
            <Spacing variant={SpacingEnum.BOTTOM} spacing={4} />
            <DocMultiLineText
              title={THIRD_FORM_NAME}
              subTitle="Use this document to respond to a collection letter pre-lawsuit."
              form={RoutePathEnum.BANKRUPTCY_REMOVAL_LETTER}
              isDisabled={thirdFormLimit}
            />
            <Spacing variant={SpacingEnum.BOTTOM} spacing={4} />
            {usCourtForm?.length > 0 && (
              <DocMultiLineText
                title={FOURTH_FORM_NAME}
                subTitle="Use this document to respond to a collection letter pre-lawsuit."
                form={RoutePathEnum.US_COURT_COMPLAINT}
                isDisabled={fourthFormLimit}
              />
            )}
          </ContentCard>
          <ImageBox>
            <Image alt="my-account" src={Document} />
          </ImageBox>
        </ContentInnerWrapper>
      </CustomContainer>
    </ContentWrapper>
  );
};

MyDocument.getLayout = (page: JSX.Element) => (
  <AuthProvider>
    <Layout title={MY_DOCUMENT}>{page}</Layout>
  </AuthProvider>
);

export default MyDocument;
