import { Box, styled } from '@mui/material';

export const ChooseYourPackageBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(8, 0, 14),

  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(4, 0, 6),
  },
}));
