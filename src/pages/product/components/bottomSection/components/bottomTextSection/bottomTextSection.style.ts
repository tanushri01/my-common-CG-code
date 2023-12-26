import { Box, styled } from '@mui/material';

export const TextSectionRight = styled(Box)(({ theme }) => ({
  width: '65%',
  marginBottom: theme.spacing(15),

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    boxShadow: '0px 1px 4px 1px rgba(0, 0, 0, 0.25)',
    borderRadius: '15px',
    padding: theme.spacing(6, 3),
    textAlign: 'center',
    marginBottom: theme.spacing(-6),
    zIndex: 1,
    background: theme.palette.getContrastText(theme.palette.primary.main),
  },
}));

export const TextSectionHeading = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',

  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },

  h1: {
    [theme.breakpoints.down('xl')]: {
      fontSize: theme.typography.h2.fontSize,
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: theme.typography.h3.fontSize,
    },
  },
}));
