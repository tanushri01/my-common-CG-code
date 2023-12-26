import { Box, Grid, styled } from '@mui/material';

export const SolutionBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  background: theme.palette.background.paper,
  justifyContent: 'center',
  marginBottom: theme.spacing(8),

  [theme.breakpoints.down('md')]: {
    paddingBottom: theme.spacing(4),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },

  '&:after': {
    content: '""',
    width: 0,
    height: 0,
    borderLeft: '25px solid transparent',
    borderRight: '25px solid transparent',
    borderTop: `25px solid ${theme.palette.background.paper}`,
    position: 'absolute',
    right: '48.5%',
    bottom: '-4%',
    transform: 'translate(0%, 0%)',

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

export const SolutionCardGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  margin: 'auto',
  marginTop: theme.spacing(-3.5),
}));

export const ImageLogoBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '-40px',
  left: ' 50px',
  borderRadius: ' 100px',
  background: theme.palette.getContrastText(theme.palette.primary.main),
  width: '83px',
  height: ' 81px',
  padding: theme.spacing(0.6),

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));
