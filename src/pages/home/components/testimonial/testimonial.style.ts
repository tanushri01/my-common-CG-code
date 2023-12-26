import { Box, styled } from '@mui/material';

export const TestimonialWrapper = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(20),
  position: 'relative',

  p: {
    lineHeight: '36px',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(0, 7),

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
    },
  },

  img: {
    margin: '0 auto',
  },
}));

export const SliderBox = styled(Box)(() => ({
  position: 'relative',
}));

export const QutoeBox = styled(Box)(({ theme }) => ({
  position: 'absolute',

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));
