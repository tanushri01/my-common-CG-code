import React from 'react';
import dynamic from 'next/dynamic';
import { Anchorme } from 'react-anchorme';

import { List, Typography, Box } from '@/components';
import {
  ITemsOfService,
  TemsOfService,
  TemsOfServiceContent,
  UpdatedDate,
} from '@/json';
import { StringHelper } from '@/helper';
import { AuthContentWrapper, CustomContainer } from '@/styles';
import { TERMS_OF_SERVICE } from '@/constant';

import {
  CustomListItem,
  AddressBox,
  SubTitleListItem,
  SubTitleList,
  SubTitleListContent,
  TitleList,
  DateTypography,
  TermsAndServiceBox,
} from './termsOfService.style';

const Layout = dynamic(() => import('../../layout'));
const Heading = dynamic(() => import('../../components/heading'));

/**
 * @page {TermsOfService} - This page is used for showing terms of service.
 * @return {JSX.Element}
 */
const TermsOfService = (): JSX.Element => (
  <AuthContentWrapper>
    <CustomContainer>
      <Heading title={TERMS_OF_SERVICE} subTitle={TERMS_OF_SERVICE} />
      <TermsAndServiceBox>
        <Box sx={{ display: 'flex' }}>
          <Typography color="primary" variant="subtitle2">
            Updated |
          </Typography>
          <DateTypography variant="subtitle2">{UpdatedDate}</DateTypography>
        </Box>
        <List>
          {TemsOfServiceContent.map((data: string, index: number) => (
            <CustomListItem key={StringHelper.generateUID(data, index)}>
              {data
                .replace(/\u21b5/g, '\n')
                .split('\n')
                .map((content: string, indexNum: number) => (
                  <Typography key={StringHelper.generateUID(content, indexNum)}>
                    <Anchorme target="_blank">{content}</Anchorme>
                  </Typography>
                ))}
            </CustomListItem>
          ))}
        </List>

        {TemsOfService.map((data: ITemsOfService, index: number) => (
          <TitleList key={StringHelper.generateUID(data.title, index)}>
            <Typography variant="h6" sx={{ ml: 0.5 }}>
              {data.title}
            </Typography>
            {data.subTitle.map((subTitleData: string, indexNum: number) => (
              <SubTitleListItem
                key={StringHelper.generateUID(subTitleData, indexNum)}
              >
                {subTitleData
                  .replace(/\u21b5/g, '\n')
                  .split('\n')
                  .map((content: string, indexNumber: number) => (
                    <Typography
                      key={StringHelper.generateUID(content, indexNumber)}
                    >
                      <Anchorme target="_blank" color="primary">
                        {content}
                      </Anchorme>
                    </Typography>
                  ))}
              </SubTitleListItem>
            ))}

            {data.subTitle_1 && (
              <SubTitleList>
                <Typography sx={{ ml: 0.5 }}>{data.subTitle_1}</Typography>
                {data.subTitle_1_content?.map(
                  (subTitleData: string, indexNum: number) => (
                    <SubTitleListContent
                      key={StringHelper.generateUID(subTitleData, indexNum)}
                    >
                      <Typography>{subTitleData}</Typography>
                    </SubTitleListContent>
                  ),
                )}
              </SubTitleList>
            )}

            {data.subTitle_2 && (
              <SubTitleList>
                <Typography sx={{ ml: 0.5 }}>{data.subTitle_2}</Typography>
                {data.subTitle_2_content?.map(
                  (subTitleData: string, indexNum: number) => (
                    <SubTitleListContent
                      key={StringHelper.generateUID(subTitleData, indexNum)}
                    >
                      <Typography>{subTitleData}</Typography>
                    </SubTitleListContent>
                  ),
                )}
              </SubTitleList>
            )}

            {data.address?.map((address: string, indexNum: number) => (
              <AddressBox key={StringHelper.generateUID(address, indexNum)}>
                {address
                  .replace(/\u21b5/g, '\n')
                  .split('\n')
                  .map((content: string, indexNumber: number) => (
                    <Typography
                      key={StringHelper.generateUID(content, indexNumber)}
                    >
                      <Anchorme target="_blank" color="primary">
                        {content}
                      </Anchorme>
                    </Typography>
                  ))}
              </AddressBox>
            ))}
          </TitleList>
        ))}
      </TermsAndServiceBox>
    </CustomContainer>
  </AuthContentWrapper>
);

TermsOfService.getLayout = (page: JSX.Element) => (
  <Layout title={TERMS_OF_SERVICE}>{page}</Layout>
);

export default TermsOfService;
