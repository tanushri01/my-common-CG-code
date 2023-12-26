import { Box, styled, Card } from '@mui/material';

export const BlogCardBox = styled(Card)(({ theme }) => ({
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: theme.palette.border.main,
  boxShadow: '1px 0px 4px 2px rgba(0, 0, 0, 0.06)',
  borderRadius: '18px',
  background: theme.palette.primary.light,
  height: '100%',
}));

export const CardButton = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 0, 1),

  a: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    fontWeight: 500,
  },
}));

export const ImageBox = styled(Box)({
  img: {
    objectFit: 'contain',
    width: '100%  !important',
    height: '100%  !important',
  },
});
