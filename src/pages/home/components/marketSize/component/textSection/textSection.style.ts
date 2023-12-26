import { Box, styled } from '@mui/material';

export const MarketSizeLeft = styled(Box)(({ theme }) => ({
  width: '50%',
  background: theme.palette.primary.light,
  borderRadius: '0px 0px 50px 0px',
  padding: theme.spacing(10, 4, 10, 20),

  [theme.breakpoints.down('xl')]: {
    padding: theme.spacing(6, 4, 6, 10),
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 2, 6, 4),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    width: '100%',
    background: theme.palette.background.default,
    borderRadius: '0px',
  },
}));
