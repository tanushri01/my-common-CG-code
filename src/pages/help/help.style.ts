import { Typography, styled } from '@mui/material';

export const Question = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  margin: theme.spacing(4, 0, 2),
  fontSize: theme.typography.h4.fontSize,
}));
