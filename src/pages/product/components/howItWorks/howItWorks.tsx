/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '@mui/material';

import { HOW_IT_WORK } from '@/constant';
import { CustomButtonBox, CustomContainer } from '@/styles';
import { Grid, Heading, PdfDialog, TriangleHeading } from '@/components';
import { StorageHelper, StringHelper } from '@/helper';
import { IHowItWorksTextSection } from '@/json';
import { LocalStorageEnum, ProductEnum, RoutePathEnum } from '@/enum';
import { US_COURT_FORM_DATA, useAppSelector } from '@/redux';

import {
  GetStartedBox,
  HowItWoksBox,
  HowItWoksOuterBox,
  HowItWorksWrapper,
  ImageInnerBox,
  ImageOuterBox,
  TextBox,
  TextSectionLeft,
  CustomLink,
} from './howItWorks.style';

interface IProps
  extends Readonly<{
    textSection: IHowItWorksTextSection[];
    imageUrl: string;
    id: string;
  }> {}

/**
 * @component {HowItWorks} This is Component for showing How It Works section.
 * @param {IProps} props
 * @return {JSX.Element}
 */
const HowItWorks = (props: IProps): JSX.Element => {
  const { imageUrl, textSection, id } = props;
  const [isToken, setIsToken] = useState<string>('');
  const [open, setOpen] = useState(false);
  const usCourtForm = useAppSelector(US_COURT_FORM_DATA);

  /**
   * For handling toggling of the pdf popup
   * @function handleToggle
   */
  const handleToggle = (): void => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  }, [open]);

  const generateUrl = (): string => {
    if (isToken) {
      switch (id) {
        case ProductEnum.PRODUCT_1: {
          return RoutePathEnum.CREDIT_DISPUTE_LETTER;
        }
        case ProductEnum.PRODUCT_2: {
          return RoutePathEnum.BANKRUPTCY_REMOVAL_LETTER;
        }
        case ProductEnum.PRODUCT_3: {
          return RoutePathEnum.INQUIRY_REMOVAL_LETTER;
        }
        case ProductEnum.PRODUCT_5: {
          const url =
            usCourtForm && usCourtForm.length !== 0
              ? RoutePathEnum.US_COURT_COMPLAINT
              : '#';
          return url;
        }
        default: {
          return RoutePathEnum.CREDIT_DISPUTE_LETTER;
        }
      }
    }
    return RoutePathEnum.SIGN_IN;
  };

  useEffect(() => {
    setIsToken(StorageHelper.getLocalStorage(LocalStorageEnum.TOKEN));
  }, []);

  const generateTextBox = (data: IHowItWorksTextSection, index: number) => {
    switch (data.title) {
      case 'We Also Offer': {
        return (
          <CustomLink
            href="https://calendly.com/iamprosay/30min"
            target="_blank"
            key={StringHelper.generateUID(data.subTitle, index)}
          >
            <TextBox key={StringHelper.generateUID(data.subTitle, index)}>
              <TriangleHeading
                title={data.title}
                subTitle={data.subTitle}
                iconName={data.icon}
              />
            </TextBox>
          </CustomLink>
        );
      }
      case 'Customers Buy Our Custom Designed Letters': {
        return (
          <>
            <TextBox
              sx={{ cursor: 'pointer' }}
              key={StringHelper.generateUID(data.subTitle, index)}
              onClick={handleToggle}
            >
              <TriangleHeading
                title={data.title}
                subTitle={data.subTitle}
                iconName={data.icon}
              />
            </TextBox>
            <PdfDialog handleClose={handleToggle} open={open} />
          </>
        );
      }

      default: {
        return (
          <TextBox key={StringHelper.generateUID(data.subTitle, index)}>
            <TriangleHeading
              title={data.title}
              subTitle={data.subTitle}
              iconName={data.icon}
            />
          </TextBox>
        );
      }
    }
  };

  return (
    <HowItWorksWrapper>
      <Heading title={HOW_IT_WORK} subTitle={HOW_IT_WORK} />
      <HowItWoksOuterBox>
        <CustomContainer>
          <HowItWoksBox container spacing={{ xl: 4, lgplus: 2, sm: 0, md: 0 }}>
            <Grid item xl={7} lgplus={6} md={6} sm={12}>
              <TextSectionLeft>
                {textSection.map(
                  (data: IHowItWorksTextSection, index: number) =>
                    generateTextBox(data, index),
                )}
                <GetStartedBox>
                  <Link href={generateUrl()}>
                    <CustomButtonBox
                      variant="contained"
                      disabled={
                        usCourtForm &&
                        usCourtForm.length === 0 &&
                        id === ProductEnum.PRODUCT_5
                      }
                    >
                      <Typography>Get Started</Typography>
                    </CustomButtonBox>
                  </Link>
                  {usCourtForm &&
                    usCourtForm.length === 0 &&
                    id === ProductEnum.PRODUCT_5 && (
                      <Typography
                        sx={{ width: '100%', mt: 2 }}
                        variant="caption"
                      >
                        Please fill "Violation Notice Letter" or "Bankruptcy
                        Removal Letter" first to fill this form.
                      </Typography>
                    )}
                </GetStartedBox>
              </TextSectionLeft>
            </Grid>
            <Grid item xl={5} lgplus={6} md={6} sm={12}>
              <ImageOuterBox>
                <ImageInnerBox>
                  <Image src={imageUrl} alt="Mobile" width={440} height={570} />
                </ImageInnerBox>
              </ImageOuterBox>
            </Grid>
          </HowItWoksBox>
        </CustomContainer>
      </HowItWoksOuterBox>
    </HowItWorksWrapper>
  );
};

export default HowItWorks;
