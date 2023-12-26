import { Box, styled } from '@mui/material';

export const AboutTextSectionLeft = styled(Box)(({ theme }) => ({
  width: '100%',
  background: theme.palette.primary.light,
  padding: theme.spacing(5, 29, 5, 20),
  maxHeight: '455px',
  marginTop: theme.spacing(7.5),

  [theme.breakpoints.down('lgplus')]: {
    maxHeight: 'inherit',
    padding: theme.spacing(5, 6, 5, 10),
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(0),
    padding: theme.spacing(3, 2),
  },
}));

export const AboutContent = styled(Box)({
  position: 'relative',

  '&:last-of-type': {
    '.MuiBox-root': {
      margin: 0,

      '&::after': {
        display: 'none',
      },
    },
  },
});
