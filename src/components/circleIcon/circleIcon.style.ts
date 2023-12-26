import { Box, styled } from '@mui/material';

export const IconBox = styled(Box, {
  shouldForwardProp: (props: string) => props !== 'hiddenBg',
})<{ hiddenBg?: boolean }>(({ theme, hiddenBg }) => ({
  background: theme.palette.primary.main,
  width: '80px',
  minWidth: '80px',
  height: '80px',
  borderRadius: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.contrastText,

  [theme.breakpoints.down('sm')]: {
    background: hiddenBg && 'inherit',
    width: 'auto',
    minWidth: 'auto',
    height: 'auto',

    svg: {
      color: hiddenBg && theme.palette.primary.main,
    },
  },
}));
