import { Box, styled } from '@mui/material';

export const ProblemSectionLeft = styled(Box)(({ theme }) => ({
  width: '45%',
  background: theme.palette.primary.light,
  borderRadius: '0px 0px 50px 0px',
  padding: theme.spacing(10, 4, 10, 10),

  [theme.breakpoints.down('md')]: {
    width: '100%',
    borderRadius: 0,
    padding: theme.spacing(4, 4, 4, 10),
  },

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3, 2),
    background: theme.palette.getContrastText(theme.palette.primary.main),
  },
}));

export const ProblemTextContent = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(5),

  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(3),
  },

  '&:last-child': {
    marginBottom: 0,
  },
}));
