import { Box, Typography, styled } from '@mui/material';

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

export const MainHeading = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  textAlign: 'center',
  maxWidth: '500px',
  margin: '0 auto',
}));

export const LeftBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(5, 0),
  borderStyle: 'dashed',
  borderWidth: '0 1px 1px 0',
  padding: theme.spacing(0, 2, 2, 0),
  width: '50%',
}));

export const RightBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(5, 0),
  width: '50%',
  padding: theme.spacing(0, 0, 2, 2),
}));

export const BoldText = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  padding: theme.spacing(0, 0.5),
}));

export const Sign = styled(Typography)(({ theme }) => ({
  borderStyle: 'solid',
  borderWidth: '1px 0 0 0',
  display: 'inline-block',
  minWidth: '150px',
  padding: theme.spacing(1, 0, 0),
}));
