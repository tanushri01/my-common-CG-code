import { Box, styled } from '@mui/material';

export const GenearteReportBox = styled(Box)(({ theme }) => ({
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: theme.palette.border.main,
  maxWidth: '800px',
  padding: theme.spacing(10),
  margin: theme.spacing(0, 'auto'),
  borderRadius: '0 25px',

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(8, 2),
  },

  h3: {
    textAlign: 'center',
    marginBottom: theme.spacing(5),
  },
}));

export const DebtCollectorBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(5, 0),
}));
