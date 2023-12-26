import { Box, styled, Typography } from '@mui/material';

export const ProblemSectionRight = styled(Box)(({ theme }) => ({
  width: '55%',
  background: theme.palette.background.paper,
  padding: theme.spacing(0),
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  margin: theme.spacing(6, 0, 8),

  [theme.breakpoints.down('md')]: {
    width: '100%',
    margin: theme.spacing(4, 0, 8),

    img: {
      width: '100%',
      height: 'auto',
    },
  },
}));

export const TypographyBox = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: '57%',
  left: '53%',
  color: theme.palette.getContrastText(theme.palette.primary.main),
}));

export const GraphTitle = styled(Box)(({ theme }) => ({
  fontWeight: '700',
  position: 'absolute',
  bottom: '-45px',
  right: '20px',
  width: '86%',
  textAlign: 'center',

  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.subtitle1.fontSize,
    right: '0px',
    width: '75%',
  },
}));
