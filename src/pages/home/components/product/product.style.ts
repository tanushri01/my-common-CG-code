import { Box, styled } from '@mui/material';

export const ImageWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '-170px',
  top: '-50px',

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));
