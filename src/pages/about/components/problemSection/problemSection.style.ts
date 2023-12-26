import { Box, styled } from '@mui/material';

export const ProblemBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  background: theme.palette.background.paper,
  marginBottom: theme.spacing(8),

  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap',
    flexDirection: 'column-reverse',
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(4),
  },
}));
