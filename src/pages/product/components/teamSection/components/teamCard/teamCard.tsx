import React from 'react';
import { useTheme } from '@mui/material';

import { Box, Typography } from '@/components';
import { StringHelper } from '@/helper';

import { TeamTitleCard } from './teamCard.style';

interface ITextData {
  text: string;
  isActive: boolean;
}

export interface ITeamTextSection {
  text1: ITextData;
  text2: ITextData;
  text3: ITextData;
}

interface IProps
  extends Readonly<{
    textSection: ITeamTextSection[];
  }> {}

/**
 * @component {TeamCard} This is Component for showing Team Card.
 * @param {IProps} props
 * @return {JSX.Element}
 */
const TeamCard = (props: IProps): JSX.Element => {
  const { textSection } = props;
  const theme = useTheme();

  return (
    <Box>
      {textSection.map((data: ITeamTextSection, index: number) => (
        <TeamTitleCard key={StringHelper.generateUID(`data+${index}`, index)}>
          <Typography
            color={
              data.text1.isActive ? 'primary' : theme.palette.secondary.dark
            }
            variant={data.text1.isActive ? 'h6' : 'body1'}
          >
            {data.text1.text}
          </Typography>
          <Typography
            color={
              data.text2.isActive ? 'primary' : theme.palette.secondary.dark
            }
            variant={data.text2.isActive ? 'h6' : 'body1'}
          >
            {data.text2.text}
          </Typography>
          <Typography
            color={
              data.text3.isActive ? 'primary' : theme.palette.secondary.dark
            }
            variant={data.text3.isActive ? 'h6' : 'body1'}
          >
            {data.text3.text}
          </Typography>
        </TeamTitleCard>
      ))}
    </Box>
  );
};

export default TeamCard;
