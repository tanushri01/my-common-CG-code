import { Box, styled, Theme } from '@mui/material';

import { SpacingEnum } from './enum';

interface IProps {
  spacing: number;
  theme?: Theme;
  variant?: SpacingEnum;
}

/**
 * @component {Spacing} - This component is using for spacing.
 */
export const Spacing = styled(Box)(
  ({ theme, spacing = 3, variant }: IProps) => {
    switch (variant) {
      case SpacingEnum.TOP:
        return {
          marginTop: theme?.spacing(spacing),
        };
      case SpacingEnum.BOTTOM:
        return {
          marginBottom: theme?.spacing(spacing),
        };
      case SpacingEnum.RIGHT:
        return {
          marginRight: theme?.spacing(spacing),
        };
      case SpacingEnum.LEFT:
        return {
          marginLeft: theme?.spacing(spacing),
        };
      case SpacingEnum.HORIZONTAL:
        return {
          marginRight: theme?.spacing(spacing),
          marginLeft: theme?.spacing(spacing),
        };
      case SpacingEnum.VERTICAL:
        return {
          marginTop: theme?.spacing(spacing),
          marginBottom: theme?.spacing(spacing),
        };
      default:
        return {
          margin: theme?.spacing(spacing),
        };
    }
  },
);
