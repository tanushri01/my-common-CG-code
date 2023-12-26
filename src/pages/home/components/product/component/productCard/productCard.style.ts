import { Box, styled } from '@mui/material';
import Link from 'next/link';

export const ProductDeailCard = styled(Box)(({ theme }) => ({
  cursor: 'pointer',
  width: '100%',
  height: '100%',
  minHeight: '400px',
  backgroundColor: theme.palette.primary.light,
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: theme.palette.border.light,
  borderBottom: `3px solid ${theme.palette.primary.dark}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  borderRadius: '5px',
  transition: '0.4s',

  [theme.breakpoints.down('sm')]: {
    minHeight: '300px',
  },

  svg: {
    '&:nth-of-type(1)': {
      path: { fill: theme.palette.primary.contrastText },
    },
    '&:nth-of-type(2)': {
      path: { fill: theme.palette.primary.main },
    },
  },

  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    borderBottom: `3px solid ${theme.palette.background.paper}`,
    transition: '0.4s',

    h4: {
      color: theme.palette.primary.contrastText,
      textDecoration: 'none',
      cursor: 'pointer',
    },

    svg: {
      '&:nth-of-type(1)': {
        path: { fill: theme.palette.primary.main },
      },
      '&:nth-of-type(2)': {
        path: { fill: theme.palette.primary.contrastText },
      },
    },
  },

  h4: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    cursor: 'pointer',
  },
}));

export const ProductLink = styled(Link)(() => ({
  width: '100%',
  textDecoration: 'none',
}));
