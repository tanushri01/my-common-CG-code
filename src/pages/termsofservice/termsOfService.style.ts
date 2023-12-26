import { List, Box, ListItem, Typography, styled } from '@mui/material';

export const CustomListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1, 0),
  a: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
  p: {
    textAlign: 'left',
    color: theme.palette.secondary.main,
  },
}));

export const AddressBox = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(0, 5),
  a: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
  p: {
    color: theme.palette.secondary.main,
  },
}));

export const SubTitleListItem = styled(ListItem)(({ theme }) => ({
  listStyleType: 'decimal',
  display: 'list-item',
  fontWeight: theme.typography.fontWeightRegular,
  marginLeft: theme.spacing(3),
  a: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
  p: {
    textAlign: 'left',
    color: theme.palette.secondary.main,
  },
}));

export const SubTitleListContent = styled(ListItem)(({ theme }) => ({
  listStyleType: 'decimal',
  display: 'list-item',
  fontWeight: theme.typography.fontWeightRegular,
  marginLeft: theme.spacing(5),
}));

export const SubTitleList = styled(List)(({ theme }) => ({
  listStyleType: 'decimal',
  display: 'list-item',
  fontWeight: theme.typography.fontWeightRegular,
  marginLeft: theme.spacing(3),
  p: {
    color: theme.palette.secondary.main,
  },
}));

export const TitleList = styled(List)(({ theme }) => ({
  listStyleType: 'decimal',
  display: 'list-item',
  color: theme.palette.secondary.main,
  fontWeight: theme.typography.fontWeightBold,
  marginLeft: theme.spacing(2),
  h6: {
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export const DateTypography = styled(Typography)(({ theme }) => ({
  marginLeft: 1,
  fontStyle: 'italic',
  color: theme.palette.secondary.main,
}));

export const TermsAndServiceBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(2),
  },
}));
