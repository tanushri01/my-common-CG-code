import { Box, styled } from '@mui/material';

export const ImageWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  left: '-5px',

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },

  [theme.breakpoints.down('sm')]: {
    display: 'block',
    left: '0',

    img: {
      width: '100%',
    },
  },
}));
