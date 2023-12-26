import { Box, Typography, styled } from '@mui/material';

export const DocumentBox = styled(Box)(({ theme }) => ({
  '.disabled': {
    opacity: '0.5',
    cursor: 'not-allowed',
    margin: theme.spacing(0, 0, 2),
  },
}));

export const ErrorTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  borderTop: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(0.5, 0, 0),
}));
