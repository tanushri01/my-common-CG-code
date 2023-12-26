import { Box, styled } from '@mui/material';

export const HeadingBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  marginBottom: theme.spacing(6),

  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(2),
  },

  h3: {
    color: theme.palette.text.disabled,
    textTransform: 'uppercase',
    lineHeight: theme.spacing(4.5),
    fontSize: theme.typography.h2.fontSize,

    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.h3.fontSize,
    },
  },

  h2: {
    color: theme.palette.primary.main,
    position: 'relative',
    top: theme.spacing(-1.2),
    lineHeight: theme.spacing(4.5),

    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.h3.fontSize,
      top: theme.spacing(-2.2),
    },
  },
}));
