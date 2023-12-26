import { Box, styled } from '@mui/material';

export const BlogImageBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),

  img: {
    borderRadius: '10px',
    height: '100%',
    width: '100%',
  },
}));

export const BlogContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  margin: theme.spacing(2, 0, 4, 0),
}));

export const BlogMainBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(4, 0, 0, 0),

  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(0),
  },

  p: {
    color: theme.palette.secondary.main,
  },
}));
