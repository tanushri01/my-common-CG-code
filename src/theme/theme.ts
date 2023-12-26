import {
  createTheme,
  Theme,
  responsiveFontSizes,
  Direction,
} from '@mui/material';

import { baseThemeOptions } from './base.theme.options';
import { lightThemeOptions } from './light.theme.options';

interface ThemeConfig {
  direction?: Direction;
  responsiveFontSizes?: boolean;
  mode: 'light' | 'dark';
}

export const createMuiTheme = (config: ThemeConfig): Theme => {
  let theme = createTheme(baseThemeOptions, lightThemeOptions, {
    direction: config.direction,
  });

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
