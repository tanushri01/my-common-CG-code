/* eslint-disable react/no-unescaped-entities */
import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  quickMenu,
  quickLink,
  getInTouch,
  IGetInTouch,
  IQuickLink,
  IQuickMenu,
} from '@/json';
import { StringHelper } from '@/helper';
import { Grid, Spacing, SpacingEnum, Typography, Icon } from '@/components';
import { RoutePathEnum } from '@/enum';
import { CustomContainer } from '@/styles';
import { MINDPATH } from '@/constant';

import CommonCreditLogo from '../../assets/images/common/i-am-pro-say-logo.png';
import CommonCreditLogoIcon from '../../assets/images/common/common-credit-logo-icon.png';

import {
  CustomList,
  FooterMenu,
  FooterBg,
  FooterMenuListItem,
  FooterIconLogo,
  FooterDescGrid,
  FooterDesignByBox,
  MindpathBox,
  DesignBox,
  FooterDescBox,
} from './footer.style';

interface IProps
  extends Readonly<{
    isPadding: boolean;
  }> {}

/**
 * @component {Footer} - This component is for Footer.
 * @param {IProps} props
 * @return {JSX.Element}
 */
const Footer = (props: IProps): JSX.Element => {
  const { isPadding } = props;
  const currentYear: number = new Date().getFullYear();

  return (
    <FooterBg isPadding={isPadding}>
      <FooterIconLogo>
        <Link href={RoutePathEnum.HOME}>
          <Image
            alt="IAMPROSAY"
            src={CommonCreditLogoIcon}
            width="75"
            height="70"
          />
        </Link>
      </FooterIconLogo>
      <CustomContainer>
        <Grid container spacing={4} mt="20px" mb="50px">
          <FooterDescGrid item md={5} xs={12}>
            <Link href={RoutePathEnum.HOME}>
              <Image
                alt="IAMPROSAY"
                src={CommonCreditLogo}
                width="300"
                height="42"
                title="IAMPROSAY"
              />
            </Link>
            <Spacing variant={SpacingEnum.BOTTOM} spacing={2} />
            <Typography variant="body2" sx={{ mt: 1, textAlign: 'left' }}>
              IAMPROSAY is a legal information website, not a law firm or
              substitute for an attorney. It does not provide legal advice or
              represent clients. IAMPROSAY offers self-help tools and general
              legal information, but using the site does not create an
              attorney-client relationship. Since IAMPROSAY is not a law firm,
              it does not guarantee outcomes for legal cases or accept liability
              for case results. Any use of IAMPROSAY's services is subject to
              its Terms of Service, Privacy Policy, and Disclaimers. For direct
              legal advice or representation, it's important to consult a
              licensed attorney. IAMPROSAY aims to provide helpful legal
              information, but cannot substitute for personalized legal counsel.
            </Typography>
          </FooterDescGrid>
          <Grid item md={2} xs={12}>
            <Typography variant="h5">Quick Menu</Typography>
            <FooterMenu>
              <CustomList>
                {quickMenu.map((data: IQuickMenu, index: number) => (
                  <FooterMenuListItem
                    key={StringHelper.generateUID(data.text, index)}
                  >
                    <Link href={data.route}>{data.text}</Link>
                  </FooterMenuListItem>
                ))}
              </CustomList>
            </FooterMenu>
          </Grid>
          <Grid item md={2} xs={12}>
            <Typography variant="h5">Quick Links</Typography>
            <FooterMenu>
              <CustomList>
                {quickLink.map((data: IQuickLink, index: number) => (
                  <FooterMenuListItem
                    key={StringHelper.generateUID(data.text, index)}
                  >
                    <Link href={data.route}>{data.text}</Link>
                  </FooterMenuListItem>
                ))}
              </CustomList>
            </FooterMenu>
          </Grid>
          <Grid item md={3} xs={12}>
            <Typography variant="h5">Get In Touch</Typography>
            <FooterMenu>
              <CustomList>
                {getInTouch.map((data: IGetInTouch, index: number) => (
                  <FooterMenuListItem
                    key={StringHelper.generateUID(data.text, index)}
                  >
                    <Icon icon={data.icon} color="inherit" disableButton />
                    <Spacing variant={SpacingEnum.RIGHT} spacing={1.5} />
                    <Link href={data.route}>
                      <Typography>{data.text}</Typography>
                    </Link>
                  </FooterMenuListItem>
                ))}
              </CustomList>
            </FooterMenu>
          </Grid>
        </Grid>
      </CustomContainer>
      <FooterDesignByBox>
        <FooterDescBox>
          <Typography>Copyright ©{currentYear} </Typography>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={RoutePathEnum.HOME}
          >
            IAMPROSAY
          </a>
        </FooterDescBox>
        <FooterDescBox>
          <DesignBox>
            <Typography>Designed & Developed by</Typography>
          </DesignBox>
          <MindpathBox>
            <a target="_blank" rel="noopener noreferrer" href={MINDPATH}>
              Mindpath
            </a>
          </MindpathBox>
        </FooterDescBox>
      </FooterDesignByBox>
    </FooterBg>
  );
};

export default memo(Footer);
