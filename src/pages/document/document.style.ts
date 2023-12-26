import { Box, styled, Typography } from '@mui/material';

export const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  postion: 'relative',
  padding: theme.spacing(5, 0, 14),
}));

export const ContentInnerWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

export const ContentCard = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(2),
  },
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: theme.spacing(6),

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const TriTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.h6.fontSize,
  },
}));

export const TriBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '30px',

  [theme.breakpoints.down('sm')]: {
    gap: '10px',
  },
}));
