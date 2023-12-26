import { Box, styled } from '@mui/material';

export const ImageSectionLeft = styled(Box)(({ theme }) => ({
  width: '35%',
  position: 'relative',
  marginBottom: theme.spacing(-1),
  left: 0,
  marginRight: theme.spacing(4),

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    margin: theme.spacing(0, 2, 3),
  },

  img: {
    width: `100% !important`,
    height: `100% !important`,
    borderRadius: theme.shape.borderRadius,
  },
}));
