import { Box, styled } from '@mui/material';

export const ForgotContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  postion: 'relative',
  width: '100%',
  padding: theme.spacing(0, 0, 35),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 0, 8),
  },
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  textAlign: 'center',
  position: 'absolute',
  right: '0px',
  top: '105px',

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
