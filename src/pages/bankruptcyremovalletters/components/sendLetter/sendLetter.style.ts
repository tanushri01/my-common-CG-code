import { CircularProgress, styled } from '@mui/material';

export const CustomCircularProgress = styled(CircularProgress)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  color: theme.palette.getContrastText(theme.palette.primary.main),
  maxWidth: '20px',
  maxHeight: '20px',
}));
