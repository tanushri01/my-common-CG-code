import { Box, styled } from '@mui/material';

export const MarketBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  background: theme.palette.background.paper,

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
  },
}));

export const MarketSizeBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(10, 0),

  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(0, 0),

    h2: {
      margin: theme.spacing(0, 0, 10),
    },
  },
}));
