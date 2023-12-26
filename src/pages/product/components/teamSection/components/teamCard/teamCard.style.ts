import { Box, styled } from '@mui/material';

export const TeamTitleCard = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.light,
  padding: theme.spacing(4, 5),
  marginBottom: theme.spacing(8),
  position: 'relative',
  borderRadius: '15px',

  p: {
    display: 'inline',
  },

  h6: {
    display: 'inline',
  },

  [theme.breakpoints.down('lg')]: {
    marginBottom: theme.spacing(6),
    padding: theme.spacing(3, 4),
  },
  [theme.breakpoints.down('cxs')]: {
    marginBottom: theme.spacing(0),
    padding: theme.spacing(2, 0),
  },

  '&:after': {
    position: 'absolute',
    content: '""',
    background: theme.palette.primary.main,
    height: '70%',
    width: '4px',
    top: 20,
    left: 0,

    [theme.breakpoints.down('cxs')]: {
      display: 'none',
    },
  },

  '&:last-of-type': {
    marginBottom: theme.spacing(0),
  },
}));
