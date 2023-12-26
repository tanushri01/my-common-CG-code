import { styled, Typography } from '@mui/material';

export const FormSubheading = styled(Typography)(({ theme }) => ({
  maxWidth: '600px',
  textAlign: 'center',
  margin: '0 auto',
  marginBottom: theme.spacing(15),

  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(7),
  },
}));
