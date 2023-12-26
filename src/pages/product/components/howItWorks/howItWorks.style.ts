import { Box, Grid, styled } from '@mui/material';
import Link from 'next/link';

import Circle from '../../../../assets/images/pages/product/circle.png';

export const HowItWoksOuterBox = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.light,
  padding: theme.spacing(8, 0),

  [theme.breakpoints.down('sm')]: {
    padding: 0,

    '&>.MuiBox-root': {
      padding: 0,
    },
  },
}));

export const GetStartedBox = styled(Grid)(({ theme }) => ({
  marginLeft: theme.spacing(13),
  display: 'flex',
  flexDirection: 'column',

  [theme.breakpoints.down('sm')]: {
    marginLeft: theme.spacing(0),
  },
}));

export const HowItWoksBox = styled(Grid)(({ theme }) => ({
  background: theme.palette.primary.light,

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
    padding: 0,
  },
}));

export const HowItWorksWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  margin: theme.spacing(8, 0, 14),

  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(4, 0, 6),
  },

  h2: {
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 0, 14),
    },
  },
}));

export const TextSectionLeft = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),

  [theme.breakpoints.down('xl')]: {
    padding: theme.spacing(2, 0),
    width: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    background: theme.palette.clickableCard.main,
    padding: theme.spacing(6, 2, 2),
  },
}));

export const TextBox = styled(Box)(() => ({
  '&:last-of-type': {
    '.MuiBox-root': {
      margin: 0,

      '&::after': {
        display: 'none',
      },
    },
  },
}));

export const GridItemText = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('lgplus')]: {
    maxwWidth: '60%',
  },
}));

export const ImageOuterBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: '1%',
  width: '40%',
  display: 'flex',
  justifyContent: 'end',
  bottom: '60px',

  [theme.breakpoints.down('xl')]: {
    right: '1%',
  },
  [theme.breakpoints.down('md')]: {
    right: '2%',
  },
  [theme.breakpoints.down('sm')]: {
    position: 'unset',
    width: '100%',
  },
}));

export const ImageInnerBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url("${Circle.src}")`,
  height: '449px',
  width: '450px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',

  [theme.breakpoints.down('sm')]: {
    backgroundImage: 'none',
    width: '100%',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    display: 'flex',
  },

  img: {
    top: '-61px',
    position: 'absolute',
    right: '-11px',

    [theme.breakpoints.down('sm')]: {
      right: 'unset',
      left: '50%',
      transform: 'translateX(-50%)',
      top: '63px',
      maxWidth: '100%',
    },
  },
}));

export const CustomLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  marginBottom: theme.spacing(6),
  display: 'block',
  cursor: 'pointer',
  color: theme.palette.text.primary,
}));
