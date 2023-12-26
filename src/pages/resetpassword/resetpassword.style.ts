import { Box, styled } from '@mui/material';

export const LoginFooter = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',

  [theme.breakpoints.down('sm')]: {
    justifyContent: 'end',
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

export const SignInContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  postion: 'relative',
  width: '100%',
  padding: theme.spacing(0, 0, 21),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 0, 8),
  },
}));
