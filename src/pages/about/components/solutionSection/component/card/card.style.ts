import { Box, styled, Card } from '@mui/material';

export const BlogCardBox = styled(Card)(({ theme }) => ({
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: theme.palette.border.main,
  boxShadow: '1px 0px 4px 2px rgba(0, 0, 0, 0.06)',
  borderRadius: '5px',
  background: theme.palette.primary.light,
  width: '340px',
  height: '357px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  borderBottom: `3px solid ${theme.palette.primary.main}`,
  marginBottom: theme.spacing(5),

  [theme.breakpoints.down('md')]: {
    width: '45%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '50%',
    height: 'inherit',
    marginBottom: theme.spacing(0),
    paddingBottom: theme.spacing(2),
    margin: theme.spacing(0, 0.6),
    marginTop: theme.spacing(4),

    img: {
      width: '150px',
      height: 'auto',
    },
  },

  h6: {
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.h3.fontWeight,

    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.subtitle1.fontSize,
      textAlign: 'center',
    },
  },
}));

export const ImageBox = styled(Box)({
  img: {
    objectFit: 'contain',
  },
});
