import { Box, styled } from '@mui/material';

export const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  postion: 'relative',
  padding: theme.spacing(5, 0, 21),

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 0, 8),
  },
}));

export const ContentInnerWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',

  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(0),
  },
}));

export const ContentCard = styled(Box)(({ theme }) => ({
  width: '590px',
  display: 'inline-block',
  marginTop: theme.spacing(3.5),

  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(0),
  },
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  position: 'inherit',
  marginTop: theme.spacing(8),

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));
