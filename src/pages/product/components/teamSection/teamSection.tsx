import React from 'react';
import Image from 'next/image';

import Heading from '@/components/heading';
import { TEAM } from '@/constant';
import { CustomContainer } from '@/styles';
import { Grid } from '@/components';
import { ITeamTextSection } from '@/json';

import TeamCard from './components/teamCard';
import {
  ImageOuterBox,
  TeamBox,
  TeamGrid,
  TeamWrapper,
} from './teamSection.style';

interface IProps
  extends Readonly<{
    imageUrl: string;
    textSection: ITeamTextSection[];
  }> {}

/**
 * @component {TeamSection} - This component is for showing Team component
 * @param {IProps} props
 * @return {JSX.Element}
 */
const TeamSection = (props: IProps): JSX.Element => {
  const { imageUrl, textSection } = props;

  return (
    <TeamBox>
      <Heading title={TEAM} subTitle={TEAM} />
      <TeamWrapper>
        <CustomContainer>
          <TeamGrid container spacing={{ md: 0, sm: 2, xl: 12 }}>
            <Grid item sm={12} xl={6} md={6}>
              <TeamCard textSection={textSection} />
            </Grid>
            <Grid item sm={12} xl={6} md={6}>
              <ImageOuterBox>
                <Image src={imageUrl} alt="Team" width={550} height={450} />
              </ImageOuterBox>
            </Grid>
          </TeamGrid>
        </CustomContainer>
      </TeamWrapper>
    </TeamBox>
  );
};

export default TeamSection;
