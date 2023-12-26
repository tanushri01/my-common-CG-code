import { Box, Typography, styled } from '@mui/material';

export const DescBox = styled(Box)(({ theme }) => ({
  p: {
    margin: theme.spacing(0, 0, 2),
  },
}));

export const ListBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(0, 0, 2),

  h5: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    display: 'inline',
  },
}));

export const BlogHeading = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  margin: theme.spacing(6, 0, 1),
}));
