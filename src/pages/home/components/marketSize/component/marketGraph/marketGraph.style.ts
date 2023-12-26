import { Box, styled } from '@mui/material';

export const LargestCirlce = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.light,
  height: '115%',
  borderRadius: '50%',
  margin: theme.spacing(-10, 0, 0),
  position: 'relative',
  minWidth: '600px',

  [theme.breakpoints.down('xl')]: {
    minWidth: '500px',
  },
  [theme.breakpoints.down('md')]: {
    minWidth: '400px',
    margin: theme.spacing(-8, 0, 0),
  },
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(-10, 0, 0),
    height: '120%',
  },
  [theme.breakpoints.down('cxs')]: {
    height: '370px',
    minWidth: '100%',
  },
}));

export const LargerCirlce = styled(Box)(({ theme }) => ({
  position: 'absolute',
  background: theme.palette.primary.main,
  margin: theme.spacing(6, 0, 0),
  height: '100%',
  top: '-50px',
  width: '50%',
  left: '25%',
  borderRadius: '50%',
  minWidth: '520px',

  [theme.breakpoints.down('xl')]: {
    left: '21%',
    minWidth: '445px',
  },
  [theme.breakpoints.down('lg')]: {
    minWidth: '400px',
  },
  [theme.breakpoints.down('md')]: {
    left: '15%',
    minWidth: '370px !important',
    height: '92%',
    margin: theme.spacing(11, 0, 0),
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '425px !important',
    height: '90%',
  },
  [theme.breakpoints.down('cxs')]: {
    height: '83%',
    minWidth: '72% !important',
    left: '14%',
    margin: theme.spacing(8, 0, 0),
  },
}));

export const Cirlce = styled(Box)(({ theme }) => ({
  position: 'absolute',
  background: '#3084F2',
  margin: theme.spacing(18, 0, 0),
  height: '81%',
  top: '-50px',
  width: '40%',
  left: '30%',
  borderRadius: '50%',
  minWidth: '425px',

  [theme.breakpoints.down('xl')]: {
    left: '27%',
    minWidth: '360px',
    height: '79%',
  },
  [theme.breakpoints.down('lg')]: {
    minWidth: '325px',
  },
  [theme.breakpoints.down('md')]: {
    left: '24%',
    minWidth: '280px !important',
    height: '69%',
    margin: theme.spacing(24, 0, 0),
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '315px !important',
  },
  [theme.breakpoints.down('cxs')]: {
    height: '61%',
    minWidth: '56% !important',
    left: '22%',
    margin: theme.spacing(18, 0, 0),
  },
}));

export const TextBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '5%',
  textAlign: 'center',
  left: '50%',
  transform: 'translateX(-50%)',
  color: theme.palette.getContrastText(theme.palette.primary.main),

  h5: {
    fontWeight: 700,
  },

  p: {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: 500,
  },
}));

export const MarketSizeRight = styled(Box)(({ theme }) => ({
  width: '50%',
  background: theme.palette.background.paper,
  padding: theme.spacing(0, 25, 0, 25),
  position: 'relative',

  [theme.breakpoints.down('xl')]: {
    padding: theme.spacing(0, 15, 0, 15),
  },
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(0, 10, 0, 10),
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3, 4, 0, 5),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
    height: '500px',
    width: '80%',
    margin: '0 auto',
  },
  [theme.breakpoints.down('cxs')]: {
    height: '360px',
    width: '100%',
  },
}));
