import { Box, styled } from '@mui/material';

export const ImageBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    img: {
      width: 'auto',
      height: '270px',
    },
  },
}));

export const ContentCard = styled(Box)(({ theme }) => ({
  width: '590px',
  display: 'inline-block',
  marginTop: theme.spacing(3.5),
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {},
}));
