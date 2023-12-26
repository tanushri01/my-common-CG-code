import { Box, Grid, styled } from '@mui/material';

export const TeamBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(15),

  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(6),
  },

  h2: {
    marginBottom: theme.spacing(12),

    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
    },
  },
}));

export const ImageOuterBox = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  height: '400px',
  width: '600px',
  borderRadius: '15px',
  position: 'relative',

  [theme.breakpoints.down('lg')]: {
    background: 'none',
  },
  [theme.breakpoints.down('md')]: {
    left: '17%',
    marginTop: theme.spacing(10),
    background: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    left: '-1%',
    background: 'none',
    margin: 'auto',
  },
  [theme.breakpoints.down('cxs')]: {
    width: '100%',
    left: 0,
    background: 'none',
    marginTop: theme.spacing(2),
    height: 'auto',
  },

  img: {
    position: 'absolute',
    top: -20,
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '15px',

    [theme.breakpoints.down('cxs')]: {
      borderRadius: '5px',
      position: 'unset',
      maxWidth: '100%',
      transform: 'none',
      maxHeight: '300px',
    },
    [theme.breakpoints.down('md')]: {
      top: 32,
      left: '58%',
    },
  },
}));

export const TeamWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('cxs')]: {
    background: theme.palette.primary.light,
  },
}));

export const TeamGrid = styled(Grid)(({ theme }) => ({
  alignItems: 'center',

  [theme.breakpoints.down('cxs')]: {
    flexDirection: 'column-reverse',
    padding: theme.spacing(0, 0, 4),
  },
}));
