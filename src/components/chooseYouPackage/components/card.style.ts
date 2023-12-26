import { Box, Button, CardContent, styled } from '@mui/material';

export const ProductDeailCard = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.primary.light,
  display: 'flex',
  flexDirection: 'column',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: theme.palette.border.main,
  borderRadius: '10px',
  boxShadow: theme.shadows[22],
  position: 'relative',
  height: '100%',
  margin: theme.spacing(0),

  [theme.breakpoints.down('sm')]: {
    maxWidth: '500px',
  },
}));

export const CustomCardActions = styled(Button)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  borderRadius: '0px 0px 10px 10px',
  fontSize: theme.typography.h4.fontSize,
}));

export const CustomCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(4, 2, 10),
}));
