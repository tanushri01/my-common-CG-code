import { Box, styled } from '@mui/material';

export const TextBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 0, 0, 3),

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3, 0, 0),
    textAlign: 'center',
  },
}));

export const TriangleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(8),
  position: 'relative',

  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(4),
    flexDirection: 'column',

    '&::after': {
      display: 'none',
    },
  },

  '&::after': {
    position: 'absolute',
    background: theme.palette.border.light,
    content: '""',
    height: '2px',
    width: '100%',
    bottom: '-35px',
  },
}));
