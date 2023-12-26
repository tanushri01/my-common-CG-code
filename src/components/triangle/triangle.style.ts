import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, styled } from '@mui/material';

import { TriangleIconSizeEnum } from '@/enum';

export const CardIcon = styled(FontAwesomeIcon, {
  shouldForwardProp: (props: string) => props !== 'isActive',
})<{ isActive?: boolean }>(({ theme, isActive }) => ({
  zIndex: '0',
  position: 'absolute',
  color: isActive ? theme.palette.primary.main : theme.palette.common.white,
  transform: 'translate(-50%, -50%)',
  top: '58%',
  left: '51%',
}));

export const CardIconWrapper = styled(Box, {
  shouldForwardProp: (props: string) => props !== 'size',
})<{ size?: TriangleIconSizeEnum }>(({ size }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  minWidth: 80,
  width: size === TriangleIconSizeEnum.LG ? 150 : 80,
  height: size === TriangleIconSizeEnum.LG ? 150 : 80,
}));
