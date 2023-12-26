import { Box, styled } from '@mui/material';

export const AboutBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(4),

  [theme.breakpoints.down('sm')]: {
    flexWrap: 'wrap',
    flexDirection: 'column-reverse',
    marginTop: theme.spacing(3),
  },
}));
