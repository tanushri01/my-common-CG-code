import { Box, styled } from '@mui/material';

export const CircleIconBox = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  width: '80px',
  minWidth: '80px',
  height: '80px',
  WebkitBorderRadius: '50px',
  MozBorderRadius: '50px',
  OBorderRadius: '50px',
  borderRadius: '50px',
  outlineOffset: '5px',
  display: 'flex',
  outline: ` 1px dashed ${theme.palette.primary.main}`,
  alignItems: 'center',
  justifyContent: 'center',

  h6: {
    fontWeight: theme.typography.h3.fontWeight,
  },

  button: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
    padding: theme.spacing(0),
  },
}));

export const BottomIconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  marginBottom: theme.spacing(10),

  [theme.breakpoints.down('sm')]: {
    display: '-webkit-box',
    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',
    overflowX: 'auto',
    padding: theme.spacing(2, 0, 4, 0),
    marginBottom: theme.spacing(2),
  },
}));

export const BottomWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  [theme.breakpoints.down('md')]: {
    width: '50%',
    marginBottom: theme.spacing(4),
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginBottom: theme.spacing(0),
    display: 'flex',
  },
}));
