import { Box, Button, styled } from '@mui/material';

export const LinkWrapper = styled('span')(({ theme }) => ({
  a: {
    textDecoration: 'none',
    color: theme.palette.primary.main,

    '&:hover': {
      color: theme.palette.secondary.main,
      cursor: 'pointer',
      textDecoration: 'none',
    },
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'right',
  },
}));

export const AuthContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  postion: 'relative',
  padding: theme.spacing(5, 0, 20),

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(5, 0, 4),
  },
}));

export const AuthBox = styled(Box)(({ theme }) => ({
  width: '500px',
  display: 'inline-block',
  marginTop: theme.spacing(8),

  [theme.breakpoints.down('sm')]: {
    width: '360px',
  },
}));

export const CustomButtonBox = styled(Button)(({ theme }) => ({
  borderRadius: '0px 5px',
  textTransform: 'none',
  fontWeight: 500,

  a: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
    textDecoration: 'none',
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const AuthPasswordWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',

  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
}));

export const CustomContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  width: '100%',
  maxWidth: '1280px',
  margin: '0 auto',

  [theme.breakpoints.down('lgplus')]: {
    padding: theme.spacing(0, 10),
    maxWidth: '100%',
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(0, 4),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 2),
  },
}));

export const BottomSectionBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'end',
  marginTop: theme.spacing(10),

  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(6),
    flexWrap: 'wrap',
  },

  '&::after': {
    position: 'absolute',
    width: '480px',
    height: '168px',
    left: '0px',
    content: '""',
    background: theme.palette.primary.main,
    bottom: '0px',
    zIndex: '-1',

    [theme.breakpoints.down('lgplus')]: {
      width: '280px',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

export const StepBox = styled(Box)(({ theme }) => ({
  maxWidth: '600px',
  minWidth: '600px',
  margin: '0 auto',

  [theme.breakpoints.down('sm')]: {
    minWidth: '100%',
  },

  a: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },

  '.MuiFormControl-root': {
    marginBottom: theme.spacing(4),

    '.Mui-disabled': {
      color: `${theme.palette.primary.main} !important`,
    },

    '&:last-child': {
      marginBottom: theme.spacing(0),
    },
  },
}));
